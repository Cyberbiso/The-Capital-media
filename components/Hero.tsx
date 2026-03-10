import { Play } from "lucide-react";
import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section className="pt-14 pb-4 px-5 md:pt-20">
      <div className="max-w-[740px] mx-auto">
        <FadeUp>
          {/* Headline */}
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-600 leading-[1.2] text-[#1A1A1A] text-center mb-5">
            Your Trusted Source for Economic Analysis and Business Dialogue
          </h1>

          {/* Subtext */}
          <p className="text-[15px] md:text-[16px] text-[#6B6B6B] leading-relaxed text-center mb-9 max-w-[520px] mx-auto">
            We help corporations, policymakers, and entrepreneurs stand out with credible economic
            analysis, strategic media presence, and impactful business dialogues, reliably building
            trust and attracting the right stakeholders despite market uncertainty.
          </p>

          {/* Single CTA */}
          <div className="flex justify-center mb-10">
            <a
              href="mailto:ctketlhoafetse@gmail.com?subject=Initial%20Consultation%20Request"
              className="inline-flex items-center bg-[#8E7C24] hover:bg-[#7A6A1F] text-white text-[13px] font-600 tracking-[0.08em] uppercase px-8 py-3.5 rounded-full transition-all hover:-translate-y-px"
            >
              Arrange an Initial Consultation
            </a>
          </div>
        </FadeUp>

        {/* Video thumbnail */}
        <FadeUp delay={100}>
          <div className="relative rounded-[16px] overflow-hidden cursor-pointer group img-scale aspect-video bg-[#1A1A1A]">
            <img
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80"
              alt="The Capital Media — economic broadcast and dialogue"
              className="w-full h-full object-cover opacity-90"
            />
            {/* subtle dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-200 border-2 border-white/80 bg-white/10 backdrop-blur-sm">
                <Play size={18} className="text-white" style={{ marginLeft: 2 }} />
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-[12px] tracking-widest uppercase text-center pointer-events-none select-none">
              The Capital Media · Est. 2020
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
