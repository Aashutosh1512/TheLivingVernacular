import React from 'react';
import { IMAGES } from '../../data/palettes';
import { PROJECTS } from '../../data/projects';

export default function Footer({ palette, istTime, navigateTo, setTokenDrawerOpen }) {
  return (
    <footer
      style={{
        backgroundColor: palette.tokens.surface,
        borderColor: palette.tokens.border
      }}
      className="border-t px-4 md:px-8 py-14 md:py-20"
    >
      <div className="max-w-[1440px] mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden aspect-[4/3] bg-stone-200">
            <img
              src={IMAGES.foundersPortrait}
              alt="Ananya Rao and Vikramaditya Mehta in the Bengaluru studio"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <div className="space-y-3">
              <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase">
                THE LIVING VERNACULAR · INTERIOR ARCHITECTURE &amp; CONSERVATION
              </p>
              <p className="text-xl sm:text-2xl font-medium tracking-tight leading-snug">
                Led by founding partners Ananya Rao (Interior Architect, CEPT Ahmedabad) and Vikramaditya Mehta (Conservation Architect, Sir J.J. College of Architecture).
              </p>
              <p style={{ color: palette.tokens.mutedFg }} className="text-xs sm:text-sm leading-relaxed">
                Registered with the Council of Architecture (COA India) and Indian Institute of Interior Designers (IIID). Working across Bengaluru, Mumbai, New Delhi, Udaipur, Fort Kochi, Coonoor, and Goa.
              </p>
            </div>

            <div
              style={{ borderColor: palette.tokens.border }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t text-xs"
            >
              <div>
                <p style={{ color: palette.tokens.mutedFg }} className="font-mono uppercase text-[10px] mb-2">
                  Pages
                </p>
                <ul className="space-y-1.5">
                  <li><button type="button" onClick={() => navigateTo('home')} className="hover:underline">Home</button></li>
                  <li><button type="button" onClick={() => navigateTo('projects')} className="hover:underline">Projects</button></li>
                  <li><button type="button" onClick={() => navigateTo('services')} className="hover:underline">Services</button></li>
                  <li><button type="button" onClick={() => navigateTo('studio')} className="hover:underline">Studio &amp; Makers</button></li>
                  <li><button type="button" onClick={() => navigateTo('journal')} className="hover:underline">Journal</button></li>
                  <li><button type="button" onClick={() => navigateTo('contact')} className="hover:underline">Contact</button></li>
                </ul>
              </div>

              <div>
                <p style={{ color: palette.tokens.mutedFg }} className="font-mono uppercase text-[10px] mb-2">
                  Case Studies
                </p>
                <ul className="space-y-1.5">
                  {PROJECTS.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => navigateTo('project-detail', p.id)}
                        className="hover:underline text-left"
                      >
                        {p.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p style={{ color: palette.tokens.mutedFg }} className="font-mono uppercase text-[10px] mb-2">
                  Bengaluru Desk
                </p>
                <p>12 Lavelle Road</p>
                <p style={{ color: palette.tokens.mutedFg }}>Bengaluru 560001</p>
                <p className="font-mono mt-2">+91 80 4120 8890</p>
              </div>

              <div>
                <p style={{ color: palette.tokens.mutedFg }} className="font-mono uppercase text-[10px] mb-2">
                  Mumbai Desk
                </p>
                <p>Ballard Estate, Fort</p>
                <p style={{ color: palette.tokens.mutedFg }}>Mumbai 400001</p>
                <p className="font-mono mt-2">Bengaluru {istTime} IST</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ borderColor: palette.tokens.border, color: palette.tokens.mutedFg }}
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
        >
          <p>© 2026 The Living Vernacular India Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setTokenDrawerOpen(true)}
              className="hover:underline"
            >
              6 Stone Colour Tokens ({palette.name})
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => navigateTo('blueprint')}
              className="hover:underline"
            >
              The Living Vernacular Analysis
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
