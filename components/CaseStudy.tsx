import FadeUp from "./FadeUp";

export default function CaseStudy() {
  return (
    <section className="py-16 md:py-20 px-5 bg-[#F8F8F8]">
      <div className="max-w-[800px] mx-auto">
        <FadeUp>
          <div className="text-center mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              Track Record
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F]">
              Case Study: Gabz FM 2025 Budget Analysis
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] p-8 md:p-10">
            <div className="mb-6">
              <div className="text-[12px] font-600 text-[#A08C2A] uppercase tracking-wider mb-2">
                Starting Position
              </div>
              <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                Botswana citizens, businesses, and investors lacked a clear, accessible platform to
                receive expert, real-time analysis of the 2025 National Budget Speech and its
                implications for economic growth, business operations, and personal finance.
              </p>
            </div>

            <div className="h-px bg-[#E5E5E5] my-6" />

            <div className="mb-6">
              <div className="text-[12px] font-600 text-[#A08C2A] uppercase tracking-wider mb-2">
                Goal
              </div>
              <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                Create a flagship live panel on Gabz FM that would provide informed,
                multi-stakeholder commentary on the national budget — engaging economists, chartered
                accountants, and finance specialists simultaneously to give audiences a comprehensive
                economic picture.
              </p>
            </div>

            <div className="h-px bg-[#E5E5E5] my-6" />

            <div className="mb-8">
              <div className="text-[12px] font-600 text-[#A08C2A] uppercase tracking-wider mb-2">
                Solution
              </div>
              <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                The Capital Media assembled a distinguished panel including Chilo Ketlhoafetse
                (Finance Specialist &amp; Capital Media Founder), a Finance Ministry representative,
                and industry experts hosted by Swift Mpoloka and Borisang Mogojwe. The live
                broadcast reached thousands of listeners across Botswana, generating national
                conversation on fiscal policy and its business impact.
              </p>
            </div>

            <div className="h-px bg-[#E5E5E5] my-6" />

            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { val: "50K+", label: "Estimated listeners reached" },
                { val: "4", label: "Expert panelists featured" },
                { val: "Live", label: "Real-time budget coverage" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[28px] font-700 text-[#A08C2A] leading-none mb-1.5">
                    {s.val}
                  </div>
                  <div className="text-[12px] text-[#6B6B6B]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
