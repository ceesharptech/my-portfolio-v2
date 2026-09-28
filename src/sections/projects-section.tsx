import { ProjectCard } from "@/components/portfolio/project-card";
import { SectionIntro } from "@/components/portfolio/shared/section-intro";
import { usePortfolioTheme } from "@/components/portfolio/theme";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  const light = usePortfolioTheme() === "light";

  return (
    <section
      className="w-full scroll-mt-7.5 pb-26 max-[760px]:scroll-mt-19 max-[760px]:pb-19"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionIntro title="Projects">
        A selection of projects I’ve worked on, from client work to personal
        experiments.
      </SectionIntro>
      <div className="grid gap-14 max-[760px]:gap-14">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
