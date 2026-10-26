import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function JournalCard({ post, palette, navigateTo }) {
  return (
    <article
      style={{
        backgroundColor: palette.tokens.surface,
        borderColor: palette.tokens.border
      }}
      className="rounded-3xl border overflow-hidden flex flex-col justify-between group"
    >
      <div>
        <button
          type="button"
          onClick={() => navigateTo('post-detail', post.id)}
          className="w-full text-left block overflow-hidden aspect-[16/10] bg-stone-200"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </button>
        <div className="p-6">
          <div
            style={{ color: palette.tokens.mutedFg }}
            className="flex items-center gap-2 text-[11px] font-mono mb-2"
          >
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('post-detail', post.id)}
            className="text-left group-hover:underline"
          >
            <h3 className="text-lg font-medium tracking-tight leading-snug mb-2">
              {post.title}
            </h3>
          </button>
          <p style={{ color: palette.tokens.mutedFg }} className="text-xs leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div
        style={{ borderColor: palette.tokens.border }}
        className="px-6 py-4 border-t flex items-center justify-between text-xs"
      >
        <span style={{ color: palette.tokens.mutedFg }}>By {post.author.name}</span>
        <button
          type="button"
          onClick={() => navigateTo('post-detail', post.id)}
          className="font-medium inline-flex items-center gap-1"
        >
          <span>Read</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}
