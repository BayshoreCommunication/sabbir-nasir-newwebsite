import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

// ✅ Headings (H1, H2)
export const baskervville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-baskervville",
});

// ✅ Body font
const acumin = localFont({
  src: "./fonts/Acumin-RPro.otf",
  weight: "400",
  style: "normal",
  variable: "--font-acumin",
});

// ✅ Special lines
const lumiosMarker = localFont({
  src: "./fonts/Lumios Marker.otf",
  weight: "400",
  style: "normal",
  variable: "--font-lumios",
});

export const metadata: Metadata = {
  title: "Sabbir Nasir & Associates",
  description: "Success Doesn't Happen Without Strategy",
  metadataBase: new URL("https://www.teamsabbirnasir.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baskervville.variable} ${acumin.variable} ${lumiosMarker.variable}`}
    >
      <body className="font-acumin">
        <Providers>
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
