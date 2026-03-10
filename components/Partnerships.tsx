import FadeUp from "./FadeUp";

const partnerships = [
  {
    num: "01",
    title: "Sponsored Economic Forums",
    body: "Partner with The Capital Media to host branded economic dialogues, budget analysis panels, and industry-specific discussions that position your organization as a thought leader in Botswana's business landscape.",
  },
  {
    num: "02",
    title: "Research Collaborations",
    body: "Joint research initiatives on economic trends, market analysis, and policy impact assessments. Collaborate on white papers, economic reports, and data-driven insights that inform business and policy decisions.",
  },
  {
    num: "03",
    title: "Educational Initiatives",
    body: "Support financial literacy programs, entrepreneurship workshops, and student engagement activities. Partner on training sessions that build economic understanding across Botswana's emerging business community.",
  },
  {
    num: "04",
    title: "Media Partnerships",
    body: "Cross-platform content collaborations, sponsored segments, and co-branded productions. Leverage The Capital Media's broadcast, digital, and event presence to amplify your message to key economic stakeholders.",
  },
];

export default function Partnerships() {
  return (
    <section id="partnerships" className="py-16 md:py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              Collaborate
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F] mb-3">Partnerships and Collaboration</h2>
            <p className="text-[15px] text-[#6B6B6B] max-w-[520px]">
              Partner with The Capital Media to position your organization at the forefront of
              Botswana&apos;s economic conversation. We offer four distinct collaboration models.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {partnerships.map((p, i) => (
            <FadeUp key={p.num} delay={i * 60}>
              <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow p-6 flex gap-5 items-start h-full">
                <div className="text-[42px] font-700 text-[#E5E5E5] leading-none min-w-[52px] tabular-nums">
                  {p.num}
                </div>
                <div>
                  <h3 className="text-[17px] font-600 text-[#1F1F1F] mb-2">{p.title}</h3>
                  <p className="text-[14px] text-[#6B6B6B] leading-relaxed">{p.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
