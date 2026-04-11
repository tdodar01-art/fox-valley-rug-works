'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface MetricsChartProps {
  data: Array<{
    date: string;
    clicks?: number;
    impressions?: number;
    spend?: number;
    conversions?: number;
  }>;
  metrics: Array<{
    key: string;
    label: string;
    color: string;
  }>;
}

export default function MetricsChart({ data, metrics }: MetricsChartProps) {
  if (data.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-[var(--color-gold)]/10 p-12 text-center">
        <div className="text-[var(--color-slate)]">No data available for chart</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-[var(--color-gold)]/10 p-6">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#C4993B20" />
          <XAxis
            dataKey="date"
            stroke="#4A5568"
            style={{ fontSize: '12px', fontFamily: 'var(--font-libre-franklin)' }}
          />
          <YAxis
            stroke="#4A5568"
            style={{ fontSize: '12px', fontFamily: 'var(--font-libre-franklin)' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #C4993B40',
              borderRadius: '8px',
              fontFamily: 'var(--font-libre-franklin)',
              fontSize: '12px',
            }}
          />
          <Legend
            wrapperStyle={{
              fontFamily: 'var(--font-libre-franklin)',
              fontSize: '12px',
            }}
          />
          {metrics.map((metric) => (
            <Line
              key={metric.key}
              type="monotone"
              dataKey={metric.key}
              name={metric.label}
              stroke={metric.color}
              strokeWidth={2}
              dot={{ fill: metric.color, r: 4 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
