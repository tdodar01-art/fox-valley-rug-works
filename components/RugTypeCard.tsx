import PhotoPlaceholder from './PhotoPlaceholder';

interface RugTypeCardProps {
  title: string;
  description: string;
  photo: string;
}

export default function RugTypeCard({ title, description, photo }: RugTypeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <PhotoPlaceholder description={photo} aspectRatio="4:3" />
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--color-charcoal)] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-slate)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
