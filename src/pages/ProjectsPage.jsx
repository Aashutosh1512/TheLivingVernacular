import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import ProjectFilters from '../components/layout/ProjectFilters';

export default function ProjectsPage({
  palette,
  projectFilter,
  setProjectFilter,
  navigateTo
}) {
  const filteredProjects =
    projectFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <div className="space-y-12 pt-6">
      <div className="max-w-4xl">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-3">
          Projects Index · 06 Built Works
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight leading-[1.12]">
          Homes, heritage apartments, coastal hotels and{' '}
          <span className="font-serif-italic font-normal text-4xl sm:text-6xl">
            quiet workplaces
          </span>{' '}
          across India.
        </h1>
      </div>

      <ProjectFilters
        palette={palette}
        projectFilter={projectFilter}
        setProjectFilter={setProjectFilter}
      />

      <div className="space-y-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: palette.tokens.surface,
              borderColor: palette.tokens.border
            }}
            className="rounded-3xl border overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            <button
              type="button"
              onClick={() => navigateTo('project-detail', project.id)}
              className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-stone-200 block text-left"
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </button>

            <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span>Project {project.number}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-stone-100">
                    {project.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => navigateTo('project-detail', project.id)}
                  className="text-left hover:underline"
                >
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3">
                    {project.title}
                  </h2>
                </button>
                <p style={{ color: palette.tokens.mutedFg }} className="text-sm leading-relaxed mb-6">
                  {project.subtitle}
                </p>

                <div
                  style={{ borderColor: palette.tokens.border }}
                  className="border-t divide-y text-xs"
                >
                  {[
                    ['Location', project.location],
                    ['Year', project.year],
                    ['Area', project.areaSqFt],
                    ['Client', project.client],
                    ['Status', project.status]
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      style={{ borderColor: palette.tokens.border }}
                      className="py-2.5 flex items-center justify-between"
                    >
                      <span style={{ color: palette.tokens.mutedFg }}>{k}</span>
                      <span className="font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigateTo('project-detail', project.id)}
                className="mt-6 w-full py-3 px-4 rounded-2xl bg-neutral-900 text-white text-xs font-medium flex items-center justify-between hover:opacity-90"
              >
                <span>Read full case study, materials &amp; credits</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
