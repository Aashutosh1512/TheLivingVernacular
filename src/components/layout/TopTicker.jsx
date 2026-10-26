import React from 'react';

export default function TopTicker({ palette, istTime }) {
  return (
    <div
      style={{
        backgroundColor: palette.tokens.bg,
        borderColor: palette.tokens.border,
        color: palette.tokens.mutedFg
      }}
      className="w-full border-b py-2 overflow-hidden text-xs tracking-wide sticky top-0 z-40"
    >
      <div className="animate-marquee-ticker">
        {[1, 2].map((loop) => (
          <div key={loop} className="flex items-center space-x-8 px-4 whitespace-nowrap">
            <span>12 Lavelle Road, Bengaluru &amp; Ballard Estate, Mumbai</span>
            <span className="opacity-40">//</span>
            <span>Mon to Sat, 10 to 19 IST</span>
            <span className="opacity-40">//</span>
            <span>+91 80 4120 8890</span>
            <span className="opacity-40">//</span>
            <span>TheLivingVernacular@inc.in</span>
            <span className="opacity-40">//</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Bengaluru {istTime} IST
            </span>
            <span className="opacity-40">//</span>
            <span>Currently booking Q1–Q2 2027 (Maximum 4 active commissions)</span>
            <span className="opacity-40">//</span>
          </div>
        ))}
      </div>
    </div>
  );
}
