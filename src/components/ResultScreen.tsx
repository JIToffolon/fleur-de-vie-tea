"use client";

import { ExternalLink, ShoppingBag, RotateCcw, Sparkles, Check, CheckCircle2 } from "lucide-react";
import { MatchResult } from "@/hooks/useTeaTest";
import TeaImage from "./TeaImage";

interface ResultScreenProps {
  matchResult: MatchResult;
  onRestart: () => void;
}

export default function ResultScreen({
  matchResult,
  onRestart,
}: ResultScreenProps) {
  const { winningProduct, matchedTags, score } = matchResult;

  // Dynamic ARS currency formatting using Intl.NumberFormat
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(winningProduct.price);

  return (
    <div className="flex-1 flex flex-col justify-between p-6 max-w-md mx-auto w-full select-none">
      {/* Top Header */}
      <div className="text-center mt-2 mb-4">
        <span className="inline-block text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-bold mb-1">
          Recomendación Personalizada
        </span>
        <h2 className="font-serif text-3xl text-[#0F382C] font-bold">
          Tu Té Ideal
        </h2>
        <p className="font-sans text-xs text-[#1A2521]/70 mt-1">
          Basado en tus preferencias rituales y perfil de sabor
        </p>
      </div>

      {/* Main Product Card (Paso 4.1 y 4.3) */}
      <div className="bg-white rounded-3xl border-2 border-[#D4AF37] shadow-2xl p-6 text-center relative overflow-hidden my-auto space-y-4 select-none">
        {/* Luxury Badge */}
        <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0F382C] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xl shadow-xs flex items-center gap-1">
          <Sparkles strokeWidth={1.5} className="w-3 h-3" />
          <span>{score} Pts Match</span>
        </div>

        {/* Product Image Container */}
        <div className="w-36 h-36 mx-auto rounded-2xl bg-[#F7F3E9] border border-[#D4AF37]/30 flex items-center justify-center relative overflow-hidden shadow-inner my-2">
          <TeaImage
            src={winningProduct.image_url}
            alt={winningProduct.name}
            sizes="144px"
            className="object-cover"
          />
        </div>

        {/* Category & Title */}
        <div>
          <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider">
            {winningProduct.category}
          </span>
          <h3 className="font-serif text-2xl text-[#0F382C] font-bold leading-snug mt-0.5">
            {winningProduct.name}
          </h3>
        </div>

        {/* Price Formatted with Intl.NumberFormat('es-AR') */}
        <div className="py-2 border-y border-gray-100 flex items-center justify-center gap-2">
          <span className="font-sans text-2xl font-bold text-[#0F382C]">
            {formattedPrice}
          </span>
        </div>

        {/* Product Tags (Paso 4.1) */}
        <div>
          <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block mb-2">
            Notas de Cata & Propiedades:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {winningProduct.tags.map((tag) => {
              const isMatched = matchedTags.includes(tag);
              return (
                <span
                  key={tag}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1 ${
                    isMatched
                      ? "bg-[#0F382C] text-[#D4AF37] shadow-xs"
                      : "bg-[#F7F3E9] text-[#1A2521]/70"
                  }`}
                >
                  {isMatched && <Check strokeWidth={2} className="w-3 h-3 text-[#D4AF37]" />}
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        {/* Beneficios de tu Té (Nueva Sección Luxury) */}
        {winningProduct.benefits && winningProduct.benefits.length > 0 && (
          <div className="text-left bg-[#F7F3E9]/70 p-4 rounded-2xl border border-[#D4AF37]/30 space-y-2.5 pt-3">
            <h4 className="font-serif text-sm font-bold text-[#0F382C] flex items-center gap-1.5 border-b border-[#D4AF37]/20 pb-1.5">
              <Sparkles strokeWidth={1.5} className="w-4 h-4 text-[#D4AF37]" />
              <span>Beneficios de tu Té</span>
            </h4>
            <ul className="space-y-2 pt-0.5">
              {winningProduct.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#1A2521] leading-relaxed">
                  <CheckCircle2 strokeWidth={1.5} className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Ingredientes del Té */}
        {winningProduct.ingredients && winningProduct.ingredients.length > 0 && (
          <div className="text-left px-1 text-xs text-[#1A2521]/70 border-t border-gray-100 pt-2">
            <span className="font-semibold text-[#0F382C]">Ingredientes: </span>
            <span>{winningProduct.ingredients.join(" • ")}</span>
          </div>
        )}
      </div>

      {/* Action Buttons (Paso 4.2: Direct E-commerce CTA) */}
      <div className="space-y-3 mt-6">
        <a
          href={winningProduct.buy_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-6 bg-[#D4AF37] hover:bg-[#B89628] text-[#0F382C] font-bold rounded-full shadow-lg transition-transform duration-150 active:scale-95 flex items-center justify-center gap-2 text-base uppercase tracking-wider text-center select-none cursor-pointer"
        >
          <ShoppingBag strokeWidth={1.5} className="w-5 h-5 text-[#0F382C]" />
          <span>Ver en Tienda</span>
          <ExternalLink strokeWidth={1.5} className="w-4 h-4 text-[#0F382C]" />
        </a>

        <button
          onClick={onRestart}
          className="w-full py-3 px-6 bg-transparent text-[#0F382C] hover:text-[#D4AF37] font-semibold text-xs uppercase tracking-wider text-center transition-transform duration-150 active:scale-95 select-none flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <RotateCcw strokeWidth={1.5} className="w-4 h-4" />
          <span>Realizar el Test Nuevamente</span>
        </button>
      </div>
    </div>
  );
}
