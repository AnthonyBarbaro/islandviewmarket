import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NewspaperTape from "@/app/components/NewspaperTape";

const STRIPS = [
  "/news/1.png",
  "/news/2.png",
  "/news/3.png",
  "/news/4.png",
];

export const metadata = {
  metadataBase: new URL("https://www.islandviewmarketsd.com"),

  title: {
    default: "Island View Market & Liquor",
    template: "%s | Island View Market & Liquor",
  },

  description:
    "Island View Market & Liquor — your neighborhood stop for premium spirits, ice-cold beer, groceries, fresh food, and daily essentials. Serving San Diego for 40+ years.",

  keywords: [
    "Island View Market",
    "Island View Liquor",
    "San Diego market",
    "liquor store",
    "cold beer",
    "spirits",
    "grocery store",
    "EBT accepted",
    "craft beer",
    "fresh food",
    "Logan Ave market",
    "neighborhood liquor store",
  ],

  alternates: {
    canonical: "https://www.islandviewmarketsd.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.islandviewmarketsd.com",
    siteName: "Island View Market & Liquor",
    title: "Island View Market & Liquor",
    description:
      "Your neighborhood stop for spirits, cold beer, groceries, fresh food, and essentials.",
    images: [
      {
        url: "http://islandview.s3-website-us-east-1.amazonaws.com/logo1.jpeg",
        width: 1200,
        height: 630,
        alt: "Island View Market & Liquor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Island View Market & Liquor",
    description:
      "San Diego’s neighborhood destination for spirits, cold beer, groceries & more.",
    images: ["/logo1.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LiquorStore",
              "@id": "https://www.islandviewmarketsd.com/#store",
              name: "Island View Market & Liquor",
              image: "https://wwww.islandviewmarketsd.com/logo1.jpeg",
              telephone: "+1-619-262-3251",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5080 Logan Ave",
                addressLocality: "San Diego",
                addressRegion: "CA",
                postalCode: "92113",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "07:00", closes: "00:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "07:00", closes: "00:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "07:00", closes: "00:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "07:00", closes: "00:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:00", closes: "02:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "02:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "00:00" },
              ],
              priceRange: "$$",
              url: "https://www.islandviewmarketsd.com",
              servesCuisine: ["Snacks", "Deli", "Convenience"],
              sameAs: [
                "https://maps.google.com/?cid=3393761236421816759",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.islandviewmarketsd.com",
              name: "Island View Market & Liquor",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.islandviewmarketsd.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body className="bg-white">
        <NavBar />
        <NewspaperTape srcs={STRIPS} index={0} height={100} opacity={0.9} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
