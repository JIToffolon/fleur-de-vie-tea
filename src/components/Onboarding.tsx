"use client";

import React from "react";
import { Flower2, CupSoda, Smile, Compass, ExternalLink } from "lucide-react";

interface OnboardingProps {
  onStartTest: () => void;
}

export default function Onboarding({ onStartTest }: OnboardingProps) {
  return (
    <div className="flex-1 flex flex-col justify-between p-6 max-w-md mx-auto w-full select-none">
      {/* Header section (Ref: Screen 02 Onboarding Figma) */}
      <div className="text-center my-6">
        <span className="inline-block text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold mb-1">
          02 • ONBOARDING
        </span>
        <h2 className="font-serif text-2xl text-[#0F382C] font-bold mb-2 leading-tight">
          ¿Cómo querés vivir tu momento de té?
        </h2>
      </div>

      {/* Experience Cards */}
      <div className="space-y-4 my-auto">
        {/* Card 1: Capullos Florecientes */}
        <div className="w-full text-left bg-white/70 p-5 rounded-2xl border border-gray-200 opacity-80 relative select-none shadow-xs">
          <div className="absolute top-0 right-0 bg-[#0F382C]/10 text-[#0F382C] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
            Próximamente
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0F382C]/10 text-[#0F382C] flex items-center justify-center font-bold text-xl">
              <Flower2 strokeWidth={1.5} className="w-6 h-6 text-[#0F382C]" />
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
          className="w-full text-left bg-[#0F382C] text-[#FDFBF7] p-5 rounded-2xl border-2 border-[#D4AF37] shadow-xl transition-transform duration-150 active:scale-95 group relative overflow-hidden select-none cursor-pointer"
        >
          <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0F382C] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
            Asesor Virtual
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37] text-[#0F382C] flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
              <CupSoda strokeWidth={1.5} className="w-6 h-6 text-[#0F382C]" />
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
        <div className="w-full text-left bg-[#E8E4F0]/60 p-5 rounded-2xl border border-purple-200/50 opacity-80 relative select-none">
          <div className="absolute top-0 right-0 bg-purple-200/60 text-purple-800 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-lg">
            Próximamente
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl">
              <Smile strokeWidth={1.5} className="w-6 h-6 text-purple-700" />
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
      <div className="text-center mt-6 select-none">
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
