import React from 'react';
import { STUDIO_STATS } from '../../data/studioData';

export default function StudioStats({ palette }) {
  return (
    <section
      style={{
        backgroundColor: palette.tokens.surface,
        borderColor: palette.tokens.border
      }}
      className="rounded-3xl border p-6 md:p-12"
    >
      <div className="max-w-2xl mb-10">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
          The Studio in Numbers
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
          Small by choice, working directly with Indian stonemasons, lime ustads and timber joiners.
        </h2>
      </div>

      <div
        style={{ borderColor: palette.tokens.border }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t pt-8 gap-8"
      >
        {STUDIO_STATS.map((stat, idx) => (
          <div
            key={stat.number}
            style={{ borderColor: palette.tokens.border }}
            className={`${idx > 0 ? 'sm:border-l sm:pl-6' : ''}`}
          >
            <p className="text-4xl md:text-5xl font-medium tracking-tight font-mono mb-3">
              {stat.number}
            </p>
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
