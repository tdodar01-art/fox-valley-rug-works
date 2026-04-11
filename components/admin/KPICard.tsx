interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
  };
}

export default function KPICard({ title, value, subtitle, trend }: KPICardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[var(--color-gold)]/10 p-6">
      <div className="text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] uppercase tracking-wider mb-2">
        {title}
      </div>
      <div className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[var(--color-charcoal)] mb-1">
        {value}
      </div>
      {subtitle && (
        <div className="text-sm text-[var(--color-slate)]">{subtitle}</div>
      )}
      {trend && (
        <div className={`text-sm font-semibold mt-2 ${
          trend.direction === 'up' ? 'text-green-600' :
          trend.direction === 'down' ? 'text-red-600' :
          'text-[var(--color-slate)]'
        }`}>
          {trend.direction === 'up' && '↑ '}
          {trend.direction === 'down' && '↓ '}
          {trend.value}
        </div>
      )}
    </div>
  );
}
