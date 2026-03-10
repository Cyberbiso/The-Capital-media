"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Media", href: "#media" },
  { label: "Partner", href: "#partnerships" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.body.style.overflow = "";
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleMenu = () => {
    setMenuOpen((v) => {
      document.body.style.overflow = !v ? "hidden" : "";
      return !v;
    });
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E5E5]"
            : "bg-[#F4F4F4]/90 backdrop-blur-sm border-b border-[#E5E5E5]/50"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <Image
              src="/logo-clear.png"
              alt="Logo"
              width={180}
              height={45}
              className="h-10 w-auto"
            />
            <div className="leading-none">
              <div className="text-[11px] font-500 text-[#6B6B6B] tracking-widest uppercase">The Capital</div>
              <div className="text-[15px] font-700 text-[#1F1F1F] tracking-tight">MEDIA</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNavClick(l.href)}
                  className="text-sm font-500 text-[#6B6B6B] hover:text-[#1F1F1F] transition-colors cursor-pointer bg-transparent border-none"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:flex items-center gap-2 bg-[#8E7C24] hover:bg-[#7A6A1F] text-white text-sm font-600 px-5 py-2.5 rounded-full transition-all hover:-translate-y-px cursor-pointer border-none"
          >
            Partner With Us
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-1 text-[#1F1F1F] cursor-pointer bg-transparent border-none"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/50"
          onClick={() => { setMenuOpen(false); document.body.style.overflow = ""; }}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white flex flex-col p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="text-[15px] font-700 text-[#1F1F1F]">
                THE CAPITAL <span className="text-[#A08C2A]">MEDIA</span>
              </div>
              <button
                onClick={() => { setMenuOpen(false); document.body.style.overflow = ""; }}
                className="p-1 text-[#1F1F1F] cursor-pointer bg-transparent border-none"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-0">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNavClick(l.href)}
                  className="text-left py-4 text-base font-500 text-[#1F1F1F] border-b border-[#E5E5E5] hover:text-[#A08C2A] transition-colors bg-transparent border-x-0 border-t-0 cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="mt-8">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-[#8E7C24] hover:bg-[#7A6A1F] text-white font-600 py-3.5 rounded-full transition-colors cursor-pointer border-none"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
