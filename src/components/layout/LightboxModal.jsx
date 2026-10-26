import React from 'react';

export default function LightboxModal({ lightboxImg, setLightboxImg }) {
  if (!lightboxImg) return null;

  return (
    <div
      onClick={() => setLightboxImg(null)}
      className="fixed inset-0 z-50 bg-black/85 p-4 md:p-10 flex items-center justify-center"
    >
      <div className="relative max-w-5xl w-full">
        <button
          type="button"
          onClick={() => setLightboxImg(null)}
          className="absolute -top-10 right-0 px-3 py-1 rounded-lg bg-white text-neutral-900 text-xs font-medium"
        >
          Close ✕
        </button>
        <img
          src={lightboxImg}
          alt="Full screen architectural view"
          className="w-full max-h-[82vh] object-contain rounded-2xl"
        />
      </div>
    </div>
  );
}
