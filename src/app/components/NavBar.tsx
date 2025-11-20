"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  // Optional: close menu on scroll
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      {/* Top bar */}
      <div className="container flex items-center justify-between h-[72px] md:h-[91px]">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Island View Market & Liquor — Home"
          className="flex items-center"
          onClick={closeMenu}
        >
          <div className="relative h-16 w-44 sm:h-20 sm:w-52 md:h-24 md:w-64 lg:h-28 lg:w-72 xl:h-32 xl:w-80">
            <Image
              src="/logo.svg" // or "/logo.png"
              alt="Island View Market & Liquor logo"
              fill
              priority
              sizes="(max-width: 768px) 40vw, 260px"
              className="object-contain select-none"
              draggable={false}
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-900">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#brands">Brands</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          aria-label="Toggle menu"
          onClick={toggle}
          className="md:hidden text-3xl font-bold text-[color:var(--color-brand)]"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Colored accent line (no black border anymore) */}
      <div className="h-[3px] bg-gradient-to-r from-[color:var(--color-accent)] via-[color:var(--color-brand)] to-[color:var(--color-accent)]" />

      {/* MOBILE MENU – really hidden when closed */}
      {open && (
        <nav className="md:hidden bg-white border-b shadow-sm">
          <div className="container flex flex-col py-3 text-base font-semibold space-y-2">
            <MobileLink href="#services" onClick={closeMenu}>
              Services
            </MobileLink>
            <MobileLink href="#brands" onClick={closeMenu}>
              Brands
            </MobileLink>
            <MobileLink href="#gallery" onClick={closeMenu}>
              Gallery
            </MobileLink>
            <MobileLink href="#contact" onClick={closeMenu}>
              Contact
            </MobileLink>
          </div>
        </nav>
      )}
    </header>
  );
}

/* Helpers */

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative pb-1 hover:text-[color:var(--color-brand)]"
    >
      {children}
    </Link>
  );
}

type MobileLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
};

function MobileLink({ href, children, onClick }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="py-1 text-slate-900 hover:text-[color:var(--color-brand)]"
    >
      {children}
    </Link>
  );
}
