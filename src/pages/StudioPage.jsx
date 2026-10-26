import React from 'react';
import { IMAGES } from '../data/palettes';
import { MAKERS, RECOGNITION } from '../data/studioData';

export default function StudioPage({ palette }) {
  return (
    <div className="space-y-20 pt-6">
      <div className="max-w-4xl">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-3">
          The Studio · Founded 2012
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight leading-[1.12]">
          Sixteen architects, conservationists and researchers working around{' '}
          <span className="font-serif-italic font-normal text-4xl sm:text-6xl">
            one long Burma teak table
          </span>{' '}
          in Bengaluru and Mumbai.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 rounded-3xl overflow-hidden aspect-[16/10] bg-stone-200">
          <img
            src={IMAGES.studioHero}
            alt="Lavelle Road Studio space"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-5 rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto bg-stone-200">
          <img
            src={IMAGES.foundersPortrait}
            alt="Founders Ananya Rao and Vikramaditya Mehta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <section className="space-y-8">
        <div className="max-w-2xl">
          <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
            Our Approach
          </p>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight">
            Three rules we bring to every apartment, haveli and workplace.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Keep what works',
              body: 'Before drawing a single new partition, we look for what the building already gives us: old cast-in-situ IPS and terrazzo floors, seasoned Burma teak doors, thick laterite or brick walls, and deep verandahs. Repairing honest old fabric always beats replacing it with drywall.'
            },
            {
              num: '02',
              title: 'Fewer, better materials',
              body: 'Most rooms fail because twenty synthetic finishes compete for attention. We limit a house to four or five honest materials—honed Kota or Dholpur stone underfoot, breathable slaked lime on walls, oiled indigenous timber, and unbleached handloom linen.'
            },
            {
              num: '03',
              title: 'Made close to home',
              body: 'India has extraordinary living craft traditions within a few hundred kilometres of every site. Rather than shipping container-loads of fragile European veneer furniture, we build directly with Sompura stonemasons, Jaipur lime ustads, and Mysuru joiners.'
            }
          ].map((rule) => (
            <div
              key={rule.num}
              style={{
                backgroundColor: palette.tokens.surface,
                borderColor: palette.tokens.border
              }}
              className="rounded-3xl border p-8 space-y-4"
            >
              <span style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono">
                Rule {rule.num}
              </span>
              <h3 className="text-xl font-medium tracking-tight">{rule.title}</h3>
              <p style={{ color: palette.tokens.mutedFg }} className="text-xs sm:text-sm leading-relaxed">
                {rule.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          backgroundColor: palette.tokens.surface,
          borderColor: palette.tokens.border
        }}
        className="rounded-3xl border p-6 md:p-10 space-y-6"
      >
        <div className="max-w-2xl">
          <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
            The Makers We Work With
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
            Workshops, quarries and craft guilds behind our rooms.
          </h2>
        </div>

        <div style={{ borderColor: palette.tokens.border }} className="border-t divide-y text-xs">
          {MAKERS.map((m) => (
            <div
              key={m.craft}
              style={{ borderColor: palette.tokens.border }}
              className="py-4 grid grid-cols-1 md:grid-cols-12 gap-2 items-center"
            >
              <div className="md:col-span-3 font-medium">{m.craft}</div>
              <div className="md:col-span-3">{m.workshop}</div>
              <div style={{ color: palette.tokens.mutedFg }} className="md:col-span-3 font-mono">
                {m.location}
              </div>
              <div style={{ color: palette.tokens.mutedFg }} className="md:col-span-3 md:text-right">
                {m.materials}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          backgroundColor: palette.tokens.surface,
          borderColor: palette.tokens.border
        }}
        className="rounded-3xl border p-6 md:p-10 space-y-6"
      >
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase">
          Recognition &amp; Shortlists
        </p>
        <div style={{ borderColor: palette.tokens.border }} className="border-t divide-y text-xs">
          {RECOGNITION.map((r, i) => (
            <div
              key={i}
              style={{ borderColor: palette.tokens.border }}
              className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-neutral-400">{r.year}</span>
                <span className="font-medium">{r.award}</span>
              </div>
              <span style={{ color: palette.tokens.mutedFg }} className="font-mono">
                {r.project}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
