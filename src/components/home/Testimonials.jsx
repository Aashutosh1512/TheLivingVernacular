import React from 'react';

export default function Testimonials({ palette }) {
  const quotes = [
    {
      quote:
        'They convinced us not to rip up our 1928 Ballard Estate terrazzo floor. Six months later, the restored mosaic and lime walls make the flat feel ten degrees cooler and a hundred years calmer.',
      author: 'Rustom & Meher Daruwalla',
      role: 'Homeowners, Ballard Estate apartment, South Mumbai'
    },
    {
      quote:
        'Every contractor and stone quarry invoice came directly to us at cost, and Ananya and Vikram were on site in Fort Kochi through the heaviest July monsoon rains. Our guests never want to leave the lounge.',
      author: 'Siddharth Menon',
      role: 'Founder, Malabar House Collective, Fort Kochi'
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {quotes.map((t) => (
        <div
          key={t.author}
          style={{
            backgroundColor: palette.tokens.surface,
            borderColor: palette.tokens.border
          }}
          className="rounded-3xl border p-8 md:p-10 flex flex-col justify-between"
        >
          <p className="text-lg sm:text-xl font-normal leading-relaxed mb-8">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div
            style={{ borderColor: palette.tokens.border }}
            className="pt-4 border-t flex items-center justify-between text-xs"
          >
            <span className="font-medium">{t.author}</span>
            <span style={{ color: palette.tokens.mutedFg }}>{t.role}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
