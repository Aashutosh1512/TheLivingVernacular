import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../../data/palettes';

export default function MenuOverlay({
  menuOpen,
  setMenuOpen,
  onMenuMouseEnter,
  onMenuMouseLeave,
  setTokenDrawerOpen,
  palette,
  istTime,
  navigateTo
}) {
  const [isRendered, setIsRendered] = useState(menuOpen);

  useEffect(() => {
    let timeout;

    if (menuOpen) {
      setIsRendered(true);
    } else {
      timeout = window.setTimeout(() => setIsRendered(false), 400);
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [menuOpen]);

  if (!isRendered) return null;

  return (
    <div
      aria-hidden={!menuOpen}
      className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm pt-24 px-4 md:px-8 pb-8 overflow-y-auto ${
        menuOpen ? 'menu-overlay-enter' : 'menu-overlay-exit pointer-events-none'
      }`}
    >
      <div
        onMouseEnter={onMenuMouseEnter}
        onMouseLeave={onMenuMouseLeave}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4"
      >
        <div
          style={{
            backgroundColor: palette.tokens.surface,
            borderColor: palette.tokens.border
          }}
          className={`md:col-span-5 rounded-3xl border p-6 md:p-8 flex flex-col justify-between shadow-lg ${
            menuOpen ? 'menu-panel-enter' : 'menu-panel-exit'
          }`}
        >
          <div>
            <p
              style={{ color: palette.tokens.mutedFg }}
              className="text-xs font-mono uppercase tracking-wider mb-6"
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home', meta: 'Index' },
                { id: 'projects', label: 'Projects', meta: '06' },
                { id: 'services', label: 'Services', meta: '06' },
                { id: 'studio', label: 'Studio', meta: 'Since 2012' },
                { id: 'journal', label: 'Journal', meta: '04' },
                { id: 'contact', label: 'Contact', meta: 'Say hello' }
              ].map((item) => (
                <li
                  key={item.id}
                  style={{ borderColor: palette.tokens.border }}
                  className="border-b pb-3 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => navigateTo(item.id)}
                    className="w-full flex items-baseline justify-between text-left group"
                  >
                    <span className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-1.5 transition-transform">
                      {item.label}
                    </span>
                    <span
                      style={{ color: palette.tokens.mutedFg }}
                      className="text-xs font-mono"
                    >
                      {item.meta}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ borderColor: palette.tokens.border }}
            className="pt-6 mt-6 border-t flex flex-wrap items-center justify-between gap-3 text-xs"
          >
            <button
              type="button"
              onClick={() => navigateTo('blueprint')}
              className="font-medium underline underline-offset-4 hover:opacity-70"
            >
              Overview &amp; Deep Analysis
            </button>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setTokenDrawerOpen(true);
              }}
              className="inline-flex items-center gap-1 font-medium text-neutral-600 hover:text-neutral-900"
            >
              <span>Colour tokens (06)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div
          className={`md:col-span-4 rounded-3xl border p-6 flex flex-col justify-between shadow-lg ${
            menuOpen ? 'menu-panel-enter menu-panel-delay-1' : 'menu-panel-exit'
          }`}
          style={{ backgroundColor: palette.tokens.surface, borderColor: palette.tokens.border }}
        >
          <div>
            <div className="flex items-center justify-between text-xs mb-3">
              <span style={{ color: palette.tokens.mutedFg }} className="font-mono uppercase">
                Latest project
              </span>
              <span className="font-mono text-xs">2025 · Built</span>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('project-detail', 'harbour-hotel-lounge')}
              className="w-full text-left group"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-medium tracking-tight group-hover:underline">
                  Harbour hotel lounge
                </h3>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p style={{ color: palette.tokens.mutedFg }} className="text-xs mb-4">
                Fort Kochi, Kerala · 4,800 sq. ft.
              </p>
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-stone-200">
                <img
                  src={IMAGES.harbourHotel}
                  alt="Harbour hotel lounge in Fort Kochi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </button>
          </div>
          <p style={{ color: palette.tokens.mutedFg }} className="text-xs mt-4 leading-relaxed">
            Cane and Burma teak armchairs under oversized Khadi paper lanterns in a restored 19th-century Malabar spice godown.
          </p>
        </div>

        <div
          className={`md:col-span-3 rounded-3xl border p-6 flex flex-col justify-between shadow-lg ${
            menuOpen ? 'menu-panel-enter menu-panel-delay-2' : 'menu-panel-exit'
          }`}
          style={{ backgroundColor: palette.tokens.surface, borderColor: palette.tokens.border }}
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Bengaluru {istTime}</span>
            </div>

            <div className="space-y-4 text-xs leading-relaxed">
              <div>
                <p style={{ color: palette.tokens.mutedFg }} className="font-mono uppercase text-[10px] mb-1">
                  Bengaluru Studio
                </p>
                <p className="font-medium">12 Lavelle Road, Shanthala Nagar</p>
                <p style={{ color: palette.tokens.mutedFg }}>Bengaluru, Karnataka 560001</p>
              </div>

              <div>
                <p style={{ color: palette.tokens.mutedFg }} className="font-mono uppercase text-[10px] mb-1">
                  Mumbai Studio
                </p>
                <p className="font-medium">4th Floor, Commissariat Building</p>
                <p style={{ color: palette.tokens.mutedFg }}>Ballard Estate, Mumbai 400001</p>
              </div>

              <div>
                <p style={{ color: palette.tokens.mutedFg }} className="font-mono uppercase text-[10px] mb-1">
                  Hours &amp; Contact
                </p>
                <p>Mon to Sat, 10 to 19 IST</p>
                <p className="font-medium mt-1">+91 80 4120 8890</p>
                <p className="underline">TheLivingVernacular@inc.in</p>
              </div>
            </div>
          </div>

          <div
            style={{ borderColor: palette.tokens.border }}
            className="pt-4 mt-6 border-t flex items-center justify-between text-xs font-medium"
          >
            <button type="button" onClick={() => navigateTo('studio')} className="hover:opacity-70">
              Instagram
            </button>
            <button type="button" onClick={() => navigateTo('studio')} className="hover:opacity-70">
              LinkedIn
            </button>
            <button type="button" onClick={() => navigateTo('studio')} className="hover:opacity-70">
              AD100
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
