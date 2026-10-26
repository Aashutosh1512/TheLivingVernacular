import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, palette, navigateTo, compact = false, onEnquire }) {
  if (compact) {
    return (
      <div
        style={{
          backgroundColor: palette.tokens.surface,
          borderColor: palette.tokens.border
        }}
        className="rounded-3xl border p-6 md:p-8 hover:shadow-md transition-shadow"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
            {service.title}
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 font-medium">
              {service.fee}
            </span>
            <span style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono">
              {service.timeline}
            </span>
          </div>
        </div>

        <p style={{ color: palette.tokens.mutedFg }} className="text-sm leading-relaxed mb-5">
          {service.suits}
        </p>

        <div
          style={{ borderColor: palette.tokens.border }}
          className="pt-4 border-t flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex flex-wrap gap-2">
            {service.includes.slice(0, 2).map((inc, i) => (
              <span
                key={i}
                style={{ color: palette.tokens.mutedFg }}
                className="text-xs inline-flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                <span className="truncate max-w-xs">{inc}</span>
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => navigateTo('service-detail', service.id)}
            className="inline-flex items-center gap-1 text-xs font-medium underline underline-offset-4 hover:opacity-70 shrink-0"
          >
            <span>Service details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: palette.tokens.surface,
        borderColor: palette.tokens.border
      }}
      className="rounded-3xl border p-6 md:p-8 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="text-2xl font-medium tracking-tight">{service.title}</h2>
          <span className="px-3 py-1 rounded-full bg-stone-100 font-semibold text-neutral-900">
            {service.fee}
          </span>
        </div>
        <p style={{ color: palette.tokens.mutedFg }} className="text-sm leading-relaxed mb-6">
          {service.summary}
        </p>

        <div
          style={{ borderColor: palette.tokens.border }}
          className="border-t py-4 space-y-2 text-xs"
        >
          <div className="flex justify-between">
            <span style={{ color: palette.tokens.mutedFg }}>Typical timeline</span>
            <span className="font-mono font-medium">{service.timeline}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span style={{ color: palette.tokens.mutedFg }} className="shrink-0">
              Who it suits
            </span>
            <span className="text-right">{service.suits}</span>
          </div>
        </div>

        <div
          style={{ borderColor: palette.tokens.border }}
          className="border-t pt-4 mt-2 space-y-2"
        >
          <p style={{ color: palette.tokens.mutedFg }} className="text-[11px] font-mono uppercase">
            What is included
          </p>
          <ul className="space-y-1.5 text-xs">
            {service.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 mt-0.5 text-neutral-900 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => navigateTo('service-detail', service.id)}
          className="text-xs font-medium underline underline-offset-4 hover:opacity-70"
        >
          View full scope &amp; deliverables
        </button>
        <button
          type="button"
          onClick={() => onEnquire && onEnquire(service.title)}
          className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-medium hover:opacity-90"
        >
          Enquire for {service.title} →
        </button>
      </div>
    </div>
  );
}
