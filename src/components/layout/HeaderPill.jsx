import React, { useLayoutEffect, useRef, useState } from 'react';
import { Sliders } from 'lucide-react';

export default function HeaderPill({
  palette,
  activePage,
  menuOpen,
  setMenuOpen,
  onMenuMouseEnter,
  onMenuMouseLeave,
  setTokenDrawerOpen,
  navigateTo
}) {
  const navigationRef = useRef(null);
  const activeItemRef = useRef(null);
  const [activeIndicator, setActiveIndicator] = useState({ x: 0, width: 0, ready: false });

  const navItems = [
    { id: 'home', label: 'Index' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'studio', label: 'Studio' },
    { id: 'journal', label: 'Journal' },
    { id: 'blueprint', label: 'Theme Analysis' }
  ];

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const navigation = navigationRef.current;
      const activeItem = activeItemRef.current;

      if (!navigation || !activeItem) return;

      const navigationBounds = navigation.getBoundingClientRect();
      const itemBounds = activeItem.getBoundingClientRect();

      setActiveIndicator({
        x: itemBounds.left - navigationBounds.left,
        width: itemBounds.width,
        ready: true
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activePage]);

  return (
    <header className="sticky top-2 z-50 px-4 md:px-8 pointer-events-none flex items-center justify-between">
      <div
        style={{
          backgroundColor: palette.tokens.surface,
          borderColor: palette.tokens.border
        }}
        className="pointer-events-auto inline-flex items-center gap-5 px-4 py-2.5 rounded-2xl border shadow-sm"
      >
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className="text-sm font-semibold tracking-tight flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <span>The Living Vernacular</span>
          <span
            style={{ color: palette.tokens.mutedFg }}
            className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-stone-100"
          >
            IN
          </span>
        </button>

        <span style={{ backgroundColor: palette.tokens.border }} className="w-px h-4" />

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          onMouseEnter={onMenuMouseEnter}
          onMouseLeave={onMenuMouseLeave}
          aria-label="Toggle studio menu"
          className="flex items-center gap-2 text-xs font-medium hover:opacity-70 transition-opacity"
        >
          <span style={{ color: palette.tokens.mutedFg }}>
            {menuOpen ? 'Close' : 'Menu'}
          </span>
          <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-stone-100 text-neutral-900 font-mono text-sm">
            {menuOpen ? '✕' : '='}
          </span>
        </button>
      </div>

      <div
        style={{
          backgroundColor: palette.tokens.surface,
          borderColor: palette.tokens.border
        }}
        ref={navigationRef}
        className="pointer-events-auto relative hidden lg:inline-flex items-center gap-1 p-1.5 rounded-2xl border shadow-sm text-xs"
      >
        <span
          aria-hidden="true"
          className="absolute top-1.5 bottom-1.5 left-0 rounded-xl bg-neutral-900 transition-[transform,width] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: `${activeIndicator.width}px`,
            transform: `translateX(${activeIndicator.x}px)`,
            opacity: activeIndicator.ready ? 1 : 0
          }}
        />
        {navItems.map((nav) => {
          const isActive =
            activePage === nav.id ||
            (nav.id === 'projects' && activePage === 'project-detail') ||
            (nav.id === 'services' && activePage === 'service-detail') ||
            (nav.id === 'journal' && activePage === 'post-detail');
          return (
            <button
              key={nav.id}
              type="button"
              onClick={() => navigateTo(nav.id)}
              ref={isActive ? activeItemRef : null}
              className={`relative z-10 px-3 py-1.5 rounded-xl font-medium transition-colors duration-300 flex items-center gap-1 ${
                isActive
                  ? 'text-white'
                  : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              <span>{nav.label}</span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => setTokenDrawerOpen((prev) => !prev)}
          className="px-3 py-1.5 rounded-xl text-neutral-700 hover:bg-stone-100 font-medium flex items-center gap-1.5"
          title="Inspect or change the 6 stone colour tokens"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>6 Tokens</span>
        </button>

        <button
          type="button"
          onClick={() => navigateTo('contact')}
          className="ml-1 px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-neutral-900 hover:text-white text-neutral-900 font-medium transition-colors"
        >
          Enquire →
        </button>
      </div>
    </header>
  );
}
