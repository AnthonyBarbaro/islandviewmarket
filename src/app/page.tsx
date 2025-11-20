import Hero from "./components/Hero";
import Services from "./components/Services";
import Brands from "./components/Brands";
import NewspaperTape from "@/app/components/NewspaperTape";

const STRIPS = [
  "/news/1.png",
  "/news/2.png",
  "/news/3.png",
  "/news/4.png",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Services />

      <Brands />
    </>
  );
}
