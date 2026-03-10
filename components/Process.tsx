"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "1",
    title: "Initial Consultation",
    body: "At the beginning of our collaboration, we clarify your objectives, target audience, and partnership scope. We explore how The Capital Media's reach and editorial expertise can best serve your communication goals.",
  },
  {
    num: "2",
    title: "Strategy Creation",
    body: "We develop a customized content and engagement strategy covering channel selection, topics, formats, and audience targeting — from sponsored radio segments to executive roundtables and digital content.",
  },
  {
    num: "3",
    title: "Production & Execution",
    body: "Our editorial team produces high-quality content and manages all logistics for events, broadcasts, and publications. You receive a professional, well-coordinated experience that elevates your brand among key economic stakeholders.",
  },
  {
    num: "4",
    title: "Delivery & Reporting",
    body: "At the conclusion of our engagement, we provide full documentation and analytics of reach and impact, advising on how to leverage the content and conversations to achieve continued business results.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const cardEls = sectionRef.current?.querySelectorAll("[data-step]");
    if (!cardEls) return;

    cardEls.forEach((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.unobserve(el);
          }
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Animate the timeline line height based on which steps are visible
  useEffect(() => {
    const lastVisible = visibleSteps.lastIndexOf(true);
    if (lastVisible < 0) {
      setLineHeight(0);
    } else {
      setLineHeight(((lastVisible + 1) / steps.length) * 100);
    }
  }, [visibleSteps]);

  return (
    <section className="py-16 md:py-20 px-5 bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
            Process
          </div>
          <h2 className="text-[26px] font-600 text-[#1F1F1F] mb-3">
            This is how a collaboration with us works
          </h2>
          <p className="text-[15px] text-[#6B6B6B] max-w-[500px]">
            Our structured approach ensures every partnership delivers maximum impact and
            measurable outcomes for your organization.
          </p>
        </div>

        {/* Animated Steps */}
        <div className="flex flex-col relative" ref={sectionRef}>
          {/* Animated vertical timeline line */}
          <div
            className="absolute left-[19px] top-[6px] w-0.5 transition-all duration-1000 ease-out"
            style={{
              height: `${lineHeight}%`,
              background: "linear-gradient(to bottom, #A08C2A, #C5A55A)",
            }}
          />

          {steps.map((step, i) => {
            const isVisible = visibleSteps[i];
            const isLast = i === steps.length - 1;

            return (
              <div
                key={step.num}
                data-step={i}
                className="flex gap-5 items-start"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(40px) scale(0.96)",
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                }}
              >
                {/* Timeline column */}
                <div className="flex flex-col items-center min-w-[40px]">
                  <div
                    className="w-3 h-3 rounded-sm flex-shrink-0 mt-[6px] transition-all duration-500"
                    style={{
                      transform: isVisible ? "rotate(45deg) scale(1)" : "rotate(0deg) scale(0)",
                      background: isVisible
                        ? "#A08C2A"
                        : "transparent",
                      boxShadow: isVisible
                        ? "0 0 8px 2px rgba(160,140,42,0.4)"
                        : "none",
                      transitionDelay: `${i * 0.15}s`,
                    }}
                  />
                  {!isLast && (
                    <div
                      className="w-0.5 flex-1 min-h-[32px]"
                      style={{
                        background: "rgba(160,140,42,0.15)",
                        marginTop: 4,
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 mb-5">
                  <div
                    className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow p-6 relative overflow-hidden group"
                    style={{
                      borderLeft: isVisible
                        ? "3px solid rgba(160,140,42,0.3)"
                        : "3px solid transparent",
                      transition: "border-color 0.5s ease, box-shadow 0.3s ease",
                      transitionDelay: `${i * 0.15}s`,
                    }}
                  >
                    {/* Large background step number */}
                    <div
                      className="absolute top-0 right-4 text-[64px] font-700 leading-none select-none pointer-events-none transition-all duration-700"
                      style={{
                        color: isVisible
                          ? "rgba(160,140,42,0.10)"
                          : "rgba(160,140,42,0)",
                        transform: isVisible
                          ? "translateX(0)"
                          : "translateX(20px)",
                        transitionDelay: `${i * 0.15 + 0.2}s`,
                      }}
                    >
                      {step.num}
                    </div>

                    {/* Step number badge */}
                    <div
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[12px] font-700 mb-3 transition-all duration-500"
                      style={{
                        background: isVisible
                          ? "rgba(160,140,42,0.12)"
                          : "transparent",
                        color: "#A08C2A",
                        transform: isVisible
                          ? "scale(1)"
                          : "scale(0)",
                        transitionDelay: `${i * 0.15 + 0.1}s`,
                      }}
                    >
                      {step.num}
                    </div>

                    <h3 className="text-[18px] font-600 text-[#1F1F1F] mb-3 relative">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#6B6B6B] leading-relaxed relative">
                      {step.body}
                    </p>

                    {/* Animated bottom accent bar */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] transition-all duration-700 ease-out"
                      style={{
                        width: isVisible ? "100%" : "0%",
                        background: "linear-gradient(to right, #A08C2A, transparent)",
                        transitionDelay: `${i * 0.15 + 0.3}s`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
