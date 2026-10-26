import React from 'react';
import { PRESS_LOGOS } from '../../data/studioData';

export default function PressBar({ palette }) {
  return (
    <section
      style={{ borderColor: palette.tokens.border }}
      className="border-y py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center"
    >
      {PRESS_LOGOS.map((brand) => (
        <div key={brand.name} className="text-left">
          <p className="text-sm font-semibold tracking-widest opacity-80">{brand.name}</p>
          <p style={{ color: palette.tokens.mutedFg }} className="text-[11px] font-mono">
            {brand.sub}
          </p>
        </div>
      ))}
    </section>
  );
}
