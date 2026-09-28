"use client";

import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { usePortfolioTheme } from "./theme";
import { TechnologyBadge } from "./shared/technology-badge";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const light = usePortfolioTheme() === "light";
  const imageLinkRef = useRef<HTMLAnchorElement>(null);
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showKitchenMessage, setShowKitchenMessage] = useState(false);

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    };
  }, []);

  function handleImageClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!project.isInDevelopment) return;

    event.preventDefault();
    imageLinkRef.current?.getAnimations().forEach((animation) => animation.cancel());
    imageLinkRef.current?.animate(
      [
        { transform: "translateX(0) rotate(0deg)" },
        { transform: "translateX(-4px) rotate(-1deg)" },
        { transform: "translateX(4px) rotate(1deg)" },
        { transform: "translateX(-3px) rotate(-0.7deg)" },
        { transform: "translateX(3px) rotate(0.7deg)" },
        { transform: "translateX(0) rotate(0deg)" },
      ],
      { duration: 430, easing: "ease-in-out" },
    );
    setShowKitchenMessage(true);
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = setTimeout(() => {
      setShowKitchenMessage(false);
      feedbackTimeoutRef.current = null;
    }, 1900);
  }

  return (
    <article className="min-w-0">
      <a
        ref={imageLinkRef}
        className="group relative mb-2 flex w-fit items-start overflow-hidden rounded-[11px] shadow-md max-[760px]:items-center"
        href={project.link || "#"}
        aria-label={project.isInDevelopment ? `${project.name}, project in development` : `${project.name} project`}
        onClick={handleImageClick}
      >
        <span className="aspect-video rounded-xl transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04] group-hover:bg-black/35">
          <Image
            src={`/images/project-${project.id}.png`}
            alt={`Project image for ${project.name}`}
            width={900}
            height={900}
            className="rounded-xl object-cover"
          />
        </span>
        {project.isInDevelopment && (
          <span
            role="status"
            aria-live="polite"
            aria-hidden={!showKitchenMessage}
            className={`pointer-events-none absolute inset-0 z-10 grid place-items-center rounded-xl bg-black/65 px-5 text-center text-sm font-medium text-white transition-opacity duration-200 ${showKitchenMessage ? "opacity-100" : "opacity-0"}`}
          >
            Oops, this project is still in the kitchen
          </span>
        )}
      </a>

      <div className="pt-4.5 max-[760px]:pt-3.5">
        <div className="flex max-w-full items-center gap-3">
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
          {project.github && (
            <a
              className={`shrink-0 transition-colors ${light ? "text-[#77777d] hover:text-[#171719]" : "text-portfolio-dim hover:text-portfolio-fg"}`}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              title={`${project.name} on GitHub`}
            >
              <GithubLogo size={19} aria-hidden="true" />
            </a>
          )}
        </div>
        <p className={`mb-0 mt-0.75 text-sm ${light ? "text-[#77777d]" : "text-portfolio-muted"}`}>
          {project.type}
        </p>
        <p className={`mb-0 mt-2 max-w-145 text-base leading-[1.45] ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}>
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
