import { XLogo } from "@phosphor-icons/react";
import { SectionIntro } from "@/components/portfolio/shared/section-intro";
import { usePortfolioTheme } from "@/components/portfolio/theme";
import { testimonials } from "@/data/portfolio";

const avatarToneClasses = [
  "bg-[linear-gradient(140deg,#d7a67f,#51475b)]",
  "bg-[linear-gradient(140deg,#dda345,#8a3546)]",
  "bg-[linear-gradient(140deg,#e29f76,#353e4b)]",
  "bg-[linear-gradient(140deg,#8baeb2,#58434a)]",
];

export function TestimonialsSection() {
  const light = usePortfolioTheme() === "light";

  return (
    <section
      className="w-full pb-[105px] max-[760px]:pb-[76px]"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <SectionIntro title="Testimonials">
        A few words from people I’ve worked with.
      </SectionIntro>
      <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1 max-[760px]:gap-3.5">
        {testimonials.map((item, index) => (
          <article
            className={`flex min-h-[300px] flex-col justify-between rounded-[14px] border p-[38px] transition duration-300 hover:-translate-y-1 max-[1100px]:p-7 max-[760px]:min-h-[240px] max-[760px]:p-[23px] max-[390px]:p-5 ${light ? "border-[#dededc] bg-white hover:bg-[#f8f8f7]" : "border-portfolio-line bg-portfolio-surface hover:bg-[#1b1b1e]"}`}
            key={`${item.name}-${index}`}
          >
            <div className="flex items-center gap-[13px]">
              <span
                className={`grid size-[50px] flex-none place-items-center rounded-full text-xl text-white max-[760px]:size-[38px] max-[760px]:text-base ${avatarToneClasses[index]}`}
                aria-hidden="true"
              >
                {item.name.slice(0, 1)}
              </span>
              <div>
                <h3
                  className={`m-0 text-base font-semibold max-[760px]:text-[15px] ${light ? "text-[#171719]" : "text-portfolio-fg"}`}
                >
                  {item.name}
                </h3>
                <p
                  className={`mb-0 mt-[3px] text-base max-[760px]:text-sm ${light ? "text-[#626268]" : "text-portfolio-dim"}`}
                >
                  {item.role}
                </p>
              </div>
              <XLogo
                className={`ml-auto ${light ? "text-[#77777d]" : "text-portfolio-dim"}`}
                size={17}
                aria-hidden="true"
              />
            </div>
            <blockquote
              className={`mb-0 mt-[54px] text-lg leading-[1.45] max-[760px]:mt-[43px] max-[760px]:text-base ${light ? "text-[#252529]" : "text-portfolio-fg"}`}
            >
              “{item.quote}”
            </blockquote>
          </article>
        ))}
      </div>
      <p
        className={`mb-0 mt-[18px] text-sm ${light ? "text-[#77777d]" : "text-portfolio-muted"}`}
      >
        Replace these prompts with real quotes and names before publishing.
      </p>
    </section>
  );
}
