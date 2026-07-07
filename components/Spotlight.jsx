"use client";

import { useState } from "react";

export default function Spotlight({ children }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
