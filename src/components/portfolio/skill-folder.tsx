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
import FolderSvg from "./shared/folder-svg";

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

const openedStackIconClasses =
  "group-hover/envelope:-translate-y-[125%] group-hover/envelope:opacity-100 group-focus-visible/envelope:-translate-y-[125%] group-focus-visible/envelope:opacity-100";

const openedFileCardClasses = [
  "left-[0%] origin-bottom-left -rotate-[7deg] group-hover/envelope:-translate-x-[8px] group-hover/envelope:-translate-y-[58%] group-hover/envelope:-rotate-[8deg] group-focus-visible/envelope:-translate-x-[28px] group-focus-visible/envelope:-translate-y-[58%] group-focus-visible/envelope:-rotate-[8deg]",
  "right-[0%] origin-bottom-right rotate-[6deg] group-hover/envelope:translate-x-[8px] group-hover/envelope:-translate-y-[58%] group-hover/envelope:rotate-[8deg] group-focus-visible/envelope:translate-x-[28px] group-focus-visible/envelope:-translate-y-[68%] group-focus-visible/envelope:rotate-[8deg]",
];

export function SkillFolder({ folder, open, onToggle }: SkillFolderProps) {
  const light = usePortfolioTheme() === "light";
  const isStack = folder.id === "stack";

  return (
    <div
      className={`relative h-125 overflow-hidden rounded-2xl border p-0 max-[1100px]:h-110 max-[760px]:h-95 ${light ? "border-[#dededc] bg-[#f9f9f9]" : "border-portfolio-line bg-portfolio-surface"}`}
    >
      <button
        className="group/envelope absolute bottom-[19%] left-1/2 z-10 h-[55%] w-[62%] -translate-x-1/2 cursor-pointer border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-portfolio-blue"
        type="button"
        aria-label={`${folder.title} folder, ${folder.count}`}
        aria-expanded={open}
        aria-describedby={`${folder.id}-description`}
        onClick={onToggle}
      >
        {isStack ? (
          <span className="absolute inset-0" aria-hidden="true">
            {folder.files.map((file, index) => (
              <span
                key={file.name}
                className={`absolute top-[12%] z-10 grid place-items-center rounded-[14px] transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${openedStackIconClasses} ${open ? "translate-y-[-125%] opacity-100" : "translate-y-0 opacity-100"}`}
                style={{
                  left: `${index * 18}%`,
                  transitionDelay: `${index * 45}ms`,
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
                className={`absolute top-[15%] z-10 flex h-[48%] w-[52%] max-[760px]:h-[75%] flex-col gap-2 rounded-xl bg-linear-to-br from-[#f2f2f1] to-white p-4 text-[#34343a] shadow-md transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] ${openedFileCardClasses[index]} ${open ? index === 0 ? "-translate-x-1 translate-y-[-58%] rotate-[-8deg]" : "translate-x-1 translate-y-[-58%] rotate-[8deg]" : "translate-y-[5%]"}`}
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
          className={`absolute inset-x-0 bottom-0 z-20 transform-3d flex h-[78%] flex-col justify-end gap-1.5 overflow-hidden rounded-[18px] px-4 pb-4.25 shadow-[0_0_0_1px_rgba(255,255,255,.04)] transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover/envelope:translate-y-4 group-focus-visible/envelope:translate-y-4 ${light ? "bg-[#ededee] text-portfolio-raised group-hover/envelope:bg-[#ededee] group-focus-visible/envelope:bg-white" : "bg-portfolio-raised text-[#f2f2f4] group-hover/envelope:bg-[#252529] group-focus-visible/envelope:bg-[#252529]"} ${open ? "translate-y-4" : ""}`}
        >
          <span
            className={`absolute -top-3.5 left-0 h-7 w-[55%] skew-x-[-18deg] rounded-t-[13px] ${light ? "bg-[#ededee] group-hover/envelope:bg-[#ededee] group-focus-visible/envelope:bg-white" : "bg-portfolio-raised group-hover/envelope:bg-[#252529] group-focus-visible/envelope:bg-[#252529]"}`}
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
      </button>
      <span className="sr-only" id={`${folder.id}-description`}>
        {folder.title}, {folder.count}. Hover, focus, or activate the envelope to open. {" "}
        {folder.files.map((file) => `${file.name}: ${file.detail}.`).join(" ")}
      </span>
    </div>
  );
}
