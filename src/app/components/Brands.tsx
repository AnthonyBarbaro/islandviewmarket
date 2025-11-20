// src/app/components/Brands.tsx
"use client";

import Image from "next/image";
import { useRef } from "react";
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
  // simple ref so arrows can scroll the list on mobile
  const scrollerRef = useRef<HTMLUListElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const amount = el.clientWidth * 0.8; // roughly one card at a time
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="brands" className="py-16 bg-white">
      {/* HEADER: tape behind, text over it */}
      <div className="relative mb-8">
        <div className="relative h-24 sm:h-28 md:h-32 overflow-hidden">
          {/* tape fills header area on all breakpoints */}
          <NewspaperTape
            srcs={STRIPS}
            index={2}
            height={96}
            opacity={0.5}
            className="absolute inset-0"
          />

          {/* centered heading over tape */}
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
        {/* MOBILE: manual swipe carousel with subtle arrows */}
        <div className="relative md:hidden">
          <ul
            ref={scrollerRef}
            className="
              flex gap-4 overflow-x-auto
              snap-x snap-mandatory scroll-smooth no-scrollbar
              px-3
            "
            role="region"
            aria-roledescription="carousel"
            aria-label="Brand logos carousel"
          >
            {brands.map((brand) => (
              <li
                key={brand.name}
                className="
                  snap-center
                  shrink-0
                  w-[90%]          /* fills more of the mobile width */
                  mx-auto
                "
              >
                <BrandTile name={brand.name} image={brand.image} />
              </li>
            ))}
          </ul>

          {/* small left/right hints that also scroll */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll brands left"
            className="
              absolute left-2 top-1/2 -translate-y-1/2
              rounded-full bg-black/80 text-white
              text-xs px-2 py-1 shadow
            "
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll brands right"
            className="
              absolute right-2 top-1/2 -translate-y-1/2
              rounded-full bg-black/80 text-white
              text-xs px-2 py-1 shadow
            "
          >
            ›
          </button>
        </div>

        {/* DESKTOP GRID – unchanged */}
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
          className="object-contain select-none"
          draggable={false}
        />
      </div>
      <p className="text-center text-sm mt-3 font-medium text-slate-900">
        {name}
      </p>
    </div>
  );
}
