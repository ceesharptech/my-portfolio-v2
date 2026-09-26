"use client";

import { useEffect, useState } from "react";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { IntroSection } from "@/sections/intro-section";
import { PortfolioFooter } from "@/sections/portfolio-footer";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { navigation } from "@/data/portfolio";
import { DesktopSidebar, MobileNavigation } from "./navigation";
import { ThemeProvider, type Theme } from "./theme";

export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = ["intro", ...navigation.map(({ id }) => id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const currentSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (currentSection) {
          setActiveSection(currentSection.target.id);
        }
      },
      {
        rootMargin: "-14% 0px -68% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function closeMenuOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeMenuOnEscape);
    return () => window.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  function toggleMenu() {
    setMenuOpen((isOpen) => !isOpen);
  }

  function toggleSkillFolder(id: string) {
    setOpenFolder((currentFolder) => (currentFolder === id ? null : id));
  }

  return (
    <ThemeProvider value={theme}>
      <div
        className={`min-h-screen font-sans transition-colors duration-300 ${theme === "light" ? "bg-[#f3f3f1] text-[#171719]" : "bg-portfolio-bg text-portfolio-fg"}`}
        data-theme={theme}
      >
        <DesktopSidebar
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <MobileNavigation
          open={menuOpen}
          onToggleOpen={toggleMenu}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <main className="ml-0 flex min-h-screen justify-center min-[1100px]:ml-[270px] min-[1101px]:ml-[clamp(280px,19vw,366px)]">
          <div className="w-[calc(100%-128px)] max-w-[1000px] max-[760px]:w-[calc(100%-38px)] max-[760px]:max-w-[520px] max-[390px]:w-[calc(100%-36px)]">
            <IntroSection />
            <ProjectsSection />
            {/* <AboutSection /> */}
            <SkillsSection
              openFolder={openFolder}
              onToggleFolder={toggleSkillFolder}
            />
            {/* <ExperienceSection /> */}
            {/* <TestimonialsSection /> */}
            <ContactSection />
            <PortfolioFooter />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
