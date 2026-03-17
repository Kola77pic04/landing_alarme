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
  title: "Alarme maison : kits et systèmes d'alarme sans fil",
  description: "Assurez votre sécurité contre les incendies ou cambriolages, avec notre système d'alarme maison pour particuliers.",
  icons: {
    icon: "/alarm_logo.png",
  },
  openGraph: {
    images: ["/alarm_logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/alarm_logo.png"],
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
