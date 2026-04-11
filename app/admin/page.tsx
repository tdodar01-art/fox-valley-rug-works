'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import KPICard from '@/components/admin/KPICard';
import MetricsChart from '@/components/admin/MetricsChart';
import DataTable from '@/components/admin/DataTable';
import DateRangePicker from '@/components/admin/DateRangePicker';
import { useAuth } from '@/hooks/useAuth';
import {
  getGSCSnapshots,
  getAdsSnapshots,
  getActivityLogs,
  getDateRangeConstraints,
  GSCSnapshot,
  AdsSnapshot,
  ActivityLog,
} from '@/lib/firestore';
import { orderBy, limit } from 'firebase/firestore';
import { subDays, format } from 'date-fns';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [dateRange, setDateRange] = useState({
    start: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd'),
    label: 'Last 30 days',
  });

  const [gscData, setGscData] = useState<GSCSnapshot[]>([]);
  const [adsData, setAdsData] = useState<AdsSnapshot[]>([]);
  const [activityData, setActivityData] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [gsc, ads, activity] = await Promise.all([
          getGSCSnapshots(getDateRangeConstraints(dateRange.start, dateRange.end)),
          getAdsSnapshots(getDateRangeConstraints(dateRange.start, dateRange.end)),
          getActivityLogs([orderBy('created_at', 'desc'), limit(10)]),
        ]);
        setGscData(gsc);
        setAdsData(ads);
        setActivityData(activity);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, dateRange]);

  // Calculate KPIs
  const totalClicks = gscData.reduce((sum, s) => sum + s.total_clicks, 0);
  const totalImpressions = gscData.reduce((sum, s) => sum + s.total_impressions, 0);
  const avgPosition = gscData.length > 0
    ? gscData.reduce((sum, s) => {
        const avgPos = s.top_queries.reduce((acc, q) => acc + q.position, 0) / s.top_queries.length;
        return sum + avgPos;
      }, 0) / gscData.length
    : 0;
  const totalSpend = adsData.reduce((sum, s) => sum + s.spend, 0);
  const totalConversions = adsData.reduce((sum, s) => sum + s.conversions, 0);
  const avgCostPerConv = totalConversions > 0 ? totalSpend / totalConversions : 0;

  // Prepare chart data
  const chartData = gscData.map((gsc) => {
    const ads = adsData.find((a) => a.date === gsc.date);
    return {
      date: gsc.date,
      clicks: gsc.total_clicks,
      impressions: gsc.total_impressions,
      spend: ads?.spend || 0,
    };
  }).reverse();

  // Top queries (aggregate across all snapshots)
  const queriesMap = new Map<string, { clicks: number; impressions: number; ctr: number; position: number }>();
  gscData.forEach((snapshot) => {
    snapshot.top_queries.forEach((query) => {
      const existing = queriesMap.get(query.query);
      if (existing) {
        existing.clicks += query.clicks;
        existing.impressions += query.impressions;
      } else {
        queriesMap.set(query.query, { ...query });
      }
    });
  });
  const topQueries = Array.from(queriesMap.entries())
    .map(([query, data]) => ({ query, ...data }))
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 10);

  // Top pages
  const pagesMap = new Map<string, { clicks: number; impressions: number; ctr: number; position: number }>();
  gscData.forEach((snapshot) => {
    snapshot.top_pages.forEach((page) => {
      const existing = pagesMap.get(page.page);
      if (existing) {
        existing.clicks += page.clicks;
        existing.impressions += page.impressions;
      } else {
        pagesMap.set(page.page, { ...page });
      }
    });
  });
  const topPages = Array.from(pagesMap.entries())
    .map(([page, data]) => ({ page, ...data }))
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 10);

  if (!user) return null;

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)]">
            Dashboard
          </h1>
          <DateRangePicker value={dateRange} onChange={setDateRange} />
        </div>

        {loading ? (
          <div className="text-center py-12 text-[var(--color-slate)]">Loading...</div>
        ) : (
          <>
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <KPICard
                title="Total Clicks"
                value={totalClicks.toLocaleString()}
                subtitle={`${dateRange.label}`}
              />
              <KPICard
                title="Total Impressions"
                value={totalImpressions.toLocaleString()}
                subtitle={`${dateRange.label}`}
              />
              <KPICard
                title="Avg Position"
                value={avgPosition > 0 ? avgPosition.toFixed(1) : 'N/A'}
                subtitle="Search ranking"
              />
              <KPICard
                title="Ad Spend"
                value={`$${totalSpend.toFixed(2)}`}
                subtitle={`${dateRange.label}`}
              />
              <KPICard
                title="Conversions"
                value={totalConversions}
                subtitle="From ads"
              />
              <KPICard
                title="Cost/Conv"
                value={avgCostPerConv > 0 ? `$${avgCostPerConv.toFixed(2)}` : 'N/A'}
                subtitle="Average"
              />
            </div>

            {/* Chart */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-charcoal)] mb-4">
                Performance Over Time
              </h2>
              <MetricsChart
                data={chartData}
                metrics={[
                  { key: 'clicks', label: 'Clicks', color: '#B7472A' },
                  { key: 'impressions', label: 'Impressions', color: '#3B6B8C' },
                ]}
              />
            </div>

            {/* Top Queries */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-charcoal)] mb-4">
                Top 10 Queries
              </h2>
              <DataTable
                data={topQueries}
                columns={[
                  { key: 'query', header: 'Query' },
                  { key: 'clicks', header: 'Clicks' },
                  { key: 'impressions', header: 'Impressions' },
                  { key: 'ctr', header: 'CTR', render: (row) => `${(row.ctr * 100).toFixed(2)}%` },
                  { key: 'position', header: 'Position', render: (row) => row.position.toFixed(1) },
                ]}
                emptyMessage="No query data available for this period"
              />
            </div>

            {/* Top Pages */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-charcoal)] mb-4">
                Top 10 Pages
              </h2>
              <DataTable
                data={topPages}
                columns={[
                  { key: 'page', header: 'Page' },
                  { key: 'clicks', header: 'Clicks' },
                  { key: 'impressions', header: 'Impressions' },
                  { key: 'ctr', header: 'CTR', render: (row) => `${(row.ctr * 100).toFixed(2)}%` },
                  { key: 'position', header: 'Position', render: (row) => row.position.toFixed(1) },
                ]}
                emptyMessage="No page data available for this period"
              />
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-charcoal)] mb-4">
                Recent Activity
              </h2>
              <DataTable
                data={activityData}
                columns={[
                  { key: 'date', header: 'Date' },
                  { key: 'type', header: 'Type', render: (row) => row.type.replace('_', ' ').toUpperCase() },
                  { key: 'description', header: 'Description' },
                  { key: 'author', header: 'Author' },
                ]}
                emptyMessage="No activity logged yet"
              />
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
