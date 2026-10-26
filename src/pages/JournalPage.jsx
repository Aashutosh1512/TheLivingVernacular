import React from 'react';
import { JOURNAL_POSTS } from '../data/journal';
import JournalCard from '../components/cards/JournalCard';

export default function JournalPage({ palette, navigateTo }) {
  const featured = JOURNAL_POSTS[0];

  return (
    <div className="space-y-14 pt-6">
      <div className="max-w-4xl">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-3">
          Studio Journal · RSS Ready
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight leading-[1.12]">
          Essays on{' '}
          <span className="font-serif-italic font-normal text-4xl sm:text-6xl">
            monsoon light, lime plaster
          </span>{' '}
          and building quietly in India.
        </h1>
      </div>

      <div
        style={{
          backgroundColor: palette.tokens.surface,
          borderColor: palette.tokens.border
        }}
        className="rounded-3xl border overflow-hidden grid grid-cols-1 lg:grid-cols-12"
      >
        <button
          type="button"
          onClick={() => navigateTo('post-detail', featured.id)}
          className="lg:col-span-7 aspect-[16/10] bg-stone-200 overflow-hidden block text-left"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </button>
        <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <span className="px-2.5 py-1 rounded-full bg-stone-100 text-xs font-mono">
              Featured Essay · {featured.date}
            </span>
            <button
              type="button"
              onClick={() => navigateTo('post-detail', featured.id)}
              className="text-left hover:underline block mt-4"
            >
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3">
                {featured.title}
              </h2>
            </button>
            <p style={{ color: palette.tokens.mutedFg }} className="text-sm leading-relaxed">
              {featured.excerpt}
            </p>
          </div>

          <div
            style={{ borderColor: palette.tokens.border }}
            className="pt-6 mt-6 border-t flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={featured.author.avatar}
                alt={featured.author.name}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="text-xs">
                <p className="font-medium">{featured.author.name}</p>
                <p style={{ color: palette.tokens.mutedFg }}>{featured.author.role}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('post-detail', featured.id)}
              className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-medium"
            >
              Read essay →
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {JOURNAL_POSTS.slice(1).map((post) => (
          <JournalCard
            key={post.id}
            post={post}
            palette={palette}
            navigateTo={navigateTo}
          />
        ))}
      </div>
    </div>
  );
}
