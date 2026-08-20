"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TeaImageProps {
  src?: string | null;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export default function TeaImage({
  src,
  alt,
  className = "object-cover",
  fill = true,
  width,
  height,
  priority = false,
  sizes,
}: TeaImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || hasError) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F7F3E9] to-[#EFE8D8] text-[#0F382C] p-4 text-center select-none"
        role="img"
        aria-label={alt}
      >
        {/* Rosette Sacred Geometry Placeholder Icon */}
        <svg
          viewBox="0 0 100 100"
          className="w-12 h-12 text-[#D4AF37] mb-1.5 opacity-90 drop-shadow-xs"
          fill="none"
        >
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="25" r="25" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="50" cy="75" r="25" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="25" cy="50" r="25" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="75" cy="50" r="25" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="32.32" cy="32.32" r="25" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="67.68" cy="32.32" r="25" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="32.32" cy="67.68" r="25" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="67.68" cy="67.68" r="25" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="50" cy="50" r="6" fill="currentColor" />
        </svg>
        <span className="font-serif text-[11px] font-bold text-[#0F382C] tracking-wider uppercase">
          Fleur de Vie
        </span>
        <span className="font-sans text-[9px] text-[#D4AF37] font-medium tracking-widest uppercase">
          Luxury Tea
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-10 bg-[#F7F3E9] animate-pulse flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-8 h-8 text-[#D4AF37]/50 animate-spin"
            fill="none"
          >
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" strokeDasharray="60 120" />
          </svg>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}
