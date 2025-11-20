"use client";

import { useMemo } from "react";

type Props = {
  srcs: string[];        // /public/patterns strips
  height?: number;       // height of the tape
  opacity?: number;      // transparency
  index?: number;        // which strip to use
  className?: string;    // extra styling
};

export default function NewspaperTape({
  srcs,
  height = 80,
  opacity = 0.85,
  index = 0,
  className = "",
}: Props) {
  const src = useMemo(
    () => srcs[Math.max(0, Math.min(index, srcs.length - 1))],
    [srcs, index]
  );

  return (
    <div
      aria-hidden
      className={`relative w-full ${className}`}
      style={{
        height,
        backgroundImage: `url(${src})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        opacity,
        filter: "grayscale(100%) contrast(1.1)",
      }}
    >
      {/* subtle shadow below strip */}
      <div
        className="absolute inset-x-0 bottom-0 h-6"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0))",
        }}
      />
    </div>
  );
}
