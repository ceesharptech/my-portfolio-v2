import type { ReactNode } from "react";
import { usePortfolioTheme } from "../theme";

type SectionIntroProps = {
  title: string;
  children?: ReactNode;
  spacing?: string;
};

export function SectionIntro({
  title,
  children,
  spacing = "mb-[38px]",
}: SectionIntroProps) {
  const light = usePortfolioTheme() === "light";

  return (
    <div className={`max-w-130 ${spacing}`}>
      <h2
        className={`mb-3 text-[17px] font-medium uppercase leading-tight max-[760px]:mb-2 max-[760px]:text-[15px] ${light ? "text-portfolio-sidebar" : "text-portfolio-fg"}`}
        id={`${title.toLowerCase()}-title`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`m-0 text-base leading-normal ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
        >
          {children}
        </p>
      )}
    </div>
  );
}
