import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Soft brand tint background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0093450D] via-white to-[#E106000D]" />

      <div className="container relative py-16 md:py-24 text-center">
        <div className="flex justify-center mb-6 md:mb-8">
          <Image
            src="/logo.png"
            alt="Island View Market logo"
            width={160}
            height={160}
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand">
          Island View Market & Liquor
        </h1>

        <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
          Serving the community with fresh groceries, top‑shelf liquor, cold beer,
          household essentials, and daily specials — all in one stop.
        </p>

        <div className="mt-9">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white bg-brand shadow hover:opacity-95"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
