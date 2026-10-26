import React from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/palettes';

export default function ServiceDetailPage({
  currentService,
  palette,
  navigateTo,
  onSelectServiceForEnquiry
}) {
  return (
    <div className="space-y-12 pt-6">
      <button
        type="button"
        onClick={() => navigateTo('services')}
        className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-100"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>All services</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div
          style={{
            backgroundColor: palette.tokens.surface,
            borderColor: palette.tokens.border
          }}
          className="lg:col-span-7 rounded-3xl border p-8 md:p-12 space-y-6"
        >
          <div className="flex items-center justify-end text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-stone-100 font-semibold">
              {currentService.fee} · {currentService.timeline}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight">
            {currentService.title}
          </h1>
          <p style={{ color: palette.tokens.mutedFg }} className="text-base leading-relaxed">
            {currentService.summary}
          </p>

          <div style={{ borderColor: palette.tokens.border }} className="pt-6 border-t">
            <h3 className="text-sm font-medium mb-4">What this service includes</h3>
            <ul className="space-y-3 text-sm">
              {currentService.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-neutral-900 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ borderColor: palette.tokens.border }} className="pt-6 border-t">
            <h3 className="text-sm font-medium mb-2">Key deliverables</h3>
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs leading-relaxed">
              {currentService.deliverables}
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-stone-200">
            <img
              src={IMAGES.materialDetail}
              alt={currentService.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{
              backgroundColor: palette.tokens.surface,
              borderColor: palette.tokens.border
            }}
            className="rounded-3xl border p-6 space-y-4"
          >
            <p className="text-sm font-medium">Commission {currentService.title}</p>
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs leading-relaxed">
              {currentService.suits}
            </p>
            <button
              type="button"
              onClick={() => onSelectServiceForEnquiry(currentService.title)}
              className="w-full py-3 px-4 rounded-2xl bg-neutral-900 text-white text-xs font-medium flex items-center justify-between"
            >
              <span>Book a site visit for {currentService.title}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
