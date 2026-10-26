import React from 'react';

export default function StatementSection({ palette }) {
  return (
    <section className="max-w-5xl">
      <p
        style={{ color: palette.tokens.mutedFg }}
        className="text-xs font-mono uppercase tracking-wider mb-4"
      >
        About Sandstone &amp; Co. India
      </p>
      <h2 className="text-3xl sm:text-5xl md:text-[56px] font-medium tracking-tight leading-[1.12]">
        We are an{' '}
        <span className="font-serif-italic font-normal text-4xl sm:text-6xl md:text-[64px]">
          interior design studio
        </span>{' '}
        in Bengaluru and Mumbai, shaping{' '}
        <span className="font-serif-italic font-normal text-4xl sm:text-6xl md:text-[64px]">
          homes, heritage hotels and workplaces
        </span>{' '}
        around natural daylight, indigenous stone, breathable lime and the way Indian families live.
      </h2>
    </section>
  );
}
