import React from 'react';
import { SERVICES } from '../data/services';
import ServiceCard from '../components/cards/ServiceCard';
import FeeCalculator from '../components/cards/FeeCalculator';

export default function ServicesPage({ palette, navigateTo, onSelectServiceForEnquiry }) {
  return (
    <div className="space-y-16 pt-6">
      <div className="max-w-4xl">
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-3">
          Services &amp; Transparent Fees
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight leading-[1.12]">
          Six ways to work with the studio, each with a{' '}
          <span className="font-serif-italic font-normal text-4xl sm:text-6xl">
            fixed fee
          </span>
          , a clear timeline and zero contractor markup.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            palette={palette}
            navigateTo={navigateTo}
            onEnquire={onSelectServiceForEnquiry}
          />
        ))}
      </div>

      <section
        style={{
          backgroundColor: palette.tokens.surface,
          borderColor: palette.tokens.border
        }}
        className="rounded-3xl border p-8 md:p-12 space-y-8"
      >
        <div className="max-w-2xl">
          <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-2">
            How Fees Work
          </p>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight">
            One fixed design fee. Everything else billed directly at karigar and supplier cost.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: '01 / One fixed design fee',
              body: 'After our first site walk and brief discussion, we send one fixed design fee in ₹ INR covering the entire scope. Even if you take longer to choose between Kota stone and Dholpur sandstone, our design fee never creeps up.'
            },
            {
              title: '02 / Everything else at cost',
              body: 'Unlike conventional Indian turnkey firms that take 15–25% hidden vendor commissions, we take zero kickbacks. Every contractor, stonemason, joiner, and lighting studio bills you directly at workshop cost.'
            },
            {
              title: '03 / Three equal stages',
              body: 'Our fixed fee is paid in three simple instalments tied to real progress: 1/3 at project start, 1/3 upon approval of Good-for-Construction (GFC) drawings, and 1/3 at final site handover.'
            }
          ].map((card) => (
            <div
              key={card.title}
              style={{ borderColor: palette.tokens.border }}
              className="p-6 rounded-2xl border bg-stone-50/50"
            >
              <h3 className="text-base font-medium mb-2">{card.title}</h3>
              <p style={{ color: palette.tokens.mutedFg }} className="text-xs leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <FeeCalculator palette={palette} />
      </section>
    </div>
  );
}
