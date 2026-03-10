import { Play } from "lucide-react";
import FadeUp from "./FadeUp";

const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    name: "Kabelo Mogorosi",
    role: "Chief Executive, Botswana Investment Fund",
    quote:
      '"Partnering with The Capital Media gave us unparalleled access to Botswana\'s economic decision-makers. The Belief Budget Dialogue we co-hosted generated genuine policy conversations that extended well beyond the event itself. Chilo and the team bring intellectual rigor and genuine passion to every engagement."',
    sub: "Starting Position",
    subText:
      "We needed a credible platform to engage economists, business leaders, and policymakers simultaneously during the annual budget review period.",
  },
  {
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    name: "Dr. Thato Sebina",
    role: "Economist & Policy Researcher, UB",
    quote:
      '"The Capital Media has built something rare — a platform where rigorous economic analysis meets accessible, engaging media. Their coverage of Botswana\'s fiscal policy has shaped the way both citizens and decision-makers understand our economic challenges and opportunities."',
    sub: "Research Impact",
    subText:
      "Our collaborative research on financial inclusion reached over 50,000 citizens through The Capital Media's broadcast and digital channels.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 px-5 bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="text-center mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              Testimonials
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F]">
              A small excerpt from our partner testimonials
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 80}>
              <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-6 flex flex-col gap-5 h-full">
                {/* Video thumb */}
                <div className="relative rounded-[12px] overflow-hidden cursor-pointer group img-scale">
                  <img
                    src={t.img}
                    alt={`Testimonial from ${t.name}`}
                    className="w-full aspect-video object-cover block"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-11 h-11 bg-white/95 rounded-full flex items-center justify-center text-[#A08C2A] shadow-md group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(160,140,42,0.4)] transition-all duration-200">
                      <Play size={16} style={{ marginLeft: 2 }} />
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#E5E5E5]"
                  />
                  <div>
                    <div className="text-[15px] font-600 text-[#1F1F1F]">{t.name}</div>
                    <div className="text-[12px] font-600 text-[#A08C2A] uppercase tracking-wider">
                      {t.role}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed italic border-l-[3px] border-[#A08C2A] pl-4">
                  {t.quote}
                </p>

                {/* Sub info */}
                <div className="border-t border-[#E5E5E5] pt-4">
                  <div className="text-[12px] font-600 text-[#1F1F1F] mb-1">{t.sub}</div>
                  <p className="text-[13px] text-[#6B6B6B]">{t.subText}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
