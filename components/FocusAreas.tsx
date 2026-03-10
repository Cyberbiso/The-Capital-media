import FadeUp from "./FadeUp";

const areas = [
  {
    num: "01",
    title: "Financial Markets",
    body: "Capital markets analysis, stock exchange coverage, investment trends, and market insights for informed decision-making across Botswana and the region.",
  },
  {
    num: "02",
    title: "Economic Policy",
    body: "Fiscal policy analysis, budget reviews, economic reforms, and policy developments shaping Botswana's economic landscape and national priorities.",
  },
  {
    num: "03",
    title: "Entrepreneurship",
    body: "SME development, business strategy, access to capital, and resources supporting business growth and innovation across Botswana's emerging business community.",
  },
  {
    num: "04",
    title: "Regional Integration",
    body: "AfCFTA implementation, cross-border trade opportunities, and African economic cooperation driving continental growth and shared prosperity.",
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="py-16 md:py-20 px-5 bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="text-center mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              What We Cover
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F] mb-3">Areas of Focus</h2>
            <p className="text-[15px] text-[#6B6B6B] max-w-[480px] mx-auto">
              We cover the full spectrum of economic and financial topics shaping Botswana&apos;s
              business landscape and Africa&apos;s growth trajectory.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((a, i) => (
            <FadeUp key={a.num} delay={i * 60}>
              <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow p-6 flex gap-5 items-start h-full">
                <div className="text-[42px] font-700 text-[#E5E5E5] leading-none min-w-[52px] tabular-nums">
                  {a.num}
                </div>
                <div>
                  <h3 className="text-[18px] font-600 text-[#1F1F1F] mb-2">{a.title}</h3>
                  <p className="text-[14px] text-[#6B6B6B] leading-relaxed">{a.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
