import React from 'react';

export default function ProcessSteps({ palette }) {
  const steps = [
    {
      step: '01. Visit and brief',
      feeShare: 'Fixed fee proposal',
      desc: 'We walk your apartment, site, or heritage building together, study the sun path and Vastu orientation, discuss how your family or guests will use each room, and send one fixed fee within two working days.'
    },
    {
      step: '02. Concept & material tray',
      feeShare: '1/3 fee at start',
      desc: 'We settle the floor plan and build a physical material tray of honed stones, lime plaster samples, timber sections, and unbleached handloom weaves so you can touch every surface before anything is ordered.'
    },
    {
      step: '03. Drawings and sourcing',
      feeShare: '1/3 at drawing approval',
      desc: 'We produce 60+ detailed Good-for-Construction (GFC) drawings for civil, electrical, AC, and joinery, and commission custom furniture directly from our network of Indian karigars at workshop cost.'
    },
    {
      step: '04. Site and handover',
      feeShare: '1/3 at final handover',
      desc: 'We visit the site every week alongside your civil team, inspect stone laying and lime curing, oversee furniture installation, and hand over a calm, finished space ready to live in.'
    }
  ];

  return (
    <section className="space-y-8">
      <div className="max-w-2xl">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
          How We Work
        </p>
        <h2 className="text-2xl sm:text-4xl font-medium tracking-tight">
          Four clear stages from the first site walk to the day we hang the curtains.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((item) => (
          <div
            key={item.step}
            style={{
              backgroundColor: palette.tokens.surface,
              borderColor: palette.tokens.border
            }}
            className="rounded-3xl border p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="font-semibold text-neutral-900">{item.step}</span>
                <span style={{ color: palette.tokens.mutedFg }}>{item.feeShare}</span>
              </div>
              <p style={{ color: palette.tokens.mutedFg }} className="text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
