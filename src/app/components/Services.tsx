"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NewspaperTape from "@/app/components/NewspaperTape";

type Service = {
  title: string;
  desc: string;
  image: string;
  alt?: string;
};

const AUTOPLAY_MS = 4500;
const STRIPS = ["/news/1.png", "/news/2.png", "/news/3.png", "/news/4.png"];

export default function Services() {
  const items: Service[] = [
    {
      title: "Corporate Orders",
      desc:
        "Bulk liquor and grocery orders for offices, events, and teams. Pickup and scheduled fulfillment available.",
      image: "/icons/corporate.png",
      alt: "Corporate Orders",
    },
    {
      title: "Custom Engravings",
      desc:
        "Personalized engraved bottles for gifts, weddings, birthdays, and celebrations.",
      image: "/icons/engravings.png",
      alt: "Custom Engravings",
    },
    {
      title: "EBT Accepted",
      desc:
        "We proudly accept EBT for eligible items—easy, fast, and accessible for everyone.",
      image: "/icons/ebt.png",
      alt: "EBT Accepted",
    },
    {
      title: "Fresh Food Daily",
      desc:
        "Sandwiches, snacks, drinks, and local market favorites prepared fresh every day.",
      image: "/icons/food.png",
      alt: "Fresh Food Daily",
    },
    {
      title: "Cold Beer • Top-Shelf Liquor",
      desc:
        "Wide selection including Hennessy, Rémy Martin, Martell, Corona, Coors, Bud Light, and more.",
      image: "/icons/liquor.png",
      alt: "Cold Beer and Top-Shelf Liquor",
    },
    {
      title: "Local Specials",
      desc:
        "Weekly deals, discounts, and neighborhood markdowns across groceries and spirits.",
      image: "/icons/specials.png",
      alt: "Local Specials",
    },
  ];

  // --- slider state/refs for mobile ---
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const interactingRef = useRef(false);

  // helper to get the scroll position that centers a given slide
  const getSlideLeft = (i: number) => {
    const el = scrollerRef.current;
    const slide = slideRefs.current[i];
    if (!el || !slide) return 0;

    const containerWidth = el.clientWidth;
    const itemWidth = slide.clientWidth;
    const left =
      slide.offsetLeft - (containerWidth - itemWidth) / 2;

    return Math.max(0, left);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
  
    const el = scrollerRef.current;
    if (!el) return;
  
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopMQ = window.matchMedia("(min-width: 768px)");
  
    // center the first slide on mount
    el.scrollTo({ left: getSlideLeft(0), behavior: "auto" });
  
    const onScroll = () => {
      const left = el.scrollLeft;
      let nearest = 0;
      let best = Number.POSITIVE_INFINITY;
      slideRefs.current.forEach((s, i) => {
        if (!s) return;
        const slideCenter = s.offsetLeft + s.clientWidth / 2;
        const viewportCenter = left + el.clientWidth / 2;
        const d = Math.abs(slideCenter - viewportCenter);
        if (d < best) {
          best = d;
          nearest = i;
        }
      });
      setIndex(nearest);
      indexRef.current = nearest;
    };
  
    el.addEventListener("scroll", onScroll, { passive: true });
  
    let timer: ReturnType<typeof setInterval> | null = null;
  
    const start = () => {
      if (reduced.matches || desktopMQ.matches) return;
      stop();
      timer = setInterval(() => {
        if (interactingRef.current) return;
        const next = (indexRef.current + 1) % items.length;
        el.scrollTo({ left: getSlideLeft(next), behavior: "smooth" });
        setIndex(next);
        indexRef.current = next;
      }, AUTOPLAY_MS);
    };
  
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
  
    start();
  
    const onMQ = () => {
      stop();
      start();
    };
  
    desktopMQ.addEventListener("change", onMQ);
  
    return () => {
      stop();
      el.removeEventListener("scroll", onScroll);
      desktopMQ.removeEventListener("change", onMQ);
    };
  }, [items.length]);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: getSlideLeft(i), behavior: "smooth" });
    setIndex(i);
    indexRef.current = i;
  };

  const prev = () => {
    if (index <= 0) return;
    goTo(index - 1);
  };

  const next = () => {
    if (index >= items.length - 1) return;
    goTo(index + 1);
  };

  const MobileCard = ({ item }: { item: Service }) => (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <figure className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32 rounded-xl overflow-hidden bg-tile ring-2 ring-black ring-offset-2 ring-offset-white shadow grayscale">
        <Image
          src={item.image}
          alt={item.alt || item.title}
          fill
          sizes="128px"
          className="object-contain select-none"
          loading="lazy"
          draggable={false}
        />
      </figure>
      <h3 className="mt-4 text-center text-black font-extrabold text-base leading-snug">
        {item.title}
      </h3>
      <p className="mt-1 text-center text-slate-700 text-sm leading-relaxed">
        {item.desc}
      </p>
    </div>
  );

  const RowCard = ({ item }: { item: Service }) => (
    <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <figure className="relative h-16 w-16 md:h-20 md:w-20 rounded-xl overflow-hidden bg-tile ring-2 ring-gold ring-offset-2 ring-offset-white shadow shrink-0 grayscale">
        <Image
          src={item.image}
          alt={item.alt || item.title}
          fill
          sizes="100px"
          className="object-contain transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:transform-none select-none"
          loading="lazy"
          draggable={false}
        />
      </figure>
      <div className="min-w-0">
        <h3 className="text-black font-extrabold text-base md:text-lg leading-tight">
          {item.title}
        </h3>
        <p className="mt-1 text-slate-700 text-sm leading-snug">{item.desc}</p>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-14 md:py-16 bg-white">
      {/* HEADER: tape as background, text over it (now on mobile too) */}
      <div className="relative mb-8">
        <div className="relative h-24 sm:h-28 md:h-32 overflow-hidden">
          <NewspaperTape
            srcs={STRIPS}
            index={1}
            height={96}
            opacity={0.5}
            className="absolute inset-0"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="text-center">
                <h2 className="inline-block px-4 py-1 rounded-md bg-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                  Services &amp; Store Highlights
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards container */}
      <div className="container">
        {/* MOBILE: stacked-card carousel */}
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
            aria-label="Services carousel"
          >
            {items.map((item, i) => (
              <li
                key={item.title}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="snap-center shrink-0 w-[88%] mx-auto"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${items.length}`}
              >
                <MobileCard item={item} />
              </li>
            ))}
          </ul>

         
          {/* dots */}
          <div className="mt-3 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full border transition-all ${
                  index === i
                    ? "w-6 bg-[color:var(--color-black)] border-[color:var(--color-black)]"
                    : "w-2.5 bg-white border-black"
                }`}
              />
            ))}
          </div>
        </div>

        {/* TABLET/DESKTOP: clean grid with row cards */}
        <ul className="hidden md:grid grid-cols-2 xl:grid-cols-2 gap-5 md:gap-8">
          {items.map((item) => (
            <li key={item.title}>
              <RowCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
