"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Compass, ExternalLink } from "lucide-react";

interface OnboardingProps {
  onStartTest: () => void;
}

const CAROUSEL_BANNERS = [
  {
    src: "/images/premium-blend-tea-banner.jpg",
    alt: "Blends de Autor Fleur de Vie",
    title: "Experiencia Ritual de Té",
  },
  {
    src: "/images/latas-blend-tea.jpg",
    alt: "Latas Blend Tea",
    title: "Colección Exclusiva en Latas",
  },
  {
    src: "/images/capullos-blooming-tea.jpg",
    alt: "Capullos Blooming Tea",
    title: "Capullos Florecientes Premium",
  },
  {
    src: "/images/kit-niños-infusiones-petit.jpg",
    alt: "Kit Niños Infusiones Petit",
    title: "Línea Petit Mágica",
  },
];

export default function Onboarding({ onStartTest }: OnboardingProps) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % CAROUSEL_BANNERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 max-w-md mx-auto w-full select-none gap-6">
      {/* Hero Carousel Section */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/20 group">
        {CAROUSEL_BANNERS.map((banner, index) => (
          <div
            key={banner.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentBannerIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover object-center"
              priority={index === 0}
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C]/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-[#FDFBF7] font-serif text-sm font-semibold tracking-wide drop-shadow-md">
                {banner.title}
              </span>
            </div>
          </div>
        ))}

        {/* Carousel Pagination Dots */}
        <div className="absolute bottom-3 right-3 z-20 flex gap-1.5 bg-[#0F382C]/40 px-2 py-1 rounded-full backdrop-blur-xs">
          {CAROUSEL_BANNERS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentBannerIndex
                  ? "bg-[#D4AF37] w-4"
                  : "bg-white/60 hover:bg-white"
                }`}
              aria-label={`Ir al banner ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Header section */}
      <div className="text-center my-1">
        <h2 className="font-serif text-2xl text-[#0F382C] font-bold mb-1 leading-tight">
          ¿Cómo querés vivir tu momento de té?
        </h2>
      </div>

      {/* Category Selection Cards */}
      <div className="space-y-4 my-auto">
        {/* Card 1: Capullos Florecientes */}
        <div className="w-full text-left bg-white/80 p-4 sm:p-5 rounded-2xl border border-gray-200 opacity-85 relative select-none shadow-xs">
          <div className="absolute top-0 right-0 bg-[#0F382C]/10 text-[#0F382C] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
            Próximamente
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0F382C]/5 flex items-center justify-center shrink-0 p-1 overflow-hidden border border-[#0F382C]/10 shadow-xs">
              <Image
                src="/images/te-floreciente.webp"
                alt="Capullos Florecientes"
                width={56}
                height={56}
                className="w-12 h-12 object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="font-serif text-base text-[#0F382C] font-bold uppercase tracking-wider">
                Capullos Florecientes
              </h3>
              <p className="font-sans text-xs text-[#1A2521]/60 mt-0.5">
                Flores que despiertan frente a tus ojos
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Blends de Autor (Active Core Flow - Highlighted) */}
        <button
          onClick={onStartTest}
          className="w-full text-left bg-[#0F382C] text-[#FDFBF7] p-4 sm:p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xl transition-transform duration-150 active:scale-95 group relative overflow-hidden select-none cursor-pointer"
        >
          <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0F382C] text-[10px] uppercase font-bold tracking-wider px-3 py-0.5 rounded-bl-lg">
            Asesor Virtual
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 p-1 group-hover:scale-110 transition-transform overflow-hidden border border-[#D4AF37]/40 shadow-xs">
              <Image
                src="/images/te-premium.webp"
                alt="Blends de Autor"
                width={56}
                height={56}
                className="w-12 h-12 object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="font-serif text-base text-[#D4AF37] font-bold uppercase tracking-wider">
                Blends de Autor Fleur de Vie
              </h3>
              <p className="font-sans text-xs text-[#FDFBF7]/80 mt-0.5">
                Descubrí tu mezcla perfecta con nuestro test interactivo
              </p>
            </div>
          </div>
        </button>

        {/* Card 3: Petit Infusiones Infantiles */}
        <div className="w-full text-left bg-[#E8E4F0]/60 p-4 sm:p-5 rounded-2xl border border-purple-200/50 opacity-85 relative select-none">
          <div className="absolute top-0 right-0 bg-purple-200/60 text-purple-800 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
            Próximamente
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-purple-100/60 flex items-center justify-center shrink-0 p-1 overflow-hidden border border-purple-200 shadow-xs">
              <Image
                src="/images/infusiones-de-bienestar.webp"
                alt="Petit Infusiones Infantiles"
                width={56}
                height={56}
                className="w-12 h-12 object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="font-serif text-base text-purple-900 font-bold uppercase tracking-wider">
                Petit Infusiones Infantiles
              </h3>
              <p className="font-sans text-xs text-purple-700/70 mt-0.5">
                Para que los niños vivan su momento mágico
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="text-center mt-2 select-none">
        <a
          href="https://www.fleurdevietea.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#0F382C] hover:text-[#D4AF37] font-semibold tracking-wider uppercase transition-colors inline-flex items-center gap-1.5"
        >
          <Compass strokeWidth={1.5} className="w-3.5 h-3.5" />
          <span>Conocé Fleur de Vie</span>
          <ExternalLink strokeWidth={1.5} className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
