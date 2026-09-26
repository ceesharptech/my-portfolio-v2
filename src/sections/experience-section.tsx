import { SectionIntro } from "@/components/portfolio/shared/section-intro";
import { usePortfolioTheme } from "@/components/portfolio/theme";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  const light = usePortfolioTheme() === "light";

  return (
    <section
      className="w-full pb-[105px] pt-2 max-[760px]:pb-[76px]"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionIntro title="Experience" spacing="mb-[68px] max-[760px]:mb-[49px]">
        I’ve worked across digital products, from early ideas to polished
        experiences.
      </SectionIntro>
      <div>
        <div
          className={`grid grid-cols-2 gap-[30px] border-b pb-4 text-[15px] uppercase max-[760px]:hidden ${light ? "border-[#dededc] text-[#626268]" : "border-portfolio-line text-portfolio-dim"}`}
        >
          <span>Period</span>
          <span>Summary</span>
        </div>
        {experience.map((item, index) => (
          <article
            className={`grid min-h-28 grid-cols-2 items-center gap-[30px] border-b py-[19px] last:border-0 max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:gap-[13px] ${light ? "border-[#dededc]" : "border-portfolio-line"}`}
            key={`${item.role}-${index}`}
          >
            <span
              className={`text-[17px] max-[760px]:text-sm ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
            >
              {item.period}
            </span>
            <div>
              <h3
                className={`m-0 text-base font-semibold leading-[1.4] max-[760px]:text-[15px] ${light ? "text-[#171719]" : "text-portfolio-fg"}`}
              >
                {item.role} <span className="font-normal">at</span>{" "}
                <strong className="font-semibold">{item.company}</strong>
              </h3>
              <p
                className={`mb-0 mt-2 text-[15px] leading-[1.4] max-[760px]:text-sm ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
              >
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p
        className={`mb-0 mt-[18px] text-sm ${light ? "text-[#77777d]" : "text-portfolio-muted"}`}
      >
        Add your actual roles, companies, dates, and impact here.
      </p>
    </section>
  );
}
