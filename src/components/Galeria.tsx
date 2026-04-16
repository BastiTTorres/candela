"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GaleriaImg = {
  src: string;
  alt: string;
  span?: "col" | "row" | "both";
};

const imagenes: GaleriaImg[] = [
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=80&auto=format&fit=crop",
    alt: "Barista vertiendo espresso en taza blanca",
    span: "col",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80&auto=format&fit=crop",
    alt: "Interior cálido de Candela con luz de tarde filtrada",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80&auto=format&fit=crop",
    alt: "Mesa de madera con libros y taza humeante",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=80&auto=format&fit=crop",
    alt: "Granos de café verde sobre superficie de madera",
    span: "row",
  },
  {
    src: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=900&q=80&auto=format&fit=crop",
    alt: "Arte latte en taza de cerámica artesanal",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80&auto=format&fit=crop",
    alt: "Rincón de lectura junto a la ventana de Candela",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&q=80&auto=format&fit=crop",
    alt: "Detalle de V60 durante el vertido circular",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80&auto=format&fit=crop",
    alt: "Croissant recién horneado junto a café",
  },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="bg-candela-cream section-padding"
      aria-labelledby="galeria-heading"
    >
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-candela-ambar mb-4"
          >
            El Espacio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="galeria-heading"
            className="font-serif text-candela-tostado"
            style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            Un lugar que<br />
            <span className="italic font-normal text-candela-canela">invita a quedarse</span>
          </motion.h2>
        </div>

        {/* Grid masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {imagenes.map((img, i) => (
            <motion.div
              key={img.src + i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-sm ${
                img.span === "col" ? "col-span-2 aspect-[16/9]" :
                img.span === "row" ? "row-span-2 aspect-[1/1] md:aspect-auto" :
                "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-candela-carbon/0 group-hover:bg-candela-carbon/20 transition-colors duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
