import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function PostDetailPage({ currentPost, palette, navigateTo }) {
  return (
    <div className="space-y-12 pt-6 max-w-5xl mx-auto">
      <button
        type="button"
        onClick={() => navigateTo('journal')}
        className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-100"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Journal</span>
      </button>

      <div className="space-y-4">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase">
          {currentPost.category} · {currentPost.date} · {currentPost.readTime}
        </p>
        <h1 className="text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
          {currentPost.title}
        </h1>
      </div>

      <div className="rounded-3xl overflow-hidden aspect-[16/9] bg-stone-200">
        <img
          src={currentPost.image}
          alt={currentPost.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div
          style={{
            backgroundColor: palette.tokens.surface,
            borderColor: palette.tokens.border
          }}
          className="md:col-span-4 rounded-3xl border p-6 space-y-4"
        >
          <div className="flex items-center gap-3">
            <img
              src={currentPost.author.avatar}
              alt={currentPost.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">{currentPost.author.name}</p>
              <p style={{ color: palette.tokens.mutedFg }} className="text-xs">
                {currentPost.author.role}
              </p>
            </div>
          </div>
          <div
            style={{ borderColor: palette.tokens.border }}
            className="pt-4 border-t text-xs space-y-1"
          >
            <p style={{ color: palette.tokens.mutedFg }}>Published</p>
            <p className="font-mono">{currentPost.date}</p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: palette.tokens.surface,
            borderColor: palette.tokens.border
          }}
          className="md:col-span-8 rounded-3xl border p-6 md:p-10 space-y-5"
        >
          {currentPost.body.map((para, i) => (
            <p key={i} className="text-sm sm:text-base leading-relaxed text-neutral-800">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
