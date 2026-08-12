"use client";

import React from "react";
import { Tag } from "lucide-react";
import { Promotion } from "@/types/tea";

interface PromoBannerProps {
  promotions: Promotion[];
}

export default function PromoBanner({ promotions }: PromoBannerProps) {
  if (!promotions || promotions.length === 0) return null;

  const promo = promotions[0];

  return (
    <div className="bg-[#0F382C] text-[#FDFBF7] py-2.5 px-4 text-center text-xs tracking-wide flex items-center justify-center gap-2 shadow-xs border-b border-[#D4AF37]/30 select-none">
      <Tag strokeWidth={1.5} className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
      <span className="font-semibold text-[#D4AF37]">{promo.title}:</span>
      <span>{promo.description}</span>
    </div>
  );
}
