import {
  CheckCircle,
  EnvelopeSimple,
  ImageSquare,
  XLogo,
  SealCheckIcon
} from "@phosphor-icons/react";
import { usePortfolioTheme } from "@/components/portfolio/theme";
import { press3dClasses } from "@/components/portfolio/shared/press-3d";
import { socialLinks } from "@/data/portfolio";
import Image from 'next/image';

export function IntroSection() {
  const light = usePortfolioTheme() === "light";

  return (
    <section
      className="max-w-130 pb-36 pt-35 max-[760px]:pb-20 max-[760px]:pt-28.5"
      id="intro"
      aria-labelledby="intro-title"
    >
      <div
        className="relative mb-4 grid size-15 place-items-center rounded-full bg-[radial-gradient(circle_at_70%_28%,#e9c5a9_0_16%,transparent_17%),linear-gradient(150deg,#dfd6d5_0_37%,#7f7269_38%_57%,#5b563e_58%)] text-white/80"
        role="img"
        aria-label="Profile photo placeholder"
      >
        <Image
          src="/images/my-avatar.jpg"
          alt="Profile photo"
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <span
          className={`absolute bottom-0.5 right-0 size-3 rounded-full border-2 ${light ? "border-[#f3f3f1]" : "border-portfolio-bg"} bg-[#16d36a]`}
        />
      </div>

      <h1
        className={`m-0 flex items-center gap-2 text-[28px] font-semibold leading-[1.18] tracking-[-.045em] max-[760px]:text-[25px] ${light ? "text-portfolio-sidebar" : "text-portfolio-fg"}`}
        id="intro-title"
      >
        Eniola Amusu
        <SealCheckIcon
          className="text-portfolio-blue"
          size={22}
          weight="fill"
          aria-label="Verified"
        />
      </h1>
      <p
        className={`mb-5 mt-1 text-[17px] max-[760px]:mb-4 ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
      >
        Frontend Engineer
      </p>
      <p
        className={`m-0 max-w-125 text-base leading-[1.45] ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
    >
        I build thoughtful digital experiences with a focus on clarity,
        usability, and detail. I enjoy bringing ideas to life through responsive,
        well-crafted websites and apps.
      </p>

      <div className="mt-5 flex items-center gap-2.5">
        <a
          className={`rounded-[13px] px-4 py-3 text-sm font-medium transition-all hover:-translate-y-1 active:translate-y-1 active:shadow-none ${light ? "bg-portfolio-sidebar text-white" : "bg-portfolio-fg text-portfolio-bg"}`}
          href={socialLinks.email}
        >
          Get in touch
        </a>
        <a
          className={`grid size-10 place-items-center rounded-[13px] border transition hover:-translate-y-0.5 ${press3dClasses} ${light ? "border-[#dededc] bg-white text-[#56565b] hover:bg-[#e6e6e4]" : "border-portfolio-line bg-portfolio-surface text-portfolio-dim hover:bg-portfolio-raised hover:text-portfolio-fg"}`}
          href={socialLinks.email}
          aria-label="Email"
        >
          <EnvelopeSimple size={18} />
        </a>
        <a
          className={`grid size-10 place-items-center rounded-[13px] border transition hover:-translate-y-0.5 ${press3dClasses} ${light ? "border-[#dededc] bg-white text-[#56565b] hover:bg-[#e6e6e4]" : "border-portfolio-line bg-portfolio-surface text-portfolio-dim hover:bg-portfolio-raised hover:text-portfolio-fg"}`}
          href={socialLinks.x}
          target="_blank"
          rel="noreferrer"
          aria-label="X/Twitter"
        >
          <XLogo size={18} />
        </a>
      </div>
    </section>
  );
}
