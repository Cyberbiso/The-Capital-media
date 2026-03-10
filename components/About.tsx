import { MapPin, Calendar, Globe, Award } from "lucide-react";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <FadeUp>
            <div className="rounded-[16px] overflow-hidden aspect-[16/10] img-scale">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
                alt="Botswana financial district"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={100}>
            <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-8 h-full flex flex-col gap-4">
              <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest">
                About The Capital Media
              </div>
              <h2 className="text-[26px] font-600 text-[#1F1F1F] leading-snug">
                Botswana&apos;s Hub for Economic Intelligence
              </h2>
              <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
                The Capital Media is a Botswana-based media and knowledge platform dedicated to
                economic analysis, business dialogue, financial markets coverage, and
                entrepreneurship development. Through multi-channel content delivery — broadcast,
                public forums, publications, and digital platforms — we expand public access to
                economic information and informed dialogue with decision makers.
              </p>
              <p className="text-[15px] text-[#6B6B6B] leading-relaxed">
                Our mission is to promote market access, support entrepreneurship, and facilitate
                meaningful business-policy conversations. We connect stakeholders across public and
                private sectors, fostering economic participation throughout Botswana and Africa.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  { icon: <MapPin size={12} />, label: "Gaborone, Botswana" },
                  { icon: <Calendar size={12} />, label: "Est. 2020" },
                  { icon: <Globe size={12} />, label: "www.thecapitalbw.com" },
                  { icon: <Award size={12} />, label: "Founded by Chilo Ketlhoafetse" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 bg-[#8E7C24]/08 border border-[#A08C2A]/20 text-[#A08C2A] rounded-full px-3 py-1 text-[13px] font-500"
                    style={{ background: "rgba(160,140,42,0.08)" }}
                  >
                    {tag.icon}
                    {tag.label}
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
