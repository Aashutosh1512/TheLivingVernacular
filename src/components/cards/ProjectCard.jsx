import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, featured = false, palette, navigateTo }) {
  return (
    <article
      style={{
        backgroundColor: palette.tokens.surface,
        borderColor: palette.tokens.border
      }}
      className={`rounded-3xl border overflow-hidden flex flex-col justify-between group ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <button
        type="button"
        onClick={() => navigateTo('project-detail', project.id)}
        className="w-full text-left block overflow-hidden relative"
      >
        <div
          className={`w-full overflow-hidden bg-stone-200 ${
            featured ? 'aspect-[16/9] max-h-[540px]' : 'aspect-[16/10]'
          }`}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
        </div>
        <span
          style={{
            backgroundColor: palette.tokens.surface,
            color: palette.tokens.fg
          }}
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono shadow-sm"
        >
          {project.number} · {project.category}
        </span>
      </button>

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <button
              type="button"
              onClick={() => navigateTo('project-detail', project.id)}
              className="text-left group-hover:underline"
            >
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                {project.title}
              </h3>
            </button>
            <p style={{ color: palette.tokens.mutedFg }} className="text-sm mt-1">
              {project.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('project-detail', project.id)}
            aria-label={`View ${project.title}`}
            className="w-9 h-9 rounded-full bg-stone-100 group-hover:bg-neutral-900 group-hover:text-white flex items-center justify-center shrink-0 transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div
          style={{ borderColor: palette.tokens.border }}
          className="mt-5 pt-4 border-t grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs"
        >
          <div>
            <p style={{ color: palette.tokens.mutedFg }} className="font-mono text-[10px] uppercase">
              Location
            </p>
            <p className="font-medium mt-0.5">{project.location}</p>
          </div>
          <div>
            <p style={{ color: palette.tokens.mutedFg }} className="font-mono text-[10px] uppercase">
              Area
            </p>
            <p className="font-mono mt-0.5">
              {project.areaSqFt}
            </p>
          </div>
          <div>
            <p style={{ color: palette.tokens.mutedFg }} className="font-mono text-[10px] uppercase">
              Year
            </p>
            <p className="font-mono mt-0.5">{project.year}</p>
          </div>
          <div>
            <p style={{ color: palette.tokens.mutedFg }} className="font-mono text-[10px] uppercase">
              Status
            </p>
            <p className="font-mono mt-0.5">{project.status}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
