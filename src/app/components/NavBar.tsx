import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      {/* Taller bar so the bigger logo has room */}
      <div className="container flex items-center justify-between h-[72px] md:h-[88px]">
        {/* Home link with BIG responsive logo; no text <span> */}
        <Link
          href="/"
          aria-label="Island View Market & Liquor — Home"
          className="flex items-center"
        >
          {/* Use SVG for razor-sharp edges. If you only have PNG, keep src='/logo.png' */}
          <div
            className="
              relative
              h-[clamp(44px,10vw,80px)]
              w-[clamp(44px,10vw,80px)]
            "
          >
            <Image
              src="/logo.svg"        // fallback to '/logo.png' if you haven't exported SVG yet
              alt="Island View Market & Liquor logo"
              fill
              priority
              sizes="(max-width: 768px) 10vw, 6vw"
              className="object-contain select-none"
              draggable={false}
            />
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7 text-base font-semibold">
          <Link href="#services" className="hover:text-brand">Services</Link>
          <Link href="#brands" className="hover:text-brand">Brands</Link>
          <Link href="#gallery" className="hover:text-brand">Gallery</Link>
          <Link href="#contact" className="hover:text-brand">Contact</Link>
        </nav>

        {/* Mobile icon (non-interactive placeholder) */}
        <div className="md:hidden text-brand text-3xl font-bold" aria-hidden>
          ☰
        </div>
      </div>
    </header>
  );
}
