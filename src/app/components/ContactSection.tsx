import NewspaperTape from "@/app/components/NewspaperTape";

const STRIPS = ["/news/1.png", "/news/2.png", "/news/3.png", "/news/4.png"];

const REVIEWS = [
  {
    author: "Sofiie Aguilera B",
    meta: "Local Guide · 24 reviews · 17 photos",
    text: "Best neighborhood store, love this place — the owner is so nice.",
    time: "Edited 4 months ago",
  },
  {
    author: "Luke Abbo",
    meta: "7 reviews",
    text: "This is the best store in the neighborhood. Family owned, very safe, everyone is cool at this place.",
    time: "1 year ago",
  },
  {
    author: "Dylan Nafso",
    meta: "3 reviews · 4 photos",
    text: "Very clean, very organized, well-stocked c-store. Big selection in liquor and craft beers, excellent customer service.",
    time: "1 year ago",
  },
  {
    author: "Chris Attiq",
    meta: "5 reviews",
    text: "Very nice store! Very clean and owners were very helpful when deciding which tequila to buy.",
    time: "1 year ago",
  },
  {
    author: "Fidal Zora",
    meta: "6 reviews",
    text: "Thank you Anthony for the amazing service! Great prices and great people.",
    time: "2 years ago",
  },
  {
    author: "John Anderson",
    meta: "Local Guide · 80 reviews · 2 photos",
    text: "Good place. Friendly service and good prices.",
    time: "2 years ago",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white border-t border-slate-200">
      {/* HEADER with newspaper tape behind title */}
      <div className="relative mb-10">
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
                  Contact & Store Info
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT + MAP */}
      <div className="container grid gap-10 md:gap-12 md:grid-cols-2 items-start">
        {/* LEFT: Contact + Hours in a card */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 space-y-6">
          {/* Address */}
          <div className="space-y-1">
            <p className="text-xs sm:text-sm uppercase font-semibold tracking-[0.18em] text-[#009345]">
              Address
            </p>
            <p className="text-lg font-medium text-slate-900">
              5080 Logan Ave, San Diego, CA 92113
            </p>
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <p className="text-xs sm:text-sm uppercase font-semibold tracking-[0.18em] text-[#009345]">
              Phone
            </p>
            <a
              href="tel:+16192623251"
              className="text-lg font-semibold text-[#E10600] hover:underline"
            >
              (619) 262-3251
            </a>
          </div>

          {/* HOURS */}
          <div>
            <p className="text-xs sm:text-sm uppercase font-semibold tracking-[0.18em] text-[#009345] mb-3">
              Store Hours
            </p>

            <div className="rounded-xl bg-slate-50/80 border border-slate-200 px-4 py-3">
              <ul className="text-slate-800 text-[14px] sm:text-[15px] space-y-1.5">
                <li className="flex justify-between gap-4">
                  <span>Monday</span> <span>7 AM – 12 AM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Tuesday</span> <span>7 AM – 12 AM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Wednesday</span> <span>7 AM – 12 AM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Thursday</span> <span>7 AM – 12 AM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Friday</span> <span>7 AM – 2 AM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span> <span>7 AM – 2 AM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span> <span>8 AM – 12 AM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Directions Button */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=5080+Logan+Ave,+San+Diego,+CA+92113"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-6 py-3 rounded-lg font-semibold text-white
              bg-[#009345] hover:bg-[#007e3b] transition shadow-sm
            "
          >
            Get Directions
          </a>
        </div>

        {/* RIGHT: Google Map (unchanged source) */}
        <div className="rounded-2xl overflow-hidden h-72 md:h-full shadow-lg border border-slate-300">
          <iframe
            title="Google Map - Island View Market"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13467.542078667661!2d-117.09451135!3d32.71030535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9540f728621eb%3A0x2f3ba61c89c46d37!2s5080%20Logan%20Ave%2C%20San%20Diego%2C%20CA%2092113!5e0!3m2!1sen!2sus!4v1732555555555!5m2!1sen!2sus"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* REVIEWS (static, no API) */}
      <div className="container mt-14">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                What Customers Are Saying
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Real Google reviews highlighted for Island View Market.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-[#E3B341] text-base">★★★★★</span>
              <span className="font-semibold text-slate-900">4.2</span>
              <span className="text-slate-500">· 19 reviews</span>
            </div>
          </div>

          <div className="grid gap-4 md:gap-5 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <figure
                key={`${r.author}-${i}`}
                className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <figcaption className="font-semibold text-slate-900">
                    {r.author}
                  </figcaption>
                  {/* Always show 5 stars as requested */}
                  <span className="text-[11px] text-[#E3B341]">★★★★★</span>
                </div>
                {r.meta && (
                  <p className="text-[11px] text-slate-500 mb-1">{r.meta}</p>
                )}
                <p className="text-slate-700 leading-relaxed flex-1">
                  {r.text}
                </p>
                {r.time && (
                  <p className="mt-2 text-[11px] text-slate-500">{r.time}</p>
                )}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
