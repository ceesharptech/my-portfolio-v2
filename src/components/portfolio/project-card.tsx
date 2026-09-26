import { ArrowUpRight, ImageSquare } from "@phosphor-icons/react";
import { usePortfolioTheme } from "./theme";
import { TechnologyBadge } from "./shared/technology-badge";
import type { Project } from "@/data/portfolio";
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
  index: number;
};

const projectToneClasses = {
  mint: "bg-[linear-gradient(125deg,#d9e1d8,#e7e7dc_45%,#72aaa6)]",
  blue: "bg-[linear-gradient(135deg,#514ff0,#7379fa_52%,#acb6ff)]",
  sand: "bg-[linear-gradient(135deg,#d9c4aa,#eddbbb_47%,#738f86)]",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const light = usePortfolioTheme() === "light";

  return (
    <article className="min-w-0">
      <a
      //  className={`group relative p-2 isolate grid aspect-video place-items-center max-[760px]:place-items-start overflow-hidden rounded-[11px] hover:rounded-[20px] max-[760px]:aspect-4/2.5 ${projectToneClasses[project.tone]} transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]`}
        className={`group relative flex w-fit shadow-md items-start max-[760px]:items-center overflow-hidden rounded-[11px] mb-2`}
        href={project.link || "#"}
        aria-label={`Replace with the ${project.name.toLowerCase()} project image`}
      >
        <span className="rounded-xl transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04] group-hover:bg-black/35">
          <Image
            src={`/images/project-${project.id}.png`} 
            alt={`Project image for ${project.name}`}
            width={900}
            height={900}
            className="rounded-xl object-cover"
          />
        </span>
      </a>

      <div className="pt-4.5 max-[760px]:pt-3.5">
        <a
          className={`group/title flex w-max max-w-full items-center gap-2 transition ${light ? "text-portfolio-sidebar" : "text-portfolio-fg"}`}
          href={project.link || "#"}
        >
          <h3 className="m-0 text-[17px] font-semibold tracking-tight max-[760px]:text-base">
            {project.name}
          </h3>
          <ArrowUpRight
            className="text-portfolio-dim transition-transform group-hover/title:translate-x-0.75 group-hover/title:-translate-y-0.75"
            size={18}
          />
        </a>
        <p className={`mb-0 mt-0.75 text-sm ${light ? "text-[#77777d]" : "text-portfolio-muted"}`}>
          {project.type}
        </p>
        <p
          className={`mb-0 mt-2 max-w-145 text-base leading-[1.45] ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
        >
          {project.description}
        </p>
        <div className="mt-3.5 flex flex-wrap gap-2">
          {project.technologies.map((name) => (
            <TechnologyBadge key={name} name={name} />
          ))}
        </div>
      </div>
    </article>
  );
}
