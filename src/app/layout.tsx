import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Candela — Café de Especialidad | Santiago, Chile",
  description:
    "Cafetería de especialidad en Santiago. Granos de origen único, métodos de filtrado artesanales, pastelería de autor y brunch. Un espacio para conectar.",
  openGraph: {
    title: "Candela Café de Especialidad",
    description: "Granos de origen único. Métodos de filtrado artesanales. Santiago, Chile.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL">
      <body className="antialiased">{children}</body>
    </html>
  );
}
