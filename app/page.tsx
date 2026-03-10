import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import MediaPresence from "@/components/MediaPresence";
import Process from "@/components/Process";
import Audience from "@/components/Audience";
import Challenges from "@/components/Challenges";
import Founder from "@/components/Founder";
import Specialties from "@/components/Specialties";
import Partnerships from "@/components/Partnerships";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CaseStudy from "@/components/CaseStudy";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#F4F4F4" }}>
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <MediaPresence />
      <Process />
      <Audience />
      <Challenges />
      <Founder />
      <Specialties />
      <Partnerships />
      <Testimonials />
      <FAQ />
      <CaseStudy />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}
