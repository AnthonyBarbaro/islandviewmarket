"use client";

import { useMemo } from "react";

type Props = {
  srcs: string[];      // /public/news/*.png
  height?: number;     // tape height
  opacity?: number;    // transparency
  index?: number;      // which strip to use
  className?: string;  // extra classes
  speed?: number;      // relative speed
};

export default function NewspaperTape({
  srcs,
  height = 56,
  opacity = 0.6,
  index = 0,
  className = "",
  speed = 30,
}: Props) {
  const src = useMemo(
    () => srcs[Math.max(0, Math.min(index, srcs.length - 1))],
    [srcs, index]
  );

  return (
    <div
      aria-hidden
      className={`relative overflow-hidden w-full ${className}`}
      style={{
        height,
        filter: "grayscale(100%) contrast(1.05) brightness(1.05)",
        opacity,
      }}
    >
      {/* scrolling tape via background-position */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "0 50%",
          animation: `scrollTape ${500 / speed}s linear infinite`,
        }}
      />

      {/* very soft shadow under the strip */}
      <div
        className="absolute inset-x-0 bottom-0 h-4"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0))",
        }}
      />

      <style>
        {`
          @keyframes scrollTape {
            0%   { background-position-x: 0; }
            100% { background-position-x: -100%; }
          }
        `}
      </style>
    </div>
  );
}
