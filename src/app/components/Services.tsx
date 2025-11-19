import Image from "next/image";

type Service = {
  title: string;
  desc: string;
  image: string; // square PNG tile in /public/icons
  alt?: string;
};

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
      title: "Cold Beer • Top‑Shelf Liquor",
      desc:
        "Wide selection including Hennessy, Rémy Martin, Martell, Corona, Coors, Bud Light, and more.",
      image: "/icons/liquor.png",
      alt: "Cold Beer and Top‑Shelf Liquor",
    },
    {
      title: "Local Specials",
      desc:
        "Weekly deals, discounts, and neighborhood markdowns across groceries and spirits.",
      image: "/icons/specials.png",
      alt: "Local Specials",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-extrabold text-brand">
          What We Offer
        </h2>
        <p className="mt-3 mb-12 text-center text-slate-700">
          Quality service rooted in over 40 years of community trust.
        </p>

        {/* Grid */}
        <ul className="grid gap-8 md:gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="group relative rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm
                         transition hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* NON-CLICKABLE image tile – fluid on mobile */}
              <figure
  className="relative mx-auto mb-6 aspect-square w-full max-w-[300px]
             overflow-hidden rounded-2xl bg-tile ring-4 ring-gold ring-offset-4 ring-offset-white
             shadow-md select-none cursor-default group"
>
  <Image
    src={item.image}
    alt={item.alt || item.title}
    fill
    sizes="(max-width: 640px) 85vw, (max-width: 1280px) 40vw, 320px"
    className="object-contain transition-transform duration-300 ease-out
               scale-125 group-active:scale-105 motion-reduce:transform-none"
    loading="lazy"
    draggable={false}
  />
</figure>

              {/* Title + Copy */}
              <h3 className="text-center text-2xl md:text-3xl font-extrabold text-gold">
                {item.title}
              </h3>
              <p className="mt-3 text-center text-slate-700 text-base leading-relaxed">
                {item.desc}
              </p>

              {/* Subtle hover accent */}
              <div className="pointer-events-none absolute inset-x-10 -bottom-2 h-1 rounded-full bg-gold/20 opacity-0 transition group-hover:opacity-100" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
