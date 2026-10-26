import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ClosingStatement({ palette, navigateTo }) {
  return (
    <section
      style={{
        backgroundColor: palette.tokens.surface,
        borderColor: palette.tokens.border
      }}
      className="rounded-3xl border p-8 sm:p-12 md:p-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
    >
      <div className="max-w-3xl">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-3">
          New Enquiries · 2026 / 2027
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight leading-[1.12]">
          Tell us about your{' '}
          <span className="font-serif-italic font-normal text-4xl sm:text-6xl">space</span>.
          We take on{' '}
          <span className="font-serif-italic font-normal text-4xl sm:text-6xl">
            four projects
          </span>{' '}
          at a time and reply within{' '}
          <span className="font-serif-italic font-normal text-4xl sm:text-6xl">
            two working days
          </span>
          .
        </h2>
      </div>

      <button
        type="button"
        onClick={() => navigateTo('contact')}
        className="px-6 py-4 rounded-2xl bg-neutral-900 text-white text-sm font-medium inline-flex items-center gap-3 hover:opacity-90 transition-opacity shrink-0"
      >
        <span>Start an enquiry</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </section>
  );
}
