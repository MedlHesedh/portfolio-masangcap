import { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutMeCard from "./components/AboutMeCard";
import { ProjectsSection } from "./components/ProjectCard";
import SkillsGrid from "./components/SkillsGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactForm from "./components/ContactForm";
import FooterNav from "./components/FooterNav";

export const metadata: Metadata = {
  title: "Medl Hesedh Masangcap | Full Stack Developer & Project Manager",
  description:
    "Portfolio of Medl Hesedh Masangcap - Full Stack Developer and Project Manager specializing in web development and construction project management.",
  keywords: [
    "Full Stack Developer",
    "Project Manager",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <HeroBanner />
        <AboutMeCard />
        <SkillsGrid />
        <ProjectsSection />
        <ExperienceTimeline />
        <ContactForm />
      </main>
      <FooterNav />
    </div>
  );
}
