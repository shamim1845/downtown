import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title:
    "City News – JNews – Premium News, Blog & Magazine WordPress Theme site",
  description: "Downtown - Modern News Magazine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} antialiased lg:pt-0 pt-[60px]`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
