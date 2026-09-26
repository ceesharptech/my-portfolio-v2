import {
  _React,
  GitIcon,
  NextjsIcon,
  TailwindIcon,
  TypescriptIcon,
    Python,
    Postgresql,
    NodejsIcon,
    Groq,
    ExpoIcon,
} from "@dev.icons/react";
import { usePortfolioTheme } from "../theme";
import type { TechnologyName } from "@/data/portfolio";

const technologyIcons = {
  TypeScript: TypescriptIcon,
  React: _React,
  "Next.js": NextjsIcon,
  "Tailwind CSS": TailwindIcon,
  Git: GitIcon,
  Python: Python,
  Postgresql: Postgresql,
  "Node.js": NodejsIcon,
  Groq: Groq,
  Expo: ExpoIcon,
};

type TechnologyBadgeProps = {
  name: TechnologyName;
};

export function TechnologyBadge({ name }: TechnologyBadgeProps) {
  const light = usePortfolioTheme() === "light";
  const Icon = technologyIcons[name];

  return (
    <span
      className={`inline-flex items-center gap-1.75 rounded-full border px-2.5 py-1.75 text-[13px] transition hover:-translate-y-0.5 ${light ? "border-[#dededc] bg-white text-[#56565b] hover:bg-[#e6e6e4] hover:text-portfolio-sidebar" : "border-portfolio-line bg-portfolio-surface text-portfolio-dim hover:bg-portfolio-raised hover:text-portfolio-fg"}`}
    >
      <Icon size={17} aria-hidden="true" />
      {name}
    </span>
  );
}
