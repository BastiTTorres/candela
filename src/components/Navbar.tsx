"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Carta",    href: "#carta" },
  { label: "Galería",  href: "#galeria" },
  { label: "Visítanos",href: "#ubicacion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-candela-carbon/95 backdrop-blur-sm shadow-warm-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-candela-cream"
          aria-label="Candela Café — inicio"
        >
          Candela
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-xs font-medium tracking-[0.12em] uppercase text-candela-cream/75 hover:text-candela-cream transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#carta"
            className="ml-4 px-5 py-2 bg-candela-ambar text-white font-sans text-xs font-semibold tracking-[0.1em] uppercase rounded-sm hover:bg-[#A66820] transition-colors duration-200 cursor-pointer"
          >
            Ver Carta
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-candela-cream p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-candela-carbon/98 backdrop-blur-sm overflow-hidden"
          >
            <nav className="container-narrow py-6 flex flex-col gap-5" aria-label="Menú móvil">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-sm font-medium tracking-[0.1em] uppercase text-candela-cream/80 hover:text-candela-cream transition-colors duration-200 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#carta"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 bg-candela-ambar text-white font-sans text-sm font-semibold tracking-[0.1em] uppercase rounded-sm text-center hover:bg-[#A66820] transition-colors duration-200 cursor-pointer"
              >
                Ver Carta
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
