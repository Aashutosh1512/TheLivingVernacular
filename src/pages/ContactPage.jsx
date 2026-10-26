import React from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage({
  palette,
  enquiryForm,
  setEnquiryForm,
  submittedEnquiries,
  enquirySuccess,
  setEnquirySuccess,
  handleEnquirySubmit
}) {
  return (
    <div className="space-y-12 pt-6 max-w-5xl mx-auto">
      <div>
        <p style={{ color: palette.tokens.mutedFg }} className="text-xs font-mono uppercase mb-3">
          Contact &amp; New Commissions
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight leading-[1.12]">
          Tell us about your{' '}
          <span className="font-serif-italic font-normal text-4xl sm:text-6xl">space</span>.
          We reply within two working days.
        </h1>
      </div>

      {enquirySuccess && (
        <div className="rounded-3xl bg-neutral-900 text-white p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Enquiry Received · Reference {enquirySuccess.refCode}</span>
            </div>
            <p className="text-lg font-medium">
              Dhanyavaad, {enquirySuccess.name}. Ananya and Vikram have received your brief for{' '}
              {enquirySuccess.location}.
            </p>
            <p className="text-xs text-stone-300">
              Scope: {enquirySuccess.projectType} · Budget: {enquirySuccess.budgetRange} · Timing:{' '}
              {enquirySuccess.timing}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setEnquirySuccess(null)}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium shrink-0"
          >
            Send another note
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <form
          onSubmit={handleEnquirySubmit}
          style={{
            backgroundColor: palette.tokens.surface,
            borderColor: palette.tokens.border
          }}
          className="lg:col-span-8 rounded-3xl border p-6 md:p-10 space-y-8"
        >
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase text-neutral-500">About you</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1.5">Your name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohan & Kavita Kulkarni"
                  value={enquiryForm.name}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                  style={{ backgroundColor: palette.tokens.muted }}
                  className="w-full rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5">Email address</label>
                <input
                  type="email"
                  required
                  placeholder="you@yourname.in"
                  value={enquiryForm.email}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                  style={{ backgroundColor: palette.tokens.muted }}
                  className="w-full rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5">Phone / WhatsApp (+91)</label>
                <input
                  type="tel"
                  placeholder="+91 98200 00000"
                  value={enquiryForm.phone}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                  style={{ backgroundColor: palette.tokens.muted }}
                  className="w-full rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5">Space location (City &amp; neighbourhood)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Juhu, Mumbai or Sadashivanagar, Bengaluru"
                  value={enquiryForm.location}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, location: e.target.value })}
                  style={{ backgroundColor: palette.tokens.muted }}
                  className="w-full rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-mono uppercase text-neutral-500">Your project</p>
            <div className="flex flex-wrap gap-2">
              {[
                'A home',
                'A renovation',
                'Hospitality',
                'A workplace',
                'Furniture and styling',
                'New courtyard home'
              ].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setEnquiryForm({ ...enquiryForm, projectType: type })}
                  className={`px-4 py-2.5 rounded-full text-xs font-medium border transition-colors ${
                    enquiryForm.projectType === type
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'bg-stone-100 text-neutral-800 border-transparent hover:border-stone-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-mono uppercase text-neutral-500">
              Overall project budget range (₹ INR)
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Under ₹50 Lakhs',
                '₹50L to ₹1.5 Crore',
                '₹1.5 Cr to ₹4 Crore',
                'Over ₹4 Crore'
              ].map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setEnquiryForm({ ...enquiryForm, budgetRange: budget })}
                  className={`px-4 py-2.5 rounded-full text-xs font-medium border transition-colors ${
                    enquiryForm.budgetRange === budget
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'bg-stone-100 text-neutral-800 border-transparent hover:border-stone-300'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-mono uppercase text-neutral-500">Timing</p>
            <div className="flex flex-wrap gap-2">
              {['As soon as possible', 'Within six months', 'Next year'].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setEnquiryForm({ ...enquiryForm, timing: time })}
                  className={`px-4 py-2.5 rounded-full text-xs font-medium border transition-colors ${
                    enquiryForm.timing === time
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'bg-stone-100 text-neutral-800 border-transparent hover:border-stone-300'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-mono uppercase text-neutral-500">
              The space
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about the room count, approximate carpet area in sq. ft., existing floors or trees you want to preserve, Vastu preferences, and what needs to change..."
              value={enquiryForm.spaceDetails}
              onChange={(e) => setEnquiryForm({ ...enquiryForm, spaceDetails: e.target.value })}
              style={{ backgroundColor: palette.tokens.muted }}
              className="w-full rounded-2xl p-4 text-xs focus:outline-none focus:ring-1 focus:ring-neutral-900"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-neutral-900 text-white text-xs font-medium inline-flex items-center justify-center gap-2 hover:opacity-90"
          >
            <span>Send enquiry to the studio</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="lg:col-span-4 space-y-6">
          <div
            style={{
              backgroundColor: palette.tokens.surface,
              borderColor: palette.tokens.border
            }}
            className="rounded-3xl border p-6 space-y-4 text-xs"
          >
            <p className="font-mono uppercase text-neutral-500">Direct Studio Desks</p>
            <div>
              <p className="font-semibold">Bengaluru (Main Studio &amp; Material Archive)</p>
              <p style={{ color: palette.tokens.mutedFg }}>
                12 Lavelle Road, Shanthala Nagar, Bengaluru 560001
              </p>
            </div>
            <div>
              <p className="font-semibold">Mumbai (Conservation &amp; Coastal Desk)</p>
              <p style={{ color: palette.tokens.mutedFg }}>
                Commissariat Building, Ballard Estate, Mumbai 400001
              </p>
            </div>
            <div style={{ borderColor: palette.tokens.border }} className="pt-3 border-t">
              <p>TheLivingVernacular@inc.in</p>
              <p className="font-mono mt-1">+91 80 4120 8890</p>
            </div>
          </div>

          {submittedEnquiries.length > 0 && (
            <div
              style={{
                backgroundColor: palette.tokens.surface,
                borderColor: palette.tokens.border
              }}
              className="rounded-3xl border p-6 space-y-3 text-xs"
            >
              <p className="font-mono uppercase text-neutral-500">
                Recent Session Enquiries ({submittedEnquiries.length})
              </p>
              {submittedEnquiries.map((item) => (
                <div key={item.refCode} className="p-3 rounded-xl bg-stone-100 space-y-1">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span>{item.refCode}</span>
                    <span>{item.submittedAt}</span>
                  </div>
                  <p className="font-medium">{item.name} — {item.location}</p>
                  <p className="text-neutral-500">
                    {item.projectType} · {item.budgetRange}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
