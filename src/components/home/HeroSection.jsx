import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../../data/palettes';

export default function HeroSection({ palette, navigateTo }) {
  return (
    <section className="relative rounded-3xl overflow-hidden min-h-[540px] md:min-h-[680px] flex flex-col justify-end p-6 md:p-12 bg-stone-900">
      <img
        src={IMAGES.studioHero}
        alt="Two Indian architects setting a wooden table on trestles in a sunlit lime-plastered studio"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

      <div className="pointer-events-none select-none absolute inset-x-0 bottom-6 md:bottom-10 flex justify-center overflow-hidden">
        <span className="text-[96px] sm:text-[160px] md:text-[230px] font-semibold tracking-tighter leading-none text-white/15">
          SNDST
        </span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl text-white">
          <p className="text-xs font-mono uppercase tracking-widest text-white/80 mb-2">
            Bengaluru · Mumbai · Udaipur · Fort Kochi
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.12]">
            Rooms shaped around{' '}
            <span className="font-serif-italic font-normal text-3xl sm:text-5xl md:text-[54px]">
              monsoon light
            </span>
            , Indian stone and quiet craft.
          </h1>
        </div>

        <div
          style={{
            backgroundColor: palette.tokens.surface,
            color: palette.tokens.fg
          }}
          className="rounded-2xl p-4 sm:p-5 max-w-xs shadow-lg"
        >
          <p style={{ color: palette.tokens.mutedFg }} className="text-[11px] font-mono uppercase mb-1">
            01 / Studio Table
          </p>
          <p className="text-xs leading-relaxed mb-3">
            Ananya Rao and Vikramaditya Mehta reviewing honed Kota stone, Dholpur sandstone and raw Chanderi linen at our Lavelle Road studio.
          </p>
          <button
            type="button"
            onClick={() => navigateTo('projects')}
            className="inline-flex items-center gap-1.5 text-xs font-medium underline underline-offset-4 hover:opacity-70"
          >
            <span>Explore 06 built case studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
