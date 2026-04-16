"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function Hero() {
  return (
    <section
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden grain-overlay"
      aria-label="Inicio"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=85&auto=format&fit=crop"
        alt="Interior cálido de Candela Café con luz de tarde"
        fill
        priority
        className="object-cover object-center scale-105"
        sizes="100vw"
      />

      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(24,18,14,0.55) 0%, rgba(24,18,14,0.45) 50%, rgba(24,18,14,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 container-narrow text-center flex flex-col items-center gap-6 md:gap-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-candela-ambar"
        >
          Café de Especialidad · Santiago, Chile
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          className="font-serif font-semibold text-candela-cream text-balance"
          style={{ fontSize: "clamp(52px,8vw,96px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          Donde el café<br />
          <span className="italic font-normal">encuentra su alma</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
          className="font-sans font-light text-candela-cream/75 max-w-xl text-base md:text-lg"
          style={{ lineHeight: 1.7 }}
        >
          Granos de origen único, tostados con intención. Un espacio para
          detenerse, respirar y saborear lo que importa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <a
            href="#carta"
            className="px-8 py-3.5 bg-candela-ambar text-white font-sans text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-[#A66820] transition-colors duration-300 cursor-pointer"
          >
            Nuestra Carta
          </a>
          <a
            href="#nosotros"
            className="px-8 py-3.5 border border-candela-cream/50 text-candela-cream font-sans text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:border-candela-cream hover:bg-candela-cream/10 transition-all duration-300 cursor-pointer"
          >
            Nuestra Historia
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-candela-cream/40"
      >
        <span className="font-sans text-[10px] tracking-[0.15em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
