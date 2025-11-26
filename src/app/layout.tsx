import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export const metadata = {
  title: "Island View Market & Liquor",
  description: "Your neighborhood market for liquor, groceries, and more.",
};
import NewspaperTape from "@/app/components/NewspaperTape";

const STRIPS = [
  "/news/1.png",
  "/news/2.png",
  "/news/3.png",
  "/news/4.png",
];
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <NavBar />
        <NewspaperTape srcs={STRIPS} index={0} height={100} opacity={0.9} />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
