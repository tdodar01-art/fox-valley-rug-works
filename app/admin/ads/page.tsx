'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import DataTable from '@/components/admin/DataTable';
import DateRangePicker from '@/components/admin/DateRangePicker';
import MetricsChart from '@/components/admin/MetricsChart';
import { useAuth } from '@/hooks/useAuth';
import { getAdsSnapshots, getDateRangeConstraints, AdsSnapshot, AdsCampaign } from '@/lib/firestore';
import { subDays, format } from 'date-fns';

export default function AdsPage() {
  const { user } = useAuth();
  const [dateRange, setDateRange] = useState({
    start: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd'),
    label: 'Last 30 days',
  });

  const [adsData, setAdsData] = useState<AdsSnapshot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAdsSnapshots(getDateRangeConstraints(dateRange.start, dateRange.end));
        setAdsData(data);
      } catch (error) {
        console.error('Error fetching ads data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, dateRange]);

  // Aggregate campaign data
  const campaignsMap = new Map<string, { spend: number; clicks: number; conversions: number }>();
  adsData.forEach((snapshot) => {
    snapshot.campaigns.forEach((campaign) => {
      const existing = campaignsMap.get(campaign.name);
      if (existing) {
        existing.spend += campaign.spend;
        existing.clicks += campaign.clicks;
        existing.conversions += campaign.conversions;
      } else {
        campaignsMap.set(campaign.name, { ...campaign });
      }
    });
  });
  const allCampaigns = Array.from(campaignsMap.entries()).map(([name, data]) => ({
    name,
    spend: data.spend,
    clicks: data.clicks,
    conversions: data.conversions,
    cost_per_conversion: data.conversions > 0 ? data.spend / data.conversions : 0,
  }));

  // Chart data
  const chartData = adsData.map((snapshot) => ({
    date: snapshot.date,
    spend: snapshot.spend,
    conversions: snapshot.conversions,
  })).reverse();

  if (!user) return null;

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)]">
            Google Ads
          </h1>
          <DateRangePicker value={dateRange} onChange={setDateRange} />
        </div>

        {loading ? (
          <div className="text-center py-12 text-[var(--color-slate)]">Loading...</div>
        ) : (
          <>
            {/* Spend Over Time */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-charcoal)] mb-4">
                Spend & Conversions Over Time
              </h2>
              <MetricsChart
                data={chartData}
                metrics={[
                  { key: 'spend', label: 'Spend ($)', color: '#B7472A' },
                  { key: 'conversions', label: 'Conversions', color: '#7C8C6E' },
                ]}
              />
            </div>

            {/* Campaign Breakdown */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--color-charcoal)] mb-4">
                Campaign Performance
              </h2>
              <DataTable
                data={allCampaigns}
                columns={[
                  { key: 'name', header: 'Campaign Name' },
                  { key: 'spend', header: 'Spend', render: (row) => `$${row.spend.toFixed(2)}` },
                  { key: 'clicks', header: 'Clicks' },
                  { key: 'conversions', header: 'Conversions' },
                  {
                    key: 'cost_per_conversion',
                    header: 'Cost/Conv',
                    render: (row) => row.cost_per_conversion > 0 ? `$${row.cost_per_conversion.toFixed(2)}` : 'N/A',
                  },
                ]}
                emptyMessage="No campaign data available for this period"
              />
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
