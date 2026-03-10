import { Radio, Building2, Tv, Award, Mic } from "lucide-react";
import FadeUp from "./FadeUp";

const mediaItems = [
  {
    img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    tag: "Radio",
    caption: "Gabz FM Budget Panel — Annual flagship analysis of Botswana's national budget",
  },
  {
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    tag: "Corporate",
    caption: "First Capital Bank Dialogue — Business leaders and policymakers in conversation",
  },
  {
    img: "https://images.pexels.com/photos/7865064/pexels-photo-7865064.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Television",
    caption: "Botswana Television — Regular economic commentary and market analysis",
  },
];

const channels = [
  { icon: <Radio size={16} />, title: "Gabz FM Budget Panel", sub: "Annual flagship economic analysis" },
  { icon: <Building2 size={16} />, title: "First Capital Bank Dialogue", sub: "Corporate economic discussions" },
  { icon: <Tv size={16} />, title: "Botswana Television", sub: "Regular market analysis appearances" },
  { icon: <Award size={16} />, title: "BICA International Conference", sub: "National and regional policy dialogue" },
];

export default function MediaPresence() {
  return (
    <section id="media" className="py-16 md:py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              Our Work
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F] mb-3">This is where you&apos;ve seen us</h2>
            <p className="text-[15px] text-[#6B6B6B] max-w-[540px]">
              The Capital Media maintains an active presence across Botswana&apos;s media landscape,
              engaging audiences through radio panels, televised discussions, and corporate dialogue
              sessions.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Media cards stack */}
          <div className="flex flex-col gap-4">
            {mediaItems.map((m, i) => (
              <FadeUp key={m.tag} delay={i * 80}>
                <div className="relative rounded-[20px] overflow-hidden cursor-pointer group img-scale">
                  <img
                    src={m.img}
                    alt={m.caption}
                    className="w-full aspect-video object-cover block"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                    <span className="inline-block bg-[#8E7C24] text-white text-[11px] font-600 px-3 py-0.5 rounded-full uppercase tracking-wider mb-2">
                      {m.tag}
                    </span>
                    <div className="text-white text-[13px] font-500">{m.caption}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Channel list + CTA */}
          <div className="flex flex-col gap-4">
            <FadeUp delay={50}>
              <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-6">
                <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
                  Media Reach
                </div>
                <h3 className="text-[20px] font-600 text-[#1F1F1F] mb-3">
                  Multi-Channel Economic Engagement
                </h3>
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed mb-5">
                  From live budget analysis on Gabz FM to corporate dialogues with First Capital
                  Bank and regular appearances on Botswana Television, we bring economic
                  conversations to where they matter most.
                </p>
                <div className="flex flex-col gap-0 divide-y divide-[#E5E5E5]">
                  {channels.map((c) => (
                    <div key={c.title} className="flex items-center gap-3 py-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[#A08C2A]"
                        style={{ background: "rgba(160,140,42,0.1)" }}
                      >
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-[14px] font-600 text-[#1F1F1F]">{c.title}</div>
                        <div className="text-[12px] text-[#6B6B6B]">{c.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#8E7C24] hover:bg-[#7A6A1F] text-white font-600 py-4 rounded-full transition-all hover:-translate-y-px"
              >
                <Mic size={16} />
                Book a Speaking Engagement
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
