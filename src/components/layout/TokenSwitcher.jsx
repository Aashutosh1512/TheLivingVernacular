import React from 'react';
import { STONE_PALETTES } from '../../data/palettes';

export default function TokenSwitcher({
  tokenDrawerOpen,
  setTokenDrawerOpen,
  paletteKey,
  setPaletteKey,
  palette
}) {
  if (!tokenDrawerOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full px-4 sm:px-0">
      <div
        style={{
          backgroundColor: palette.tokens.surface,
          borderColor: palette.tokens.border
        }}
        className="rounded-3xl border p-5 shadow-xl"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold tracking-tight">
            Colour, your way — 6 Stone Tokens
          </span>
          <button
            type="button"
            onClick={() => setTokenDrawerOpen(false)}
            className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs leading-relaxed mb-4">
          Sandstone uses six semantic colour tokens and zero accent colour—the photography supplies the colour. Switch the stone ground live:
        </p>
        <div className="space-y-2 mb-4">
          {Object.values(STONE_PALETTES).map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPaletteKey(p.id)}
              style={{
                backgroundColor: p.tokens.bg,
                borderColor: paletteKey === p.id ? '#1C1C1C' : p.tokens.border
              }}
              className="w-full p-2.5 rounded-2xl border flex items-center justify-between text-left transition-all"
            >
              <div>
                <p className="text-xs font-medium text-neutral-900">{p.name}</p>
                <p className="text-[11px] text-neutral-500">{p.region}</p>
              </div>
              <div className="flex items-center gap-1">
                {Object.values(p.tokens).map((hex, i) => (
                  <span
                    key={i}
                    style={{ backgroundColor: hex }}
                    className="w-3.5 h-3.5 rounded-full border border-black/15"
                    title={hex}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono bg-stone-100/80 p-2.5 rounded-xl">
          <div>bg: {palette.tokens.bg}</div>
          <div>surface: {palette.tokens.surface}</div>
          <div>muted: {palette.tokens.muted}</div>
          <div>fg: {palette.tokens.fg}</div>
          <div>mutedFg: {palette.tokens.mutedFg}</div>
          <div>border: {palette.tokens.border}</div>
        </div>
      </div>
    </div>
  );
}
