import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/palettes';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';
import { JOURNAL_POSTS } from '../data/journal';
import HeroSection from '../components/home/HeroSection';
import StatementSection from '../components/home/StatementSection';
import PressBar from '../components/home/PressBar';
import StudioStats from '../components/home/StudioStats';
import ProcessSteps from '../components/home/ProcessSteps';
import Testimonials from '../components/home/Testimonials';
import ClosingStatement from '../components/home/ClosingStatement';
import ProjectCard from '../components/cards/ProjectCard';
import ServiceCard from '../components/cards/ServiceCard';
import JournalCard from '../components/cards/JournalCard';
import ProjectFilters from '../components/layout/ProjectFilters';

export default function HomePage({
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
    <div className="space-y-20 md:space-y-28">
      <HeroSection palette={palette} navigateTo={navigateTo} />
      <StatementSection palette={palette} />
      <PressBar palette={palette} />

      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
              Selected Works (2024–2026)
            </p>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight leading-tight">
              Recent interiors, from{' '}
              <span className="font-serif-italic font-normal text-3xl sm:text-[42px]">
                South Mumbai flats
              </span>{' '}
              to courtyard havelis in Rajasthan and small hotels on the Malabar coast.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <ProjectFilters
              palette={palette}
              projectFilter={projectFilter}
              setProjectFilter={setProjectFilter}
              compact
            />
            <button
              type="button"
              onClick={() => navigateTo('projects')}
              className="ml-2 inline-flex items-center gap-1 text-xs font-medium underline underline-offset-4 hover:opacity-70"
            >
              <span>See all projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0 && projectFilter === 'All'}
              palette={palette}
              navigateTo={navigateTo}
            />
          ))}
        </div>
      </section>

      <StudioStats palette={palette} />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div
          style={{
            backgroundColor: palette.tokens.surface,
            borderColor: palette.tokens.border
          }}
          className="lg:col-span-5 rounded-3xl border p-6 md:p-10 lg:sticky lg:top-28"
        >
          <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-3">
            Services &amp; Fixed Fees
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug mb-4">
            From a single room to a whole heritage building, we take on interiors at every{' '}
            <span className="font-serif-italic font-normal text-3xl sm:text-4xl">scale</span>.
          </h2>
          <p style={{ color: palette.tokens.mutedFg }} className="text-sm leading-relaxed mb-6">
            Every project begins with a fixed design fee agreed in writing after our first site visit. Builders, karigars, stone quarries, and furniture workshops bill you directly at cost—with zero studio markup or hidden commissions.
          </p>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6">
            <img
              src={IMAGES.materialDetail}
              alt="Chanderi handloom curtain and handcrafted aged brass wall sconce"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            onClick={() => navigateTo('services')}
            className="w-full py-3 px-4 rounded-2xl bg-neutral-900 text-white text-xs font-medium flex items-center justify-between hover:opacity-90 transition-opacity"
          >
            <span>See all 06 services, fixed fees &amp; estimator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              palette={palette}
              navigateTo={navigateTo}
              compact
            />
          ))}
        </div>
      </section>

      <ProcessSteps palette={palette} />
      <Testimonials palette={palette} />

      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
              Journal
            </p>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight">
              Notes from the studio on{' '}
              <span className="font-serif-italic font-normal text-3xl sm:text-[42px]">
                materials, monsoon light
              </span>{' '}
              and the projects on our desk.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('journal')}
            className="inline-flex items-center gap-1 text-xs font-medium underline underline-offset-4 hover:opacity-70"
          >
            <span>Read all 04 essays</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JOURNAL_POSTS.slice(0, 3).map((post) => (
            <JournalCard
              key={post.id}
              post={post}
              palette={palette}
              navigateTo={navigateTo}
            />
          ))}
        </div>
      </section>

      <ClosingStatement palette={palette} navigateTo={navigateTo} />
    </div>
  );
}
