"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/#about-me", label: "About Me", shortLabel: "About" },
  { href: "/#strengths", label: "My Strengths", shortLabel: "Skills" },
  { href: "/#projects", label: "Projects", shortLabel: "Work" },
  { href: "/#contact", label: "Contact", shortLabel: "Contact" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setShow(currentY < lastY.current || currentY < 80);
      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="flex h-24 w-full items-center border-b border-white/15 bg-[#090909]/85 px-3 backdrop-blur-md sm:px-6 md:px-10 lg:px-14">
        <Link href="/#about-me" className="shrink-0 text-sm font-extrabold text-white transition hover:text-zinc-200 sm:text-base md:text-2xl">
          Frenz Cubillan
        </Link>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-1 text-[11px] font-extrabold text-zinc-100 sm:gap-5 sm:text-sm md:gap-8 md:text-base">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap px-1 py-2 transition duration-300 hover:-translate-y-0.5 hover:text-white sm:px-2"
            >
              <span className="sm:hidden">{item.shortLabel}</span>
              <span className="hidden sm:inline">{item.label}</span>
              <span className="absolute -bottom-1 left-1 right-1 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
