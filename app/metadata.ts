import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lucas Dog Walker - Cuidados Profissionais para seu Pet",
  description:
    "Serviços profissionais de dog walker na Zona Leste de São Paulo. Passeios personalizados, acompanhamento veterinário e primeiros socorros para seu pet.",
  keywords: ["dog walker", "passeador de cães", "são paulo", "zona leste", "pet care", "cuidados com pets"],
  authors: [{ name: "Lucas" }],
  creator: "Lucas Dog Walker",
  metadataBase: new URL("https://lucas-dog-walker.vercel.app"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lucas-dog-walker.vercel.app",
    title: "Lucas Dog Walker - Cuidados Profissionais para seu Pet",
    description:
      "Serviços profissionais de dog walker na Zona Leste de São Paulo. Passeios personalizados, acompanhamento veterinário e primeiros socorros para seu pet.",
    siteName: "Lucas Dog Walker",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

