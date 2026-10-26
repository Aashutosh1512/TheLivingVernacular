import React from 'react';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';

export default function ProjectDetailPage({
  currentProject,
  nextProject,
  palette,
  navigateTo,
  setLightboxImg
}) {
  return (
    <div className="space-y-14 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigateTo('projects')}
          className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-100"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All projects (06)</span>
        </button>
        <span style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono">
          Case Study {currentProject.number} / 06 · {currentProject.location}
        </span>
      </div>

      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-4">
          {currentProject.title}
        </h1>
        <p style={{ color: palette.tokens.mutedFg }} className="text-base sm:text-xl leading-relaxed">
          {currentProject.subtitle}
        </p>
      </div>

      <div className="space-y-3">
        <div className="rounded-3xl overflow-hidden aspect-[16/9] max-h-[640px] bg-stone-200 relative group">
          <img
            src={currentProject.heroImage}
            alt={currentProject.title}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={() => setLightboxImg(currentProject.heroImage)}
            className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-white/90 text-neutral-900 text-xs font-medium inline-flex items-center gap-1.5 shadow-sm"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Inspect full frame</span>
          </button>
        </div>
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono px-2">
          Caption — {currentProject.caption}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div
          style={{
            backgroundColor: palette.tokens.surface,
            borderColor: palette.tokens.border
          }}
          className="lg:col-span-4 rounded-3xl border p-6 md:p-8"
        >
          <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-4">
            Project Facts
          </p>
          <div style={{ borderColor: palette.tokens.border }} className="divide-y text-xs">
            {[
              ['Client', currentProject.client],
              ['Location', currentProject.location],
              ['Year', currentProject.year],
              ['Status', currentProject.status],
              ['Area', currentProject.areaSqFt],
              ['Climate zone', currentProject.climate]
            ].map(([label, value]) => (
              <div
                key={label}
                style={{ borderColor: palette.tokens.border }}
                className="py-3 flex items-center justify-between gap-4"
              >
                <span style={{ color: palette.tokens.mutedFg }}>{label}</span>
                <span className="font-medium text-right">{value}</span>
              </div>
            ))}
          </div>

          <div
            style={{ borderColor: palette.tokens.border }}
            className="mt-6 pt-6 border-t"
          >
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-3">
              Materials Used
            </p>
            <div className="flex flex-wrap gap-1.5">
              {currentProject.materials.map((mat) => (
                <span
                  key={mat}
                  className="px-2.5 py-1 rounded-lg bg-stone-100 text-neutral-800 text-xs"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: palette.tokens.surface,
            borderColor: palette.tokens.border
          }}
          className="lg:col-span-8 rounded-3xl border p-6 md:p-10 space-y-8"
        >
          <div>
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
              01 / The Brief
            </p>
            <p className="text-base sm:text-lg leading-relaxed">{currentProject.brief}</p>
          </div>

          <div style={{ borderColor: palette.tokens.border }} className="pt-8 border-t">
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
              02 / What the Studio Did
            </p>
            <p style={{ color: palette.tokens.mutedFg }} className="text-sm sm:text-base leading-relaxed">
              {currentProject.whatStudioDid}
            </p>
          </div>

          <div style={{ borderColor: palette.tokens.border }} className="pt-8 border-t">
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
              03 / Credits &amp; Karigars
            </p>
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs sm:text-sm leading-relaxed">
              {currentProject.credits}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase">
          Project Gallery — Rooms &amp; Material Details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProject.gallery.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxImg(img)}
              className="rounded-3xl overflow-hidden aspect-[4/3] bg-stone-200 group relative block"
            >
              <img
                src={img}
                alt={`${currentProject.title} detail ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 text-white text-[10px] font-mono">
                0{i + 1} · Enlarge
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundColor: palette.tokens.surface,
          borderColor: palette.tokens.border
        }}
        className="rounded-3xl border p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-1">
            Next project ({nextProject.number} / 06)
          </p>
          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-1">
            {nextProject.title}
          </h3>
          <p style={{ color: palette.tokens.mutedFg }} className="text-xs">
            {nextProject.location} · {nextProject.areaSqFt}
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigateTo('project-detail', nextProject.id)}
          className="px-5 py-3 rounded-2xl bg-neutral-900 text-white text-xs font-medium inline-flex items-center gap-2 hover:opacity-90"
        >
          <span>View next case study</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
