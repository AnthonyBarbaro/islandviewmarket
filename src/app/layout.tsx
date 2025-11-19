import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Island View Market & Liquor",
  description: "Your neighborhood market for liquor, groceries, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
