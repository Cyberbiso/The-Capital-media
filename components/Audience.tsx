import FadeUp from "./FadeUp";

const audiences = [
  {
    num: "01",
    label: "Business Leaders & Investors",
    title: "Corporations & Investment Firms",
    body: "Gain visibility among Botswana's key economic decision-makers. Sponsoring Capital Media content positions your organization as a thought leader while reaching high-net-worth investors and corporate executives.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80",
    alt: "Business leaders and investors",
  },
  {
    num: "02",
    label: "Policymakers & Academics",
    title: "Government & Research Institutions",
    body: "Shape public economic discourse. Partner with The Capital Media to host evidence-based policy dialogues, share research findings, and contribute to the national conversation on fiscal policy and economic reform.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80",
    alt: "Policymakers and academics",
  },
  {
    num: "03",
    label: "SMEs & Entrepreneurs",
    title: "Growing Businesses & Startups",
    body: "Access mentorship, market insights, and a platform that champions SME growth. We connect emerging entrepreneurs with resources, capital opportunities, and a community invested in Botswana's economic future.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80",
    alt: "SMEs and entrepreneurs",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="py-16 md:py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="text-center mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              Who We Serve
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F] mb-3">
              Who can benefit from collaborating with us?
            </h2>
            <p className="text-[15px] text-[#6B6B6B] max-w-[460px] mx-auto">
              The Capital Media connects diverse stakeholders across Botswana&apos;s public and private
              sectors.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((a, i) => (
            <FadeUp key={a.num} delay={i * 70}>
              <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow p-6 flex flex-col h-full">
                <div className="rounded-[12px] overflow-hidden aspect-[16/10] mb-5 img-scale">
                  <img src={a.img} alt={a.alt} className="w-full h-full object-cover" />
                </div>
                <div className="text-[12px] font-600 text-[#A08C2A] uppercase tracking-wider mb-1">
                  {a.num} · {a.label}
                </div>
                <h3 className="text-[17px] font-600 text-[#1F1F1F] mb-2">{a.title}</h3>
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed flex-1">{a.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
