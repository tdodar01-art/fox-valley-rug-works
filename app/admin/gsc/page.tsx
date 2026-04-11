'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import DataTable from '@/components/admin/DataTable';
import DateRangePicker from '@/components/admin/DateRangePicker';
import { useAuth } from '@/hooks/useAuth';
import { getGSCSnapshots, getDateRangeConstraints, GSCSnapshot, GSCQuery, GSCPage } from '@/lib/firestore';
import { subDays, format } from 'date-fns';

export default function GSCDashboard() {
  const { user } = useAuth();
  const [dateRange, setDateRange] = useState({
    start: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd'),
    label: 'Last 30 days',
  });

  const [gscData, setGscData] = useState<GSCSnapshot[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'queries' | 'pages'>('queries');

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getGSCSnapshots(getDateRangeConstraints(dateRange.start, dateRange.end));
        setGscData(data);
      } catch (error) {
        console.error('Error fetching GSC data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, dateRange]);

  // Aggregate queries
  const queriesMap = new Map<string, { clicks: number; impressions: number; ctr: number; position: number; count: number }>();
  gscData.forEach((snapshot) => {
    snapshot.top_queries.forEach((query) => {
      const existing = queriesMap.get(query.query);
      if (existing) {
        existing.clicks += query.clicks;
        existing.impressions += query.impressions;
        existing.position += query.position;
        existing.count += 1;
      } else {
        queriesMap.set(query.query, { ...query, count: 1 });
      }
    });
  });
  const allQueries = Array.from(queriesMap.entries()).map(([query, data]) => ({
    query,
    clicks: data.clicks,
    impressions: data.impressions,
    ctr: data.clicks / data.impressions,
    position: data.position / data.count,
  }));

  // Aggregate pages
  const pagesMap = new Map<string, { clicks: number; impressions: number; ctr: number; position: number; count: number }>();
  gscData.forEach((snapshot) => {
    snapshot.top_pages.forEach((page) => {
      const existing = pagesMap.get(page.page);
      if (existing) {
        existing.clicks += page.clicks;
        existing.impressions += page.impressions;
        existing.position += page.position;
        existing.count += 1;
      } else {
        pagesMap.set(page.page, { ...page, count: 1 });
      }
    });
  });
  const allPages = Array.from(pagesMap.entries()).map(([page, data]) => ({
    page,
    clicks: data.clicks,
    impressions: data.impressions,
    ctr: data.clicks / data.impressions,
    position: data.position / data.count,
  }));

  if (!user) return null;

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)]">
            Google Search Console
          </h1>
          <DateRangePicker value={dateRange} onChange={setDateRange} />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-[var(--color-gold)]/20">
          <button
            onClick={() => setActiveTab('queries')}
            className={`px-6 py-3 font-[family-name:var(--font-libre-franklin)] text-sm transition-colors ${
              activeTab === 'queries'
                ? 'border-b-2 border-[var(--color-rust)] text-[var(--color-rust)] font-semibold'
                : 'text-[var(--color-slate)] hover:text-[var(--color-charcoal)]'
            }`}
          >
            Queries ({allQueries.length})
          </button>
          <button
            onClick={() => setActiveTab('pages')}
            className={`px-6 py-3 font-[family-name:var(--font-libre-franklin)] text-sm transition-colors ${
              activeTab === 'pages'
                ? 'border-b-2 border-[var(--color-rust)] text-[var(--color-rust)] font-semibold'
                : 'text-[var(--color-slate)] hover:text-[var(--color-charcoal)]'
            }`}
          >
            Pages ({allPages.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-[var(--color-slate)]">Loading...</div>
        ) : (
          <>
            {activeTab === 'queries' && (
              <DataTable
                data={allQueries}
                columns={[
                  { key: 'query', header: 'Search Query' },
                  { key: 'clicks', header: 'Clicks' },
                  { key: 'impressions', header: 'Impressions' },
                  { key: 'ctr', header: 'CTR', render: (row) => `${(row.ctr * 100).toFixed(2)}%` },
                  { key: 'position', header: 'Avg Position', render: (row) => row.position.toFixed(1) },
                ]}
                emptyMessage="No query data available for this period"
              />
            )}

            {activeTab === 'pages' && (
              <DataTable
                data={allPages}
                columns={[
                  { key: 'page', header: 'Page URL' },
                  { key: 'clicks', header: 'Clicks' },
                  { key: 'impressions', header: 'Impressions' },
                  { key: 'ctr', header: 'CTR', render: (row) => `${(row.ctr * 100).toFixed(2)}%` },
                  { key: 'position', header: 'Avg Position', render: (row) => row.position.toFixed(1) },
                ]}
                emptyMessage="No page data available for this period"
              />
            )}
          </>
        )}
      </div>
    </AdminLayout>
  );
}
