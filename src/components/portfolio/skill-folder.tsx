import {
  _React,
  GitIcon,
  NextjsIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@dev.icons/react";
import { usePortfolioTheme } from "./theme";
import type {
  DeveloperIconName,
  SkillFolderData,
} from "@/data/portfolio";

type DeveloperIconProps = {
  name: DeveloperIconName;
  size?: number;
};

const developerIcons = {
  typescript: TypescriptIcon,
  react: _React,
  nextjs: NextjsIcon,
  tailwindcss: TailwindIcon,
  git: GitIcon,
};

function DeveloperIcon({ name, size = 32 }: DeveloperIconProps) {
  const Icon = developerIcons[name];

  return <Icon size={size} aria-hidden="true" />;
}

type SkillFolderProps = {
  folder: SkillFolderData;
  open: boolean;
  onToggle: () => void;
};

const stackPositions = [1, 23, 42, 61, 75];
const stackPeekOffsets = [10, 5, 8, 4, 8];
const openedStackIconClasses = [
  "group-hover/envelope:-translate-x-4 group-hover/envelope:-translate-y-[130%] group-hover/envelope:-rotate-12 group-focus-visible/envelope:-translate-x-4 group-focus-visible/envelope:-translate-y-[130%] group-focus-visible/envelope:-rotate-12",
  "group-hover/envelope:-translate-x-4 group-hover/envelope:-translate-y-[145%] group-hover/envelope:-rotate-6 group-focus-visible/envelope:-translate-x-2 group-focus-visible/envelope:-translate-y-[145%] group-focus-visible/envelope:-rotate-6",
  "group-hover/envelope:-translate-y-[170%] group-hover/envelope:rotate-3 group-focus-visible/envelope:-translate-y-[155%] group-focus-visible/envelope:rotate-3",
  "group-hover/envelope:translate-x-2 group-hover/envelope:-translate-y-[145%] group-hover/envelope:rotate-[9deg] group-focus-visible/envelope:translate-x-2 group-focus-visible/envelope:-translate-y-[145%] group-focus-visible/envelope:rotate-[9deg]",
  "group-hover/envelope:translate-x-6 group-hover/envelope:-translate-y-[130%] group-hover/envelope:rotate-12 group-focus-visible/envelope:translate-x-4 group-focus-visible/envelope:-translate-y-[130%] group-focus-visible/envelope:rotate-12",
];

const expandedStackTransforms = [
  "-translate-x-10 -translate-y-[110%] -rotate-12",
  "-translate-x-8.5 -translate-y-[145%] -rotate-6",
  "-translate-y-[155%] -translate-x-4 rotate-3",
  "translate-x-0.5 -translate-y-[145%] rotate-[9deg]",
  "translate-x-4.5 -translate-y-[120%] rotate-12",
];

const openedFileCardClasses = [
  "left-[0%] origin-bottom-left -rotate-[7deg] group-hover/envelope:-translate-x-[8px] group-hover/envelope:-translate-y-[58%] group-hover/envelope:-rotate-[8deg] group-focus-visible/envelope:-translate-x-[28px] group-focus-visible/envelope:-translate-y-[58%] group-focus-visible/envelope:-rotate-[8deg]",
  "right-[0%] origin-bottom-right rotate-[6deg] group-hover/envelope:translate-x-[8px] group-hover/envelope:-translate-y-[58%] group-hover/envelope:rotate-[8deg] group-focus-visible/envelope:translate-x-[28px] group-focus-visible/envelope:-translate-y-[68%] group-focus-visible/envelope:rotate-[8deg]",
];

export function SkillFolder({ folder, open, onToggle }: SkillFolderProps) {
  const light = usePortfolioTheme() === "light";
  const isStack = folder.id === "stack";

  return (
    <div
      className={`relative h-125 overflow-hidden rounded-2xl border p-0 max-[1100px]:h-110 max-[800px]:h-90 max-[760px]:h-90 ${light ? "border-[#dededc] bg-[#f9f9f9]" : "border-portfolio-line bg-portfolio-surface"}`}
    >
      <button
        className="group/envelope [perspective:900px] absolute bottom-[19%] left-1/2 z-10 h-[55%] w-[62%] max-[760px]:w-[62%] max-[800px]:w-[65%] -translate-x-1/2 cursor-pointer border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-portfolio-blue"
        type="button"
        aria-label={`${folder.title} folder, ${folder.count}`}
        aria-expanded={open}
        aria-describedby={`${folder.id}-description`}
        onClick={onToggle}
      >
        <span
          className="absolute inset-0 [transform-style:preserve-3d]"
        >
          {isStack ? (
            <span className="absolute inset-0" aria-hidden="true">
              {folder.files.map((file, index) => (
                <span
                  key={file.name}
                  className={`absolute z-10 grid size-12 place-items-center transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] max-[760px]:size-12 ${openedStackIconClasses[index]} ${open ? `opacity-100 ${expandedStackTransforms[index] ?? ""}` : "translate-y-5 opacity-100 scale-[.88]"}`}
                  style={{
                    left: `${stackPositions[index] ?? 0}%`,
                    top: `${stackPeekOffsets[index] ?? 10}%`,
                    transitionDelay: `${index * 40}ms`,
                  }}
                  title={file.name}
                >
                  <DeveloperIcon name={file.icon ?? "git"} size={60} />
                </span>
              ))}
            </span>
          ) : (
            <span className="absolute inset-0" aria-hidden="true">
              {folder.files.map((file, index) => (
                <span
                  key={file.name}
                  className={`absolute top-[15%] z-10 flex h-[48%] w-[52%] max-[800px]:h-[60%] max-[760px]:h-[65%] max-[760px]:w-[60%] flex-col gap-2 rounded-xl bg-linear-to-br from-[#e1e1e1] to-white p-4 text-[#34343a] shadow-md transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${openedFileCardClasses[index]} ${open ? index === 0 ? "-translate-x-1 translate-y-[-58%] rotate-[-8deg]" : "translate-x-1 translate-y-[-58%] rotate-[8deg]" : "translate-y-[5%]"}`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <strong className="text-[15px]">{file.name}</strong>
                  <small
                    className={`text-xs leading-[1.35] text-[#73737a] transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 group-hover/envelope:opacity-100 group-focus-visible/envelope:opacity-100"}`}
                  >
                    {file.detail}
                  </small>
                </span>
              ))}
            </span>
          )}
          <span
            className={`absolute inset-x-0 bottom-0 z-20 flex h-[78%] flex-col justify-end gap-1.5 overflow-hidden rounded-[18px] px-4 pb-4.25 shadow-[0_0_0_1px_rgba(255,255,255,.04)] origin-top transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover/envelope:translate-y-4 group-focus-visible/envelope:translate-y-4 group-hover/envelope:[transform:perspective(700px)_rotateX(-8deg)_scaleX(1.02)_translateZ(20px)] group-focus-visible/envelope:[transform:perspective(700px)_rotateX(-8deg)_scaleX(1.02)_translateZ(20px)] ${light ? "bg-[#ededee] text-portfolio-raised group-hover/envelope:bg-[#ededee] group-focus-visible/envelope:bg-white" : "bg-portfolio-raised text-[#f2f2f4] group-hover/envelope:bg-[#252529] group-focus-visible/envelope:bg-[#252529]"} ${open ? "translate-y-4 [transform:perspective(700px)_rotateX(-8deg)_scaleX(1.02)_translateZ(20px)]" : ""}`}
          >
            <span
              className={`absolute -top-3.5 left-0 h-7 w-[55%] origin-bottom skew-x-[-18deg] rounded-t-[13px] transition-all duration-500 group-hover/envelope:w-[62%] group-focus-visible/envelope:w-[62%] group-hover/envelope:scale-x-[1.06] group-focus-visible/envelope:scale-x-[1.06] ease-[cubic-bezier(.2,.8,.2,1)] group-hover/envelope:[transform:perspective(600px)_rotateX(-32deg)_skewX(-18deg)] group-focus-visible/envelope:[transform:perspective(600px)_rotateX(-32deg)_skewX(-18deg)] ${open ? "w-[62%] scale-x-[1.06] [transform:perspective(600px)_rotateX(-32deg)_skewX(-18deg)]" : ""} ${light ? "bg-[#ededee] group-hover/envelope:bg-[#ededee] group-focus-visible/envelope:bg-white" : "bg-portfolio-raised group-hover/envelope:bg-[#252529] group-focus-visible/envelope:bg-[#252529]"}`}
            />
            <span className="relative z-10 text-[17px] font-semibold">
              {folder.title}
            </span>
            <small
              className={`relative z-10 text-[15px] ${light ? "text-[#626268]" : "text-portfolio-dim"}`}
            >
              {folder.count}
            </small>
          </span>
        </span>
      </button>
      <span className="sr-only" id={`${folder.id}-description`}>
        {folder.title}, {folder.count}. Hover, focus, or activate the envelope to open. {" "}
        {folder.files.map((file) => `${file.name}: ${file.detail}.`).join(" ")}
      </span>
    </div>
  );
}
