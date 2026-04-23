import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mazangaelectric.ao";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mazanga Electric | Soluções Elétricas em Angola",
    template: "%s | Mazanga Electric",
  },
  description:
    "Empresa angolana com 12 anos de experiência especializada em eletricidade residencial, CCTV, cercas elétricas, grupos geradores e instalações industriais em Luanda.",
  keywords: [
    "eletricidade angola",
    "eletricidade luanda",
    "instalação elétrica angola",
    "CCTV luanda",
    "cercas elétricas angola",
    "grupos geradores luanda",
    "eletricidade industrial angola",
    "montagem posto de transformação",
    "Mazanga Electric",
    "electricista luanda",
    "empresa elétrica angola",
    "viana zango luanda",
  ],
  authors: [{ name: "Mazanga Electric", url: siteUrl }],
  creator: "Mazanga Electric",
  publisher: "Mazanga Electric",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Mazanga Electric | Energia que Move Angola",
    description:
      "12 anos de experiência em soluções elétricas para residências, empresas e indústrias em Angola. Qualidade garantida, entrega no prazo.",
    url: siteUrl,
    siteName: "Mazanga Electric",
    locale: "pt_AO",
    type: "website",
    images: [
      {
        url: "/images/logo.PNG",
        width: 1200,
        height: 630,
        alt: "Mazanga Electric — Soluções Elétricas em Angola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazanga Electric | Energia que Move Angola",
    description:
      "12 anos de experiência em soluções elétricas para residências, empresas e indústrias em Angola.",
    images: ["/images/logo.PNG"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" className={montserrat.variable}>
      <body className="antialiased bg-electric-black text-electric-white">
        {children}
      </body>
    </html>
  );
}
