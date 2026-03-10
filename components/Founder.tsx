import { Award, GraduationCap, PenLine } from "lucide-react";
import FadeUp from "./FadeUp";

const credentials = [
  { icon: <Award size={12} />, label: "ACCA Member" },
  { icon: <Award size={12} />, label: "BICA Member" },
  { icon: <GraduationCap size={12} />, label: "MSc Finance, Univ. of Kent (UK)" },
  { icon: <PenLine size={12} />, label: "BSE Editorial Contributor" },
];

export default function Founder() {
  return (
    <section id="founder" className="py-16 md:py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 items-start">
          {/* Photo */}
          <FadeUp>
            <div className="rounded-[16px] overflow-hidden aspect-[4/5] img-scale">
              <img
                src="/chilo-founder.jpg"
                alt="Chilo Ketlhoafetse — Founder, The Capital Media"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>

          {/* Info */}
          <FadeUp delay={100}>
            <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-8 flex flex-col gap-4">
              <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest">
                Founder Profile
              </div>
              <div>
                <h2 className="text-[26px] font-600 text-[#1F1F1F]">Chilo Ketlhoafetse</h2>
                <div className="text-[13px] font-500 text-[#A08C2A] mt-1">
                  Chartered Certified Accountant · Finance Manager · Media Founder
                </div>
              </div>

              <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                Chilo Ketlhoafetse is a seasoned Chartered Certified Accountant with extensive
                experience in financial strategy, risk management, and economic analysis. As Finance
                Manager within the financial services industry, he provides strategic financial
                leadership ensuring sustainable growth and regulatory compliance.
              </p>
              <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                With a Master of Science in Finance &amp; Management from the University of Kent
                (UK), Chilo brings deep expertise in financial planning, risk assessment, and
                treasury management. He actively engages in discussions on economic policy, public
                finance, and energy transition, regularly contributing to Mmegi Online and The
                Business Weekly &amp; Review.
              </p>
              <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                As an editorial contributor to the Botswana Stock Exchange news magazine, Chilo
                leverages his knowledge in sustainable finance and financial markets to shape
                Botswana&apos;s financial services and regulation landscape.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {credentials.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-[13px] font-500 text-[#A08C2A]"
                    style={{
                      background: "rgba(160,140,42,0.08)",
                      borderColor: "rgba(160,140,42,0.20)",
                    }}
                  >
                    {c.icon}
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
