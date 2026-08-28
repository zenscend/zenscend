"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "#services", label: "services" },
  { href: "#work", label: "work" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-paper/85 backdrop-blur-md border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center" aria-label="Zenscend home">
            <Image
              src="/zenscend-logo-07.svg"
              alt="Zenscend"
              width={440}
              height={75}
              className="h-6 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-[11px] tracking-tight text-ink-dim hover:text-signal-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="cut [--c:10px] bg-signal text-ground font-display text-[11px] tracking-tight px-4 py-2 hover:bg-ink transition-colors"
            >
              start a project
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ink-dim hover:text-ink"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* grid-rows 0fr -> 1fr animates to auto height without JS measurement */}
      <div
        className={`md:hidden grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] border-t border-rule" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-xs text-ink-dim hover:text-signal-ink py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="cut [--c:10px] bg-signal text-ground font-display text-xs px-4 py-3 mt-2 text-center"
            >
              start a project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
