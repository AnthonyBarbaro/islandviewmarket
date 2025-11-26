// src/app/components/Brands.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NewspaperTape from "@/app/components/NewspaperTape";

// newspaper strips for the header tape
const STRIPS = ["/news/1.png", "/news/2.png", "/news/3.png", "/news/4.png"];

// Add/remove brands by editing this list.
// Place logo files in /public/brands (png/jpg/svg).
const brands = [
  { name: "Absolut Vodka", image: "/brands/Absolut-Vodka.jpg" },
  { name: "Blanton's", image: "/brands/blantons.jpg" },
  { name: "Bud Light", image: "/brands/budlight.jpg" },
  { name: "Coors Light", image: "/brands/coorslight.jpg" },
  { name: "Crown Royal", image: "/brands/crown-royal.png" },
  { name: "Hendrick's", image: "/brands/Hendricks.jpg" },
  { name: "Hennessy", image: "/brands/hennessy.jpg" },
  { name: "Jameson", image: "/brands/jameson.png" },
  { name: "Johnnie Walker", image: "/brands/johnnie-walker.jpg" },
  { name: "Patrón", image: "/brands/patron.png" },
  { name: "Rémy Martin", image: "/brands/remy-martin.jpg" },
  { name: "Don Julio", image: "/brands/don-julio.jpg" },
];

export default function Brands() {
  // Mobile carousel refs/state
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const logoRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Center the first slide on initial render
  useEffect(() => {
    const el = scrollerRef.current;
    const first = logoRefs.current[0];
    if (!el || !first) return;

    const containerWidth = el.clientWidth;
    const itemWidth = first.clientWidth;
    const left = Math.max(
      0,
      first.offsetLeft - (containerWidth - itemWidth) / 2
    );

    el.scrollTo({ left, behavior: "auto" });
    setCurrentIndex(0);
  }, []);

  // Helper to smoothly center a slide by index
  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    const item = logoRefs.current[index];
    if (!el || !item) return;

    const containerWidth = el.clientWidth;
    const itemWidth = item.clientWidth;
    const left = Math.max(
      0,
      item.offsetLeft - (containerWidth - itemWidth) / 2
    );

    el.scrollTo({ left, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex >= brands.length - 1) return;
    scrollToIndex(currentIndex + 1);
  };

  // When user swipes manually, update currentIndex so arrows hide/show correctly
  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const scrollCenter = el.scrollLeft + el.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDist = Number.POSITIVE_INFINITY;

    logoRefs.current.forEach((item, i) => {
      if (!item) return;
      const itemCenter = item.offsetLeft + item.clientWidth / 2;
      const dist = Math.abs(itemCenter - scrollCenter);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIndex = i;
      }
    });

    setCurrentIndex(nearestIndex);
  };

  return (
    <section id="brands" className="py-16 bg-white">
      {/* HEADER: tape behind, text over it */}
      <div className="relative mb-8">
        <div className="relative h-24 sm:h-28 md:h-32 overflow-hidden">
          <NewspaperTape
            srcs={STRIPS}
            index={2}
            height={96}
            opacity={0.5}
            className="absolute inset-0"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="text-center">
                <h2 className="inline-block px-4 py-1 rounded-md bg-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                  Brands We Carry
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container">
        {/* MOBILE: swipeable carousel with context arrows */}
        <div className="relative md:hidden">
          <ul
            ref={scrollerRef}
            onScroll={handleScroll}
            className="
              flex gap-4 overflow-x-auto
              snap-x snap-mandatory scroll-smooth no-scrollbar
              px-3
            "
            role="region"
            aria-roledescription="carousel"
            aria-label="Brand logos carousel"
          >
            {brands.map((brand, i) => (
              <li
                key={brand.name}
                ref={(el) => {
                  logoRefs.current[i] = el;
                }}
                className="
                  snap-center
                  shrink-0
                  w-[90%]
                  mx-auto
                "
              >
                <BrandTile name={brand.name} image={brand.image} />
              </li>
            ))}
          </ul>

          {/* Left arrow — hidden on first brand */}
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Scroll brands left"
              className="
                absolute left-2 top-1/2 -translate-y-1/2
                rounded-full bg-black/80 text-white
                text-xs px-2 py-1 shadow
              "
            >
              ‹
            </button>
          )}

          {/* Right arrow — hidden on last brand */}
          {currentIndex < brands.length - 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Scroll brands right"
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                rounded-full bg-black/80 text-white
                text-xs px-2 py-1 shadow
              "
            >
              ›
            </button>
          )}
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <BrandTile key={brand.name} name={brand.name} image={brand.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Logo Tile --- */
function BrandTile({ name, image }: { name: string; image: string }) {
  return (
    <div className="group flex flex-col items-center">
      <div
        className="
          relative
          h-28 w-28              /* bigger base size */
          sm:h-32 sm:w-32        /* a bit larger on small screens */
          md:h-28 md:w-28        /* keeps desktop reasonable */
          rounded-xl bg-white
          border border-slate-200 shadow-sm
          flex items-center justify-center
          transition-transform duration-200 group-hover:scale-[1.03]
        "
        aria-label={name}
        title={name}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="140px"
          className="
            object-contain select-none
            grayscale               /* base grayscale */
            group-hover:grayscale-0 /* optional: color on hover */
            transition
            duration-200
          "
          draggable={false}
        />
      </div>
      <p className="text-center text-sm mt-3 font-medium text-slate-900">
        {name}
      </p>
    </div>
  );
}
