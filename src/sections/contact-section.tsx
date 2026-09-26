import type { FormEvent } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { press3dClasses } from "@/components/portfolio/shared/press-3d";
import { SectionIntro } from "@/components/portfolio/shared/section-intro";
import { usePortfolioTheme } from "@/components/portfolio/theme";
import { contactEmail } from "@/data/portfolio";

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Portfolio message from ${values.get("name")}`);
  const body = encodeURIComponent(
    `From: ${values.get("name")} (${values.get("email")})\n\n${values.get("message")}`,
  );
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

export function ContactSection() {
  const light = usePortfolioTheme() === "light";
  const labelClasses = `grid gap-3.5 text-base max-[760px]:gap-2.5 ${light ? "text-[#56565b]" : "text-portfolio-dim"}`;
  const fieldClasses = `w-full rounded-[15px] border border-transparent px-4 py-[17px] text-base outline-none transition focus:border-[#77777d] focus:ring-4 focus:ring-black/5 max-[760px]:rounded-xl max-[760px]:p-[14px] ${light ? "bg-[#e6e6e4] text-[#171719] placeholder:text-[#77777d]" : "bg-portfolio-raised text-portfolio-fg placeholder:text-portfolio-muted"}`;

  return (
    <section
      className="w-full pb-[105px] pt-[10px] max-[760px]:pb-[76px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <SectionIntro title="Contact">
        If you’d like to work together, have a question, or just want to say
        hello, feel free to reach out.
      </SectionIntro>
      <form className="grid gap-[22px] max-[760px]:gap-5" onSubmit={handleContactSubmit}>
        <div className="grid grid-cols-2 gap-6 max-[760px]:grid-cols-1 max-[760px]:gap-5">
          <label
            className={labelClasses}
          >
            Name
            <input
              className={fieldClasses}
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </label>
          <label
            className={labelClasses}
          >
            Email
            <input
              className={fieldClasses}
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>
        </div>
        <label
          className={labelClasses}
        >
          Message
          <textarea
            className={`min-h-32 resize-y ${fieldClasses}`}
            name="message"
            placeholder="What’s up?"
            rows={4}
            required
          />
        </label>
        <button
          className={`flex w-max items-center gap-2 rounded-[14px] px-4 py-3 text-base hover:cursor-pointer transition-all hover:-translate-y-1 active:translate-y-1 active:shadow-none ${press3dClasses} ${light ? "bg-[#171719] text-white" : "bg-portfolio-fg text-portfolio-bg"}`}
          type="submit"
        >
          Send message <ArrowUpRight size={17} />
        </button>
      </form>
    </section>
  );
}
