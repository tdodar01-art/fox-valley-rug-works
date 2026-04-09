import Image from 'next/image';

interface RugTypeCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function RugTypeCard({ title, description, imageSrc, imageAlt }: RugTypeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--color-charcoal)] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-slate)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
