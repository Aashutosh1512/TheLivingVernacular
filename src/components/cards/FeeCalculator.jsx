import React, { useState, useMemo } from 'react';
import { SERVICES } from '../../data/services';

export default function FeeCalculator({ palette }) {
  const [calcArea, setCalcArea] = useState(3200);
  const [calcServiceId, setCalcServiceId] = useState('full-interiors');
  const [calcCityTier, setCalcCityTier] = useState('Mumbai / Delhi NCR / Bengaluru');

  const estimatedFee = useMemo(() => {
    const svc = SERVICES.find((s) => s.id === calcServiceId) || SERVICES[0];
    const base = svc.feeNum;
    const areaFactor = Math.max(0, calcArea - 1800) * 420;
    const raw = base + areaFactor;
    const oneThird = Math.round(raw / 3);
    return {
      total: raw,
      formattedTotal: '₹' + raw.toLocaleString('en-IN'),
      formattedStage: '₹' + oneThird.toLocaleString('en-IN')
    };
  }, [calcArea, calcServiceId]);

  return (
    <div
      style={{ borderColor: palette.tokens.border }}
      className="pt-8 border-t grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
    >
      <div className="lg:col-span-7 space-y-4">
        <p className="text-xs font-mono uppercase font-semibold">
          Interactive Fixed-Fee Estimator (₹ INR)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs mb-1.5 font-medium">Select Service Scope</label>
            <select
              value={calcServiceId}
              onChange={(e) => setCalcServiceId(e.target.value)}
              className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.number}. {s.title} ({s.fee})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs mb-1.5 font-medium">Project City / Region</label>
            <select
              value={calcCityTier}
              onChange={(e) => setCalcCityTier(e.target.value)}
              className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-xs"
            >
              <option>Mumbai / Delhi NCR / Bengaluru</option>
              <option>Udaipur / Jaipur / Goa / Alibaug</option>
              <option>Fort Kochi / Chennai / Hyderabad / Pune</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="font-medium">Carpet Area (sq. ft.)</span>
            <span className="font-mono font-semibold">
              {calcArea.toLocaleString('en-IN')} sq. ft.
            </span>
          </div>
          <input
            type="range"
            min={800}
            max={12000}
            step={200}
            value={calcArea}
            onChange={(e) => setCalcArea(Number(e.target.value))}
            className="w-full accent-neutral-900"
          />
        </div>
      </div>

      <div className="lg:col-span-5 rounded-2xl bg-neutral-900 text-white p-6 space-y-4">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-mono text-stone-400">Estimated Fixed Studio Fee</span>
          <span className="text-2xl sm:text-3xl font-mono font-semibold">
            {estimatedFee.formattedTotal}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/15 text-[11px] font-mono">
          <div>
            <p className="text-stone-400">1/3 Start</p>
            <p className="mt-0.5">{estimatedFee.formattedStage}</p>
          </div>
          <div>
            <p className="text-stone-400">1/3 Drawings</p>
            <p className="mt-0.5">{estimatedFee.formattedStage}</p>
          </div>
          <div>
            <p className="text-stone-400">1/3 Handover</p>
            <p className="mt-0.5">{estimatedFee.formattedStage}</p>
          </div>
        </div>
        <p className="text-[11px] text-stone-300">
          Excludes 18% GST. All civil, stone, and karigar invoices billed directly at cost.
        </p>
      </div>
    </div>
  );
}
