// src/app/components/Footer.tsx

export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="mt-16 bg-[#1f1f1f] text-white border-t border-[#009345]/40">
        {/* Top accent bar – mirrors navbar gradient */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[color:var(--color-accent)] via-[color:var(--color-brand)] to-[color:var(--color-accent)]" />
  
        <div className="container py-10 md:py-12">
          {/* Top grid */}
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1.4fr]">
            {/* Column 1 — Brand / blurb */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Island View Market &amp; Liquor
              </h3>
              <p className="text-sm text-white/70 max-w-sm">
                Your neighborhood stop for premium spirits, ice‑cold beer, fresh food,
                and everyday essentials — locally owned &amp; serving the community for
                over 40 years.
              </p>
  
              {/* Chips to echo hero badges / services tags */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] sm:text-xs">
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/80">
                  Corporate Orders
                </span>
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/80">
                  Custom Engravings
                </span>
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/80">
                  EBT Accepted
                </span>
              </div>
  
              {/* Rating pill (static, based on your reviews) */}
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
                <span className="text-[13px] font-semibold text-[#F4D890]">
                  4.2 ★
                </span>
                <span className="text-[11px] text-white/60">
                  Google rating · 19+ reviews
                </span>
              </div>
            </div>
  
            {/* Column 2 — Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-3 text-[#009345]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 hover:text-[color:var(--color-brand)] transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    <span>Services &amp; Highlights</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#brands"
                    className="inline-flex items-center gap-2 hover:text-[color:var(--color-brand)] transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    <span>Brands We Carry</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-2 hover:text-[color:var(--color-brand)] transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    <span>Gallery</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 hover:text-[color:var(--color-brand)] transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    <span>Contact &amp; Hours</span>
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Column 3 — Contact / at-a-glance */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-2 text-[#009345]">
                Visit Us
              </h4>
  
              <div className="space-y-2 text-sm">
                <div className="flex flex-col">
                  <span className="text-white/60 text-[11px] uppercase tracking-wide">
                    Address
                  </span>
                  <span>5080 Logan Ave</span>
                  <span>San Diego, CA 92113</span>
                </div>
  
                <div className="flex flex-col">
                  <span className="text-white/60 text-[11px] uppercase tracking-wide">
                    Phone
                  </span>
                  <a
                    href="tel:+16192623251"
                    className="text-[#E10600] font-semibold hover:underline"
                  >
                    (619) 262-3251
                  </a>
                </div>
  
                <div className="flex flex-col">
                  <span className="text-white/60 text-[11px] uppercase tracking-wide">
                    Typical Hours
                  </span>
                  <span className="text-white/85">
                    Mon–Thu · 7 AM – 12 AM
                  </span>
                  <span className="text-white/85">
                    Fri–Sat · 7 AM – 2 AM
                  </span>
                  <span className="text-white/85">
                    Sun · 8 AM – 12 AM
                  </span>
                </div>
  
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJn_miN9FT2YARoQv4dOLftc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-[#009345] transition-colors pt-1"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#009345]" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
  
          {/* Divider */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  
          {/* Bottom bar */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>
              &copy; {year} Island View Market &amp; Liquor. All rights reserved.
            </p>
            <p className="text-[11px] sm:text-xs">
              Please drink responsibly · 21+ only · Valid ID required.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  