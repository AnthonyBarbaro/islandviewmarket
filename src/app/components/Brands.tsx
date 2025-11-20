"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 3500;

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
  // Mobile carousel state/refs
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const logoRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const interactingRef = useRef(false);

  // Autoplay + scroll sync (mobile only)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopMQ = window.matchMedia("(min-width: 768px)");

    const getPos = (i: number) => logoRefs.current[i]?.offsetLeft ?? 0;

    const onScroll = () => {
      const left = el.scrollLeft;
      let nearest = 0;
      let min = Infinity;
      logoRefs.current.forEach((slide, i) => {
        if (!slide) return;
        const diff = Math.abs(slide.offsetLeft - left);
        if (diff < min) { min = diff; nearest = i; }
      });
      setIndex(nearest);
      indexRef.current = nearest;
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    let timer: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (reduced || desktopMQ.matches) return; // disable autoplay on desktop or if reduced-motion
      stop();
      timer = setInterval(() => {
        if (interactingRef.current) return;
        const next = (indexRef.current + 1) % brands.length;
        el.scrollTo({ left: getPos(next), behavior: "smooth" });
        setIndex(next);
        indexRef.current = next;
      }, AUTOPLAY_MS);
    };

    const stop = () => { if (timer) clearInterval(timer); timer = null; };

    start();
    const onMQ = () => { stop(); start(); };
    desktopMQ.addEventListener("change", onMQ);

    return () => {
      stop();
      el.removeEventListener("scroll", onScroll);
      desktopMQ.removeEventListener("change", onMQ);
    };
  }, []);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const left = logoRefs.current[i]?.offsetLeft ?? 0;
    el.scrollTo({ left, behavior: "smooth" });
    setIndex(i);
    indexRef.current = i;
  };

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Brands We Carry
          </h2>
          {/* thin neutral divider instead of red/gradient */}
          <div className="mx-auto mt-3 h-px w-24 rounded bg-slate-900/20" />
          <p className="mt-4 text-slate-600">
            A curated selection of premium spirits, beer, and ready‑to‑drinks.
          </p>
        </div>

        {/* MOBILE: swipeable carousel */}
        <div className="md:hidden relative">
          <ul
            ref={scrollerRef}
            onMouseEnter={() => (interactingRef.current = true)}
            onMouseLeave={() => (interactingRef.current = false)}
            onTouchStart={() => (interactingRef.current = true)}
            onTouchEnd={() => (interactingRef.current = false)}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-1"
            role="region"
            aria-roledescription="carousel"
            aria-label="Brand logos carousel"
          >
            {brands.map((brand, i) => (
              <li
                key={brand.name}
                ref={(el) => { logoRefs.current[i] = el; }}
                className="snap-start shrink-0 w-[70%]"
              >
                <BrandTile name={brand.name} image={brand.image} />
              </li>
            ))}
          </ul>

          {/* dots (black accents) */}
          <div className="mt-3 flex justify-center gap-2">
            {brands.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to brand ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full border transition-all ${
                  index === i
                    ? "w-6 bg-black border-black"
                    : "w-2.5 bg-white border-black"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP: clean grid on white */}
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
          relative h-24 w-24 sm:h-28 sm:w-28 md:h-28 md:w-28
          rounded-xl bg-white
          border border-slate-200 shadow-sm
          flex items-center justify-center
          transition-transform duration-200 group-hover:scale-[1.02]
        "
        aria-label={name}
        title={name}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="120px"
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
