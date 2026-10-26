import React from 'react';
import { Check } from 'lucide-react';

export default function BlueprintPage({ palette }) {
  const columns = [
    {
      title: '1. Visual & Grid Architecture',
      items: [
        'Warm stone canvas (#F4F4F0) paired with crisp white cards (#FFFFFF) and 1px hairline borders (#E2E1DA).',
        'Full-height rounded-3xl photo panels where the rooms supply 100% of the colour (zero synthetic accent colour).',
        'Top continuous marquee ticker + floating upper-left rounded-2xl header pill (SANDSTONE&CO® + = menu toggle).',
        'Semi-transparent hero watermark typography (SNDST) anchored across the lower hero frame.'
      ]
    },
    {
      title: '2. Typography & Micro-Layout',
      items: [
        'Inter Medium (font-medium tracking-tight) in sentence case for calm, architectural legibility.',
        'Selective italic serif emphasis words (Instrument Serif) inside large editorial statements.',
        'Tabular monospace numerals (01–06, sq. ft. / m², live IST studio clock) for specifications and plain-row facts.',
        'Plain-row key-value tables for project facts (Client, Location, Year, Status, Area) and maker directories.'
      ]
    },
    {
      title: '3. Indian Market Localization',
      items: [
        'Fixed-fee services structured in ₹ INR (Lakhs/Crores) with transparent 1/3 · 1/3 · 1/3 stage payments and zero karigar markup.',
        'Dual area units (sq. ft. + m²) and Indian climate/spatial vocabulary (Vastu courtyards, IPS terrazzo, araish lime, chhajjas).',
        '6 Indian case studies spanning Fort Kochi, Ballard Estate (Mumbai), Udaipur, Indiranagar (Bengaluru), Coonoor, and Alibaug.',
        'Live Indian Standard Time (IST) clock and 4 switchable Indian geological stone token palettes.'
      ]
    }
  ];

  return (
    <div className="space-y-12 pt-6">
      <div className="max-w-4xl">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-3">
          Deep Inspection &amp; Architecture Blueprint
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight leading-[1.12]">
          Anatomy of{' '}
          <span className="font-serif-italic font-normal text-4xl sm:text-6xl">
            Lexington Themes Sandstone
          </span>{' '}
          &amp; its Indian Studio Adaptation.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((col) => (
          <div
            key={col.title}
            style={{
              backgroundColor: palette.tokens.surface,
              borderColor: palette.tokens.border
            }}
            className="rounded-3xl border p-6 md:p-8 space-y-4"
          >
            <h2 className="text-lg font-medium">{col.title}</h2>
            <ul className="space-y-2.5 text-xs leading-relaxed text-neutral-600">
              {col.items.map((it, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 mt-0.5 text-neutral-900 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
