"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const valores = [
  {
    title: "Origen Único",
    desc:  "Cada grano tiene una historia. Trabajamos directamente con productores de Colombia, Etiopía y Guatemala.",
  },
  {
    title: "Tueste Propio",
    desc:  "Tostamos en pequeños lotes para garantizar frescura y respetar el perfil de cada finca.",
  },
  {
    title: "Comunidad",
    desc:  "Más que una cafetería, somos un punto de encuentro para quienes valoran lo bien hecho.",
  },
];

export default function SobreNosotros() {
  const left = useScrollReveal();
  const right = useScrollReveal();
  const vals = useScrollReveal();

  return (
    <section
      id="nosotros"
      className="bg-candela-cream section-padding"
      aria-labelledby="nosotros-heading"
    >
      <div className="container-narrow">
        {/* Grid: texto | imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Texto */}
          <div ref={left.ref as React.RefObject<HTMLDivElement>}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={left.controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-candela-ambar mb-4"
            >
              Nuestra Historia
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={left.controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay: 0.1 } },
              }}
              id="nosotros-heading"
              className="font-serif text-candela-tostado mb-6"
              style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
            >
              Nacimos del amor<br />
              <span className="italic font-normal text-candela-canela">por el café honesto</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={left.controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.2 } },
              }}
              className="font-sans text-candela-canela text-base leading-relaxed mb-4"
            >
              Candela nació en 2019 cuando Bastián Torres, armado con una
              laptop y demasiado acceso a Claude Code, le pidió a una IA que
              le diseñara &ldquo;la cafetería perfecta&rdquo;. La IA lo tomó
              demasiado en serio. Bastián también. El resto es historia — y
              muy buen café.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={left.controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.3 } },
              }}
              className="font-sans text-candela-arcilla text-sm leading-relaxed mb-8"
            >
              Hoy servimos granos de fincas que visitamos cada año, tostados
              en nuestro local cada semana. Cada taza es el resultado de una
              cadena de decisiones conscientes — desde la altura del cultivo
              hasta la temperatura del agua que vierte tu barista.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={left.controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.4 } },
              }}
            >
              <a
                href="#carta"
                className="inline-block px-6 py-3 border border-candela-tostado text-candela-tostado font-sans text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-candela-tostado hover:text-candela-cream transition-all duration-300 cursor-pointer"
              >
                Explorar nuestra carta
              </a>
            </motion.div>
          </div>

          {/* Imagen */}
          <motion.div
            ref={right.ref as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: 32 }}
            animate={right.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.15 } },
            }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-warm-lg group">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=85&auto=format&fit=crop"
                alt="Barista de Candela preparando un V60 con precisión"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-candela-pergamino shadow-warm-md p-5 rounded-sm max-w-[200px]">
              <p className="font-serif text-2xl font-semibold text-candela-tostado leading-none">+6</p>
              <p className="font-sans text-xs text-candela-arcilla mt-1 leading-snug">años tostando en Santiago</p>
            </div>
          </motion.div>
        </div>

        {/* Valores */}
        <div
          ref={vals.ref as React.RefObject<HTMLDivElement>}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-candela-avena pt-12"
        >
          {valores.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              animate={vals.controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASE, delay: i * 0.1 },
                },
              }}
              className="flex flex-col gap-3"
            >
              <div className="w-8 h-px bg-candela-ambar" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold text-candela-tostado">
                {v.title}
              </h3>
              <p className="font-sans text-sm text-candela-arcilla leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
