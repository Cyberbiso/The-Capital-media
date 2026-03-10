"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import FadeUp from "./FadeUp";

const faqs = [
  {
    q: "How does a partnership with The Capital Media work?",
    a: "We start with a free initial consultation to understand your objectives and explore how our platform can best serve your needs. From there, we design a tailored partnership — whether a sponsored segment, co-hosted forum, research collaboration, or media partnership — and manage the full process from strategy to delivery.",
  },
  {
    q: "What does it cost to partner with The Capital Media?",
    a: "Partnership costs vary based on the scope, channels, and duration of the engagement. We offer flexible models from single-event sponsorships to ongoing quarterly partnerships. We'll provide a detailed proposal with transparent pricing after our initial consultation based on your specific goals and budget.",
  },
  {
    q: "What audiences does The Capital Media reach?",
    a: "Our audience spans business leaders, corporate executives, investors, policymakers, academics, and entrepreneurs across Botswana and the broader Southern African region. Through Gabz FM, Botswana Television, digital platforms, and live events, we engage decision-makers who shape Botswana's economic future.",
  },
  {
    q: "Can The Capital Media produce research reports for our organization?",
    a: "Yes. We offer research collaboration services including co-produced economic reports, white papers, market analysis, and policy impact assessments. Our editorial team, led by Chilo Ketlhoafetse (ACCA, MSc Finance), brings rigorous analytical expertise to produce credible, evidence-based content.",
  },
  {
    q: "How does The Capital Media support entrepreneurship and SME development?",
    a: "We champion SME growth through strategic content, mentorship insights, and connecting entrepreneurs with resources and capital opportunities. This includes dedicated segments on our platforms, participation in entrepreneurship workshops, and facilitating connections between emerging businesses and key investors or mentors.",
  },
  {
    q: "Is The Capital Media focused only on Botswana?",
    a: "While Botswana is our home base and primary market, our vision is to become the leading African platform for economic and business dialogue. We actively cover AfCFTA developments, cross-border trade, and pan-African economic cooperation, with ambitions to expand across the continent through TV, conferences, and digital expansion.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 px-5">
      <div className="max-w-[720px] mx-auto">
        <FadeUp>
          <div className="text-center mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              FAQ
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F]">Frequently Asked Questions</h2>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] px-6 divide-y divide-[#E5E5E5]">
            {faqs.map((f, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent border-none cursor-pointer"
                >
                  <span className="text-[15px] font-600 text-[#1F1F1F] leading-snug">{f.q}</span>
                  <span
                    className="flex-shrink-0 text-[#A08C2A] transition-transform duration-300"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <Plus size={20} />
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-350 ease-in-out"
                  style={{ maxHeight: open === i ? 400 : 0 }}
                >
                  <p className="text-[14px] text-[#6B6B6B] leading-relaxed pb-5">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
