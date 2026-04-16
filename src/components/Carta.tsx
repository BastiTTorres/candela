"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type MenuItem = {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  tag?: string;
};

type Categoria = {
  id: string;
  label: string;
  items: MenuItem[];
};

const categorias: Categoria[] = [
  {
    id: "espressos",
    label: "Espressos",
    items: [
      {
        nombre: "Espresso Reserva",
        descripcion: "Blend de finca colombiana y etíope. Notas de ciruela pasa, cacao amargo y un final que evoca panela derretida.",
        precio: "$2.400",
        imagen: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80&auto=format&fit=crop",
      },
      {
        nombre: "Cortado Valluno",
        descripcion: "Espresso cortado con leche de avena texturizada. Dulzor natural que equilibra la acidez brillante del grano de Nariño.",
        precio: "$3.200",
        imagen: "https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=600&q=80&auto=format&fit=crop",
      },
      {
        nombre: "Flat White Andino",
        descripcion: "Doble ristretto sobre micro-espuma sedosa. Para quienes quieren el café en su estado más concentrado y suave.",
        precio: "$3.800",
        imagen: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80&auto=format&fit=crop",
      },
      {
        nombre: "Latté Flores de Cacao",
        descripcion: "Espresso de proceso natural con notas florales sobre leche entera vaporizada. Arte latte en cada taza.",
        precio: "$4.200",
        imagen: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80&auto=format&fit=crop",
        tag: "Favorito",
      },
    ],
  },
  {
    id: "filtrados",
    label: "Métodos de Filtrado",
    items: [
      {
        nombre: "V60 Etiopía Guji",
        descripcion: "Proceso lavado de la zona Guji. Una taza translúcida con notas de jazmín, limón meyer y durazno blanco en el retrogusto.",
        precio: "$4.800",
        imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&auto=format&fit=crop",
        tag: "Origen único",
      },
      {
        nombre: "Chemex Guatemala Huehuetenango",
        descripcion: "Cultivado a 1.800 msnm. Cuerpo aterciopelado, notas de caramelo oscuro, almendra tostada y manzana verde en el final.",
        precio: "$5.200",
        imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80&auto=format&fit=crop",
      },
      {
        nombre: "Prensa Francesa Terroir",
        descripcion: "Blend de temporada con cuerpo pleno. Notas de chocolate con leche, tabaco suave y avellana. Perfecto para una mañana lenta.",
        precio: "$3.900",
        imagen: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?w=600&q=80&auto=format&fit=crop",
      },
      {
        nombre: "Cold Brew 18 Horas",
        descripcion: "Macerado en frío durante 18 horas. Notas de chocolate oscuro y vainilla. Bajo en acidez, alto en intensidad.",
        precio: "$4.500",
        imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&auto=format&fit=crop",
        tag: "Refrescante",
      },
    ],
  },
  {
    id: "pasteleria",
    label: "Pastelería",
    items: [
      {
        nombre: "Croissant de Mantequilla AOP",
        descripcion: "Hojaldrado en tres vueltas con mantequilla francesa. Exterior quebradizo, interior suave. Horneado cada mañana a las 7am.",
        precio: "$2.800",
        imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&auto=format&fit=crop",
        tag: "Horneado hoy",
      },
      {
        nombre: "Tarta de Limón de Pica",
        descripcion: "Crema de limón de Pica, merengue italiano tostado con soplete, base frola de almendras. Acidez brillante, dulzor justo.",
        precio: "$3.500",
        imagen: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80&auto=format&fit=crop",
      },
      {
        nombre: "Bizcocho de Miso y Chocolate",
        descripcion: "Miso blanco fermentado que eleva el chocolate. Húmedo, profundo, con un umami sutil que no olvidarás.",
        precio: "$3.200",
        imagen: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80&auto=format&fit=crop",
        tag: "Vegano",
      },
      {
        nombre: "Canelé de Burdeos",
        descripcion: "Corteza caramelizada y oscura, interior esponjoso con vainilla Tahití y un toque de ron. Pequeño lujo frances.",
        precio: "$1.800",
        imagen: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "brunch",
    label: "Brunch",
    items: [
      {
        nombre: "Tostadas de Masa Madre",
        descripcion: "Pan de masa madre de 72 horas con palta de Petorca, huevo pochado y aceite de oliva virgen extra. Sencillo y perfecto.",
        precio: "$7.900",
        imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80&auto=format&fit=crop",
        tag: "Vegano",
      },
      {
        nombre: "Huevos Revueltos a la Crema",
        descripcion: "Cocidos lento en mantequilla, sobre brioche tostado con ciboulette y trufa de temporada. El desayuno que mereces.",
        precio: "$9.500",
        imagen: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80&auto=format&fit=crop",
        tag: "Favorito",
      },
      {
        nombre: "Bowl de Granola Artesanal",
        descripcion: "Granola de avena, semillas y miel de ulmo sobre yogur griego. Con fruta de temporada del Mercado de La Vega.",
        precio: "$6.800",
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format&fit=crop",
        tag: "Vegano",
      },
      {
        nombre: "Tabla de Quesos y Mermeladas",
        descripcion: "Selección de quesos nacionales con mermeladas de higo y murtilla, nueces caramelizadas y pan de centeno.",
        precio: "$11.900",
        imagen: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=600&q=80&auto=format&fit=crop",
      },
    ],
  },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.07 }}
      className="group bg-candela-pergamino rounded-sm overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-shadow duration-400"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.imagen}
          alt={`${item.nombre} — ${item.descripcion.slice(0, 60)}`}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {item.tag && (
          <span className="absolute top-3 left-3 bg-candela-ambar text-white font-sans text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
            {item.tag}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold text-candela-tostado leading-tight">
            {item.nombre}
          </h3>
          <span className="font-sans text-sm font-semibold text-candela-ambar whitespace-nowrap mt-0.5">
            {item.precio}
          </span>
        </div>
        <p className="font-sans text-xs text-candela-arcilla leading-relaxed">
          {item.descripcion}
        </p>
      </div>
    </motion.article>
  );
}

export default function Carta() {
  const [activa, setActiva] = useState("espressos");
  const header = useScrollReveal();

  const categoriaActual = categorias.find((c) => c.id === activa)!;

  return (
    <section
      id="carta"
      className="bg-candela-lino section-padding"
      aria-labelledby="carta-heading"
    >
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          ref={header.ref as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={header.controls}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-candela-ambar mb-4"
          >
            Nuestra Carta
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="carta-heading"
            className="font-serif text-candela-tostado"
            style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            Cada taza,<br />
            <span className="italic font-normal text-candela-canela">una historia diferente</span>
          </motion.h2>
        </motion.div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Categorías de la carta"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categorias.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activa === cat.id}
              aria-controls={`panel-${cat.id}`}
              onClick={() => setActiva(cat.id)}
              className={`px-5 py-2.5 font-sans text-xs font-semibold tracking-[0.1em] uppercase rounded-sm transition-all duration-250 cursor-pointer focus-visible:outline-2 focus-visible:outline-candela-ambar ${
                activa === cat.id
                  ? "bg-candela-tostado text-candela-cream"
                  : "bg-candela-pergamino text-candela-canela hover:bg-candela-avena"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activa}
            id={`panel-${activa}`}
            role="tabpanel"
            aria-label={categoriaActual.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categoriaActual.items.map((item, i) => (
              <MenuCard key={item.nombre} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Nota vegano */}
        <p className="mt-8 text-center font-sans text-xs text-candela-arcilla">
          Todos nuestros precios incluyen IVA. Consulta opciones sin gluten y alternativas de leche vegetal con tu barista.
        </p>
      </div>
    </section>
  );
}
