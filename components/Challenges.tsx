import { BarChart2, Users, TrendingDown, Globe, MicOff, Lightbulb } from "lucide-react";
import FadeUp from "./FadeUp";

const challenges = [
  {
    icon: <BarChart2 size={22} />,
    title: "Limited Economic Visibility",
    body: "Your organization does important economic work but struggles to reach the right audiences — policymakers, investors, and informed citizens who could act on your insights.",
  },
  {
    icon: <Users size={22} />,
    title: "Disconnected Stakeholders",
    body: "The private sector and government operate in silos. Without a trusted neutral platform, constructive business-policy dialogue that could drive economic reform rarely happens.",
  },
  {
    icon: <TrendingDown size={22} />,
    title: "Financial Literacy Gaps",
    body: "Many citizens and emerging entrepreneurs lack access to quality economic education, limiting participation in Botswana's financial ecosystem and holding back growth potential.",
  },
  {
    icon: <Globe size={22} />,
    title: "Limited African Market Access",
    body: "Botswana businesses need regional intelligence to capitalize on AfCFTA opportunities, but reliable, Africa-focused economic analysis tailored to local context is scarce.",
  },
  {
    icon: <MicOff size={22} />,
    title: "Weak Thought Leadership",
    body: "Without consistent media presence, your organization misses opportunities to shape economic narratives, build credibility, and influence the decisions that affect your industry.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Untapped SME Potential",
    body: "Small and medium enterprises often have the ideas but lack the networks, funding connections, and strategic guidance needed to scale effectively within Botswana's economy.",
  },
];

export default function Challenges() {
  return (
    <section className="py-16 md:py-20 px-5 bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="text-center mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              The Problem We Solve
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F]">
              Do these challenges sound familiar?
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {challenges.map((c, i) => (
            <FadeUp key={c.title} delay={i * 50}>
              <div className="bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow p-7 text-center h-full flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#A08C2A] border"
                  style={{
                    background: "rgba(160,140,42,0.08)",
                    borderColor: "rgba(160,140,42,0.22)",
                  }}
                >
                  {c.icon}
                </div>
                <h3 className="text-[16px] font-600 text-[#1F1F1F] mb-2">{c.title}</h3>
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed">{c.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
