"use client";

import React from "react";
import Image from "next/image";

interface SplashProps {
  onStart: () => void;
}

export default function Splash({ onStart }: SplashProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#0F382C] text-[#FDFBF7] p-6 select-none overflow-hidden">
      {/* Background Luxury Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
        <Image
          src="https://acdn-us.mitiendanube.com/stores/006/140/591/themes/brasilia/2-slide-1762982332697-7739069705-0d1c7c3d0c29a0cb944231892c211c3c1762982333-1920-1920.webp?516782175106559954"
          alt="Luxury Blooming Tea Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F382C]/80 via-[#0F382C]/95 to-[#0A271E]" />

      {/* Main Content (Ref: Figma Splash Screen 00-01) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto w-full my-auto">
        {/* Fleur de Vie Sacred Geometry Rosette Emblem */}
        <div className="relative mb-6 p-4 rounded-full bg-[#0A271E]/60 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-xs">
          <svg
            viewBox="0 0 100 100"
            className="w-24 h-24 text-[#D4AF37] animate-pulse"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <circle
              cx="50"
              cy="25"
              r="25"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle
              cx="50"
              cy="75"
              r="25"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle
              cx="25"
              cy="50"
              r="25"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle
              cx="75"
              cy="50"
              r="25"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle
              cx="32.32"
              cy="32.32"
              r="25"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle
              cx="67.68"
              cy="32.32"
              r="25"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle
              cx="32.32"
              cy="67.68"
              r="25"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle
              cx="67.68"
              cy="67.68"
              r="25"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle cx="50" cy="50" r="7" fill="currentColor" />
          </svg>
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-4xl tracking-wider text-[#D4AF37] font-bold mb-1 drop-shadow-md">
          Fleur de Vie
        </h1>
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#D4AF37]/90 mb-6 font-semibold">
          TEA EXPERIENCE
        </p>

        <div className="w-12 h-0.5 bg-[#D4AF37]/40 mb-6 rounded-full" />

        <p className="font-serif italic text-base text-[#FDFBF7]/90 leading-relaxed mb-8">
          Descubrí una experiencia única e interactiva de té.
        </p>

        {/* Action Button */}
        <button
          onClick={onStart}
          className="w-full py-4 px-8 bg-[#D4AF37] hover:bg-[#B89628] text-[#0F382C] font-bold rounded-full shadow-2xl transition-transform duration-150 active:scale-95 text-base tracking-wider uppercase select-none cursor-pointer border border-[#F7F3E9]/20"
        >
          Comenzar
        </button>
      </div>

      <footer className="relative z-10 text-center text-xs text-[#FDFBF7]/50 tracking-wider">
        Fleur de Vie Luxury Tea © 2026
      </footer>
    </div>
  );
}
