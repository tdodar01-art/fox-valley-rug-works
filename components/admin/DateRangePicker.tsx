'use client';

import { subDays, format } from 'date-fns';

interface DateRange {
  start: string;
  end: string;
  label: string;
}

interface DateRangePickerProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
}

const PRESETS: DateRange[] = [
  {
    start: format(subDays(new Date(), 7), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd'),
    label: 'Last 7 days',
  },
  {
    start: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd'),
    label: 'Last 30 days',
  },
  {
    start: format(subDays(new Date(), 90), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd'),
    label: 'Last 90 days',
  },
];

export default function DateRangePicker({ value, onChange }: DateRangePickerProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)]">
        Period:
      </span>
      <div className="flex gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => onChange(preset)}
            className={`px-4 py-2 rounded text-sm font-[family-name:var(--font-libre-franklin)] transition-colors ${
              value.label === preset.label
                ? 'bg-[var(--color-rust)] text-white'
                : 'bg-white text-[var(--color-charcoal)] border border-[var(--color-gold)]/20 hover:border-[var(--color-rust)]'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
