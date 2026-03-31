'use client';

import { FormEvent } from 'react';

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const rugType = data.get('rugType');
    const size = data.get('size');
    const issue = data.get('issue');

    const subject = encodeURIComponent(`Estimate Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nRug Type: ${rugType}\nApproximate Size: ${size}\n\nDescription:\n${issue}`
    );
    window.location.href = `mailto:info@foxvalleyrugworks.com?subject=${subject}&body=${body}`;
  }

  const inputClass =
    'w-full px-4 py-3 rounded border border-gray-200 bg-white text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-rust)] focus:ring-1 focus:ring-[var(--color-rust)] transition-colors font-[family-name:var(--font-body)]';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-1">
          Name
        </label>
        <input type="text" id="name" name="name" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-1">
          Phone
        </label>
        <input type="tel" id="phone" name="phone" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-1">
          Email
        </label>
        <input type="email" id="email" name="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="rugType" className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-1">
          Rug Type
        </label>
        <select id="rugType" name="rugType" className={inputClass}>
          <option value="Oriental/Persian">Oriental / Persian</option>
          <option value="Wool">Wool</option>
          <option value="Silk">Silk</option>
          <option value="Synthetic/Machine-Made">Synthetic / Machine-Made</option>
          <option value="Other/Not Sure">Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="size" className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-1">
          Approximate Size
        </label>
        <select id="size" name="size" className={inputClass}>
          <option value="Small (3x5 or less)">Small (3x5 or less)</option>
          <option value="Medium (5x8)">Medium (5x8)</option>
          <option value="Large (8x10)">Large (8x10)</option>
          <option value="Oversized (9x12+)">Oversized (9x12+)</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="issue" className="block text-sm font-[family-name:var(--font-libre-franklin)] text-[var(--color-slate)] mb-1">
          Describe the Issue
        </label>
        <textarea
          id="issue"
          name="issue"
          rows={4}
          placeholder="Stains, odor, general cleaning, etc."
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="w-full font-[family-name:var(--font-libre-franklin)] text-sm px-8 py-3 bg-[var(--color-rust)] text-white rounded hover:bg-[var(--color-rust-dark)] transition-colors"
      >
        Request Estimate
      </button>
    </form>
  );
}
