"use client";

import { Mail, Phone } from "lucide-react";
import FadeUp from "./FadeUp";

export default function CTA() {
  return (
    <section id="contact" className="py-10 px-5 pb-16">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div
            className="rounded-[20px] text-center px-8 py-16 md:py-20"
            style={{ background: "#2A2A2A" }}
          >
            <div
              className="text-[13px] font-500 uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Get Started
            </div>
            <h2
              className="text-[26px] md:text-[32px] font-600 leading-snug mb-4"
              style={{ color: "white" }}
            >
              Ready to amplify your economic voice?
            </h2>
            <p
              className="text-[16px] leading-relaxed mb-10 max-w-[520px] mx-auto"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Join Botswana&apos;s most credible economic media platform. Whether you&apos;re a
              corporation, policymaker, or entrepreneur — there&apos;s a partnership model built for
              you.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:ctketlhoafetse@gmail.com?subject=Free%20Consultation%20Request"
                className="inline-flex items-center gap-2 bg-[#8E7C24] hover:bg-[#7A6A1F] text-white font-600 text-[15px] px-8 py-4 rounded-full transition-all hover:-translate-y-px cursor-pointer"
              >
                <Mail size={16} />
                Arrange a Free Consultation
              </a>
              <a
                href="tel:+26771234567"
                className="inline-flex items-center gap-2 font-600 text-[15px] px-8 py-4 rounded-full transition-all hover:-translate-y-px cursor-pointer border"
                style={{
                  borderColor: "rgba(255,255,255,0.25)",
                  color: "white",
                  background: "transparent",
                }}
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
