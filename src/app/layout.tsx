import type { Metadata } from "next";
import { Oxanium, IBM_Plex_Mono, Nunito } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "CRIMTRACK | Intelligence Terminal",
  description: "Secure Police Criminal Records Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable} ${ibmPlexMono.variable} ${nunito.variable} font-nunito antialiased`}>
        {children}
      </body>
    </html>
  );
}
