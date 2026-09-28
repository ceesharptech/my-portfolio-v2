import {
  EnvelopeSimple,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";
import { usePortfolioTheme } from "@/components/portfolio/theme";
import { socialLinks } from "@/data/portfolio";

const footerLinks = [
  { label: "Email", href: socialLinks.email, Icon: EnvelopeSimple },
  { label: "LinkedIn", href: socialLinks.linkedIn, Icon: LinkedinLogo },
  { label: "X/Twitter", href: socialLinks.x, Icon: XLogo },
];

export function PortfolioFooter() {
  const light = usePortfolioTheme() === "light";

  return (
    <footer
      className={`relative flex min-h-[440px] flex-col items-center justify-center gap-2 text-center max-[760px]:min-h-[340px] ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}
    >
      <p
        className={`mb-px text-5xl max-[760px]:text-4xl font-signature ${light ? "text-[#171719]" : "text-portfolio-fg"}`}
      >
        Eniolafe
      </p>
      <p className="m-0 text-[17px] max-[760px]:text-sm">
        Designed and built with care.
      </p>
      <div className="mt-[15px] flex gap-4.5">
        {footerLinks.map(({ label, href, Icon }) => (
          <a
            className={`transition hover:-translate-y-0.5 ${light ? "text-[#626268] hover:text-[#171719]" : "text-portfolio-dim hover:text-portfolio-fg"}`}
            href={href}
            aria-label={label}
            key={label}
          >
            <Icon size={19} aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="absolute bottom-[25px] left-0 right-0 m-0 text-sm max-[760px]:bottom-5">
        © {new Date().getFullYear()} · Eniola
      </p>
    </footer>
  );
}
