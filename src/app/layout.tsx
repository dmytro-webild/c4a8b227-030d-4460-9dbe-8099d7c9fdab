import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Tuval, Şövale ve Kanvas Tablo İmalatı | Deniz Çerçeve Ankara',
  description: 'Tuval üreticisi, toptan şövale imalatçısı Deniz Çerçeve Ankara. Tuval şasesi, kasnağı, kanvas tablo çıtası ve ahşap çerçeve hizmetleri için bizi ziyaret edin.',
  openGraph: {
    "title": "Deniz Çerçeve | Kaliteli Sanat Ürünleri",
    "description": "Ankara'nın en kaliteli çerçeve ve tuval imalatçısı.",
    "siteName": "Deniz Çerçeve"
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
