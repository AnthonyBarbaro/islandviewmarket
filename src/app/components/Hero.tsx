export default function Hero() {
    return (
      <section className="relative w-full overflow-hidden bg-white">
        {/* soft tint for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FDF7F7] via-white to-[#FFF8F3]" />
  
        <div className="container relative py-14 md:py-20 grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-center">
          {/* LEFT: Headline + badges + CTAs (no logo, neutral heading) */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Premium Spirits, Ice‑Cold Beer & Fresh Market Essentials
            </h1>
  
            <p className="mt-4 text-base sm:text-lg md:text-lg text-slate-700 max-w-xl mx-auto md:mx-0">
              Your neighborhood one‑stop for top‑shelf selections, chilled drinks, mixers,
              snacks, and grab‑&‑go favorites.
            </p>
  
            {/* Trust/offer badges */}
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center rounded-full bg-[#0093450F] border border-[#00934533] px-3 py-1 text-[#009345] font-semibold">
                40+ Years Serving the Community
              </span>
              <span className="inline-flex items-center rounded-full bg-[#E1060010] border border-[#E1060033] px-3 py-1 text-[#E10600] font-semibold">
                EBT Accepted
              </span>
              <span className="inline-flex items-center rounded-full bg-[#000000] px-3 py-1 text-[#ffffff] font-semibold">
                Cold Beer &amp; Top‑Shelf Spirits
              </span>
            </div>
  
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white bg-[#E10600] shadow hover:bg-[#c70500] transition"
              >
                Explore Our Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold border border-[#E10600] text-[#E10600] bg-white hover:bg-[#FFF1F1] transition"
              >
                Visit &amp; Hours
              </a>
            </div>
          </div>
  

          {/* RIGHT: Smaller teal+gold highlight card (matches Services) */}
          <div className="hidden md:flex justify-end">
          <div className="
              max-w-md 
              rounded-2xl 
              p-6 
              bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000]
              text-white
              border border-[#2E5260]/30
              shadow-sm
          ">
              <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffffff]/90">
                  Neighborhood Liquor &amp; Market
              </p>

              <h2 className="mt-2 text-xl font-semibold leading-snug">
                  Well-stocked, local, and easy to shop.
              </h2>

              <p className="mt-3 text-[15px] text-[#E6EDF5]/90 leading-relaxed">
                  Premium spirits, ice-cold beer &amp; ready-to-drinks, mixers, fresh food, and
                  local favorites — everything you need for the fridge, bar, or a quick stop.
              </p>
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-[#ffffff]">
              <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ffffff]" />
                  <span>Open daily — see hours below</span>
              </li>

              <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ffffff]" />
                  <span>Corporate orders &amp; custom engravings</span>
              </li>

              <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ffffff]" />
                  <span>Fresh food, local products &amp; daily specials</span>
              </li>

              <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ffffff]" />
                  <span>EBT accepted (eligible items)</span>
              </li>
              </ul>

              <p className="mt-4 text-[11px] text-[#ffffff]/70">
              21+ only. Valid ID required. Please drink responsibly.
              </p>
          </div>
          </div>

        </div>
      </section>
    );
  }
  