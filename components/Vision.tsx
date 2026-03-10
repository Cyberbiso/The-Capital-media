import FadeUp from "./FadeUp";

const cards = [
  {
    num: "01",
    title: "TV & Conferences",
    img: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800&q=80",
    alt: "TV and conference expansion",
  },
  {
    num: "02",
    title: "Digital Expansion Across Africa",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    alt: "Digital expansion across Africa",
  },
];

export default function Vision() {
  return (
    <section className="py-16 md:py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="mb-10">
            <div className="text-[13px] font-500 text-[#A08C2A] uppercase tracking-widest mb-2">
              Future Vision
            </div>
            <h2 className="text-[26px] font-600 text-[#1F1F1F] mb-3">Where we&apos;re heading</h2>
            <p className="text-[15px] text-[#6B6B6B] max-w-[520px]">
              Becoming the leading African platform for economic and business dialogue — positioning
              The Capital Media as the trusted voice on economic issues affecting Botswana and the
              broader African continent.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <FadeUp key={c.num} delay={i * 80}>
              <div className="relative rounded-[20px] overflow-hidden cursor-pointer group img-scale">
                <img
                  src={c.img}
                  alt={c.alt}
                  className="w-full aspect-[16/10] object-cover block"
                  style={{ filter: "grayscale(15%)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-transparent" />
                <div className="absolute top-0 left-0 p-6">
                  <div className="text-[40px] font-700 leading-none" style={{ color: "rgba(255,255,255,0.25)" }}>
                    {c.num}
                  </div>
                  <div className="text-[18px] font-600 text-white mt-1">{c.title}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
