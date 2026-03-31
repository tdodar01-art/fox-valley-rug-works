'use client';

interface PhotoPlaceholderProps {
  description: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4';
  className?: string;
}

const ratioMap = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '3:4': 'aspect-[3/4]',
};

export default function PhotoPlaceholder({
  description,
  aspectRatio = '16:9',
  className = '',
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${ratioMap[aspectRatio]} ${className}`}
      style={{
        background: 'linear-gradient(135deg, #F5F0E8 0%, #D4B896 40%, #B7472A20 100%)',
      }}
    >
      <div className="absolute inset-[1px] rounded-lg border border-[#C4993B]/20" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <p className="text-center text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] italic opacity-70">
          {description}
        </p>
      </div>
    </div>
  );
}
