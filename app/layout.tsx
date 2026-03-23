import "./globals.css";
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
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  title: "Alarme maison : kits et systèmes d'alarme",
  description: "Votre Télésurveillance 24h/24 & 7j/7. Profitez dès aujourd’hui de votre installation gratuite et de -20% sur votre abonnement mensuel durant 12 mois. Pour un devis en 2minutes indiquez nous la superficie de votre logement en un clic ? Votre estimation gratuite sous  24h , pas une minute à perdre !",
  icons: {
    icon: "/alarm_logo.png",
  },
  openGraph: {
    images: ["/alarme.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/alarme.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}