"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const horarios = [
  { dia: "Lunes — Viernes", horas: "8:00 — 20:00" },
  { dia: "Sábado",          horas: "9:00 — 21:00" },
  { dia: "Domingo",         horas: "10:00 — 18:00" },
];

const contacto = [
  { icon: MapPin, label: "Av. Italia 1242, Barrio Italia, Providencia, Santiago" },
  { icon: Phone,  label: "+56 9 8765 4321" },
  { icon: Mail,   label: "hola@candelacafe.cl" },
];

export default function Ubicacion() {
  return (
    <section
      id="ubicacion"
      className="bg-candela-pergamino section-padding"
      aria-labelledby="ubicacion-heading"
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
            Visítanos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="ubicacion-heading"
            className="font-serif text-candela-tostado"
            style={{ fontSize: "clamp(32px,4vw,52px)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            En el corazón<br />
            <span className="italic font-normal text-candela-canela">del Barrio Italia</span>
          </motion.h2>
        </div>

        {/* Grid info | mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-10"
          >
            {/* Contacto */}
            <div className="flex flex-col gap-5">
              {contacto.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-0.5 p-2 bg-candela-ambar/10 rounded-sm">
                    <Icon size={16} className="text-candela-ambar" aria-hidden="true" />
                  </div>
                  <p className="font-sans text-sm text-candela-canela leading-relaxed">{label}</p>
                </div>
              ))}
            </div>

            {/* Separador */}
            <div className="w-full h-px bg-candela-avena" />

            {/* Horarios */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Clock size={16} className="text-candela-ambar" aria-hidden="true" />
                <h3 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-candela-canela">
                  Horarios de Atención
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {horarios.map((h) => (
                  <div
                    key={h.dia}
                    className="flex justify-between items-center py-2.5 border-b border-candela-avena last:border-0"
                  >
                    <span className="font-sans text-sm text-candela-canela">{h.dia}</span>
                    <span className="font-sans text-sm font-semibold text-candela-tostado tabular-nums">
                      {h.horas}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nota adicional */}
            <p className="font-sans text-xs text-candela-arcilla leading-relaxed bg-candela-lino p-4 rounded-sm border-l-2 border-candela-ambar">
              Contamos con WiFi de alta velocidad, enchufes en todas las mesas y un ambiente pensado para trabajar o simplemente desconectarse. Sin límite de tiempo.
            </p>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="rounded-sm overflow-hidden shadow-warm-lg aspect-[4/3] lg:aspect-auto lg:h-[480px]"
          >
            <iframe
              title="Ubicación de Candela Café en Barrio Italia, Santiago"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6547!2d-70.6385!3d-33.4372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4b47e89ebf3%3A0x1e98f1d58e4ef11a!2sAv.%20Italia%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1713000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(20%) saturate(80%) brightness(105%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
