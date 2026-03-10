"use client";

import { TrendingUp, Mail, Globe, MapPin, Twitter, Linkedin, Youtube } from "lucide-react";

const serviceLinks = [
  { label: "Economic Analysis", href: "#focus" },
  { label: "Media Presence", href: "#media" },
  { label: "Economic Forums", href: "#partnerships" },
  { label: "Research Reports", href: "#partnerships" },
  { label: "Educational Programs", href: "#partnerships" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Founder Profile", href: "#founder" },
  { label: "Our Portfolio", href: "#media" },
  { label: "Our Audience", href: "#audience" },
  { label: "FAQ", href: "#" },
];

export default function Footer() {
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer style={{ background: "#2A2A2A" }} className="px-5 pt-14 pb-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A08C2A] to-[#5A4818] flex items-center justify-center">
                <TrendingUp size={14} color="white" />
              </div>
              <div>
                <div className="text-[10px] font-500 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>The Capital</div>
                <div className="text-[13px] font-700 text-white tracking-tight">MEDIA</div>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
              Botswana&apos;s trusted source for economic analysis, business dialogue, financial
              markets insights, and entrepreneurship development in Botswana and Africa.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <Twitter size={13} />, href: "#" },
                { icon: <Linkedin size={13} />, href: "#" },
                { icon: <Youtube size={13} />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-[rgba(160,140,42,0.3)] hover:text-[#A08C2A]"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[12px] font-600 uppercase tracking-widest mb-4 text-white"
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={handleClick(l.href)}
                    className="text-[13px] transition-colors hover:text-[#A08C2A]"
                    style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-600 uppercase tracking-widest mb-4 text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={handleClick(l.href)}
                    className="text-[13px] transition-colors hover:text-[#A08C2A]"
                    style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-600 uppercase tracking-widest mb-4 text-white">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: <Mail size={13} />, text: "info@thecapitalbw.com", href: "mailto:info@thecapitalbw.com" },
                { icon: <Globe size={13} />, text: "www.thecapitalbw.com", href: "https://www.thecapitalbw.com" },
                { icon: <MapPin size={13} />, text: "Gaborone, Botswana", href: undefined },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-2.5">
                  <span className="text-[#A08C2A] flex-shrink-0">{c.icon}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-[13px] transition-colors hover:text-[#A08C2A]"
                      style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                    >
                      {c.text}
                    </a>
                  ) : (
                    <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {c.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            &copy; 2025 The Capital Media. All rights reserved.
          </p>
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            Founded by Chilo Ketlhoafetse · Est. 2020 · Gaborone, Botswana
          </p>
        </div>
      </div>
    </footer>
  );
}
