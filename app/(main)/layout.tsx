import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Économie d'Énergie: Réduisez Votre Facture",
  description: "Découvrez comment réduire vos factures d'énergie. Nos conseils et solutions pour une consommation plus économe et écologique.",
  icons: {
    icon: "/apple-touch-icon.png",
  },
  openGraph: {
    images: ["/energie.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/energie.png"],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
    >
      {children}
    </div>
  );
}
