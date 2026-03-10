import FadeUp from "./FadeUp";

const specialties = [
  {
    num: "1.",
    title: "Economic Analysis & Market Reports",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80",
    alt: "Economic analysis and market reports",
  },
  {
    num: "2.",
    title: "Sponsored Economic Forums & Panels",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",
    alt: "Sponsored economic forums",
  },
  {
    num: "3.",
    title: "Broadcast & Digital Content Production",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80",
    alt: "Broadcast and digital content",
  },
];

export default function Specialties() {
  return (
    <section className="py-16 md:py-20 px-5 bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="text-center mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              Services
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F] mb-3">These are our specialties</h2>
            <p className="text-[15px] text-[#6B6B6B] max-w-[440px] mx-auto">
              Our portfolio of media and knowledge services spans broadcast, events, research, and
              digital content.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {specialties.map((s, i) => (
            <FadeUp key={s.num} delay={i * 70}>
              <div className="relative rounded-[20px] overflow-hidden cursor-pointer group img-scale h-[420px]">
                <img src={s.img} alt={s.alt} className="w-full h-full object-cover block" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[17px] font-600 text-white leading-snug">
                    {s.num} {s.title}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
