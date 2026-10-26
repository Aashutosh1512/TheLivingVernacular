import React, { useLayoutEffect, useRef, useState } from 'react';

const CATEGORIES = ['All', 'Homes', 'Hospitality', 'Workplaces'];

export default function ProjectFilters({ palette, projectFilter, setProjectFilter, compact = false }) {
  const containerRef = useRef(null);
  const activeButtonRef = useRef(null);
  const [indicator, setIndicator] = useState({ x: 0, y: 0, width: 0, height: 0, ready: false });

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      const activeButton = activeButtonRef.current;

      if (!container || !activeButton) return;

      const containerBounds = container.getBoundingClientRect();
      const buttonBounds = activeButton.getBoundingClientRect();

      setIndicator({
        x: buttonBounds.left - containerBounds.left,
        y: buttonBounds.top - containerBounds.top,
        width: buttonBounds.width,
        height: buttonBounds.height,
        ready: true
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [projectFilter, compact]);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: palette.tokens.surface,
        borderColor: palette.tokens.border
      }}
      className="relative flex w-fit max-w-full flex-wrap items-center gap-2 rounded-2xl border p-1.5"
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 z-0 rounded-full transition-[transform,width,height] duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          backgroundColor: palette.tokens.fg,
          width: `${indicator.width}px`,
          height: `${indicator.height}px`,
          transform: `translate(${indicator.x}px, ${indicator.y}px)`,
          opacity: indicator.ready ? 1 : 0
        }}
      />
      {CATEGORIES.map((category) => {
        const isActive = projectFilter === category;

        return (
          <button
            key={category}
            ref={isActive ? activeButtonRef : null}
            type="button"
            onClick={() => setProjectFilter(category)}
            style={{
              color: isActive ? palette.tokens.surface : palette.tokens.fg,
              borderColor: palette.tokens.border
            }}
            className={`relative z-10 rounded-full text-xs font-medium border transition-colors duration-300 ${
              compact ? 'px-3.5 py-1.5' : 'px-4 py-2'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
