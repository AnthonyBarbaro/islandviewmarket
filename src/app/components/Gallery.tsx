"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  // Change this to match your actual image count
  const imageCount = 12;

  const images = Array.from({ length: imageCount }, (_, i) => ({
    src: `/gallery/${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
  }));

  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Store Gallery
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            A look inside Island View Market &amp; Liquor
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <button
              key={img.src}
              onClick={() => setActive(img.src)}
              className="relative aspect-square overflow-hidden rounded-xl shadow-sm border border-slate-200 hover:opacity-90 transition"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="300px"
                className="object-cover select-none"
              />
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {active && (
          <div
            className="
              fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center
              z-50 animate-fadeIn
            "
            onClick={() => setActive(null)}
          >
            <div
              className="relative max-w-3xl w-[90%] aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active}
                alt="Gallery enlarged image"
                fill
                className="object-cover"
              />

              {/* Close Button */}
              <button
                onClick={() => setActive(null)}
                className="
                  absolute top-3 right-3 bg-black/70 text-white rounded-full
                  w-9 h-9 flex items-center justify-center text-xl shadow
                "
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
