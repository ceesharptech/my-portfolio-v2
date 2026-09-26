import { AboutCollage } from "@/components/portfolio/about-collage";
import { SectionIntro } from "@/components/portfolio/shared/section-intro";
import { usePortfolioTheme } from "@/components/portfolio/theme";

export function AboutSection() {
  const light = usePortfolioTheme() === "light";

  return (
    <section
      className="w-full pb-34 max-[760px]:pb-26"
      id="about"
      aria-labelledby="about-title"
    >
      <SectionIntro title="About" spacing="mb-4" />
      <div className="mb-17 grid grid-cols-2 gap-15 max-[760px]:mb-10.5 max-[760px]:grid-cols-1 max-[760px]:gap-5">
        <div>
          <p
            className={`m-0 mb-1 text-base leading-normal ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
          >
            Hello — I’m Eniola.
          </p>
          <p
            className={`m-0 text-base leading-normal ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
          >
            I work at the intersection of design, technology, and
            problem-solving. My focus is on building digital products that feel
            intuitive, considered, and easy to use.
          </p>
        </div>
        <div>
          <p
            className={`m-0 text-base leading-normal ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
          >
            Outside of work, I’m always exploring new ideas, learning a tool, or
            finding inspiration in the small details of everyday life.
          </p>
        </div>
      </div>
      <AboutCollage />
    </section>
  );
}
