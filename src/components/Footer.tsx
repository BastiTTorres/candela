"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Inline SVG brand icons (lucide-react 1.x no incluye iconos de marca)
function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const links: Record<string, string[]> = {
  "Experiencia": ["Nuestra Carta", "Métodos de Filtrado", "Brunch", "Eventos Privados"],
  "La Empresa":  ["Sobre Nosotros", "Tostadería", "Trabaja con Nosotros", "Prensa"],
  "Conectar":    ["Instagram", "Facebook", "Newsletter", "Contacto"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent]   = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  }

  return (
    <footer className="bg-candela-carbon text-candela-cream/80" aria-label="Pie de página">
      {/* Newsletter band */}
      <div className="border-b border-candela-cream/10">
        <div className="container-narrow py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-candela-cream mb-2">
                Sé el primero en saberlo
              </h2>
              <p className="font-sans text-sm text-candela-cream/50">
                Nuevos orígenes, eventos de cata, menús de temporada.
              </p>
            </div>

            {sent ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-sans text-sm text-candela-ambar font-medium"
              >
                ¡Gracias! Te escribiremos pronto.
              </motion.p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[380px]"
                noValidate
              >
                <label htmlFor="footer-email" className="sr-only">
                  Tu correo electrónico
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.cl"
                  required
                  className="flex-1 px-4 py-3 bg-candela-cream/10 border border-candela-cream/20 rounded-sm text-candela-cream placeholder:text-candela-cream/30 font-sans text-sm focus:outline-none focus:border-candela-ambar transition-colors duration-200"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-candela-ambar text-white font-sans text-xs font-semibold tracking-[0.1em] uppercase rounded-sm hover:bg-[#A66820] transition-colors duration-200 cursor-pointer"
                >
                  Suscribirse
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-narrow py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <p className="font-serif text-3xl font-semibold text-candela-cream">
              Candela
            </p>
            <p className="font-sans text-xs text-candela-cream/45 leading-relaxed max-w-[200px]">
              Café de especialidad en Santiago. Granos de origen único, tostados con intención.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-2" aria-label="Redes sociales">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Candela"
                className="p-2 text-candela-cream/40 hover:text-candela-ambar transition-colors duration-200 cursor-pointer"
              >
                <IconInstagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Candela"
                className="p-2 text-candela-cream/40 hover:text-candela-ambar transition-colors duration-200 cursor-pointer"
              >
                <IconFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([grupo, items]) => (
            <div key={grupo}>
              <h3 className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-candela-cream/35 mb-5">
                {grupo}
              </h3>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-candela-cream/55 hover:text-candela-cream transition-colors duration-200 cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-candela-cream/10 flex flex-col md:flex-row justify-between gap-3">
          <p className="font-sans text-xs text-candela-cream/30">
            © {new Date().getFullYear()} Candela Café de Especialidad SpA · Santiago, Chile
          </p>
          <div className="flex gap-6">
            {["Términos", "Privacidad"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-sans text-xs text-candela-cream/30 hover:text-candela-cream/60 transition-colors duration-200 cursor-pointer"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
