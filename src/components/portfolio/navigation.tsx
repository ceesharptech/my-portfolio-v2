import {
  EnvelopeSimple,
  LinkedinLogo,
  List,
  MoonIcon,
  Sun,
  X,
  XLogo,
} from "@phosphor-icons/react";
import { navigation, socialLinks } from "@/data/portfolio";
import { press3dClasses } from "./shared/press-3d";
import { usePortfolioTheme, type Theme } from "./theme";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  window.history.pushState(null, "", `#${sectionId}`);
  const topOffset = window.matchMedia("(max-width: 1099px)").matches ? 84 : 24;
  const top = section.getBoundingClientRect().top + window.scrollY - topOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

type ThemeSwitchProps = {
  theme: Theme;
  onToggle: () => void;
  compact?: boolean;
};

export function ThemeSwitch({
  theme,
  onToggle,
  compact = false,
}: ThemeSwitchProps) {
  const light = theme === "light";

  return (
    <button
      className={`inline-flex items-center gap-3 ${press3dClasses}`}
      type="button"
      aria-label={`Switch to ${light ? "dark" : "light"} mode`}
      aria-pressed={light}
      onClick={onToggle}
    >
      <span
        className={`relative flex items-center rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.07),0px_0.6021873017743928px_0.6021873017743928px_-1.25px_rgba(0,0,0,0.11),0px_2.288533303243457px_2.288533303243457px_-2.5px_rgba(0,0,0,0.1),0px_10px_10px_-3.75px_rgba(0,0,0,0.04)]  transition-colors duration-300 ${compact ? "h-10 w-[66px] p-[3px]" : "h-12 w-[88px] p-1"} ${light ? "bg-[#d3d3d6] shadow-inner shadow-black/10" : "bg-[#29292c]"}`}
      >
        <span
          className={`ml-auto grid place-items-center rounded-full shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.07),0px_0.6021873017743928px_0.6021873017743928px_-1.25px_rgba(0,0,0,0.11),0px_2.288533303243457px_2.288533303243457px_-2.5px_rgba(0,0,0,0.1),0px_10px_10px_-3.75px_rgba(0,0,0,0.04)]  transition-all duration-300 ${compact ? "size-[34px]" : "size-10"} ${light ? `${compact ? "-translate-x-[26px]" : "-translate-x-10"} bg-white text-[#242428]` : "bg-[#39393d] text-white"}`}
        >
          {light ? (
            <Sun size={16} weight="fill" />
          ) : (
            <MoonIcon size={16} weight="fill" />
          )}
        </span>
      </span>
      {!compact && (
        <span className={`text-sm ${light ? "text-[#56565b]" : "text-portfolio-dim"}`}>
          {light ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}

function ContactLinks({ mobile = false }: { mobile?: boolean }) {
  const light = usePortfolioTheme() === "light";
  const muted = light ? "text-[#626268]" : "text-portfolio-dim";
  const iconTone = light ? "text-[#77777d]" : "text-portfolio-muted";
  const iconSize = mobile ? 18 : 17;
  const linkTone = light ? "hover:text-[#171719]" : "hover:text-portfolio-fg";

  return (
    <div
      className={`grid justify-items-start ${mobile ? "mt-9 gap-3" : "gap-3"}`}
    >
      <p className={`mb-1 text-sm uppercase ${muted}`}>Contacts</p>
      <a
        className={`flex items-center gap-3 px-3 py-1 text-base transition-colors ${linkTone} ${muted}`}
        href={socialLinks.email}
      >
        <EnvelopeSimple className={iconTone} size={iconSize} aria-hidden="true" />
        Email
      </a>
      <a
        className={`flex items-center gap-3 px-3 py-1 text-base transition-colors ${linkTone} ${muted}`}
        href={socialLinks.x}
        target="_blank"
        rel="noreferrer"
      >
        <XLogo className={iconTone} size={iconSize} aria-hidden="true" />
        X/Twitter
      </a>
      <a
        className={`flex items-center gap-3 px-3 py-1 text-base transition-colors ${linkTone} ${muted}`}
        href={socialLinks.linkedIn}
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinLogo className={iconTone} size={iconSize} aria-hidden="true" />
        LinkedIn
      </a>
    </div>
  );
}

type DesktopSidebarProps = {
  activeSection: string;
  theme: Theme;
  onToggleTheme: () => void;
};

export function DesktopSidebar({
  activeSection,
  theme,
  onToggleTheme,
}: DesktopSidebarProps) {
  const light = theme === "light";

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-10 hidden w-[clamp(280px,19vw,366px)] flex-col justify-between border-r px-5.5 py-11 min-[1100px]:flex max-[1100px]:w-67.5 max-[1100px]:px-4.5 ${light ? "border-[#dededc] bg-[#e9e9e7]" : "border-portfolio-line bg-portfolio-sidebar"}`}
      aria-label="Portfolio navigation"
    >
      <nav aria-label="Main navigation">
        <p
          className={`mb-5 text-sm uppercase ${light ? "text-[#626268]" : "text-portfolio-dim"}`}
        >
          Navigation
        </p>
        <div className="grid">
          {navigation.map((item) => (
            <a
              className={`w-full translate-x-0 px-4 py-2.25 text-base leading-tight transition duration-200 ${light ? "hover:bg-[#e0e0e0]" : "hover:bg-portfolio-raised"} rounded-xl hover:translate-x-0.75 ${activeSection === item.id ? (light ? "text-[#171719]" : "text-portfolio-fg") : light ? "text-[#626268] hover:text-[#171719]" : "text-portfolio-dim hover:text-portfolio-fg"}`}
              href={`#${item.id}`}
              key={item.id}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="grid gap-12">
        <ContactLinks />
        <div className="grid justify-items-start gap-3">
          <p
            className={`mb-1 text-sm uppercase ${light ? "text-[#626268]" : "text-portfolio-dim"}`}
          >
            Mode
          </p>
          <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </aside>
  );
}

type MobileNavigationProps = {
  open: boolean;
  onToggleOpen: () => void;
  theme: Theme;
  onToggleTheme: () => void;
};

export function MobileNavigation({
  open,
  onToggleOpen,
  theme,
  onToggleTheme,
}: MobileNavigationProps) {
  const light = theme === "light";

  return (
    <>
      <header className={`fixed inset-x-4.5 top-0 ${light ? "bg-[#f3f3f1]" : "bg-portfolio-bg"}  z-30 flex justify-between min-[1100px]:hidden md:px-6 py-4`}>
        <ThemeSwitch theme={theme} onToggle={onToggleTheme} compact />
        <button
          className={`grid p-3 size-10.5 place-items-center rounded-xl box-border shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.07),0px_0.6021873017743928px_0.6021873017743928px_-1.25px_rgba(0,0,0,0.11),0px_2.288533303243457px_2.288533303243457px_-2.5px_rgba(0,0,0,0.1),0px_10px_10px_-3.75px_rgba(0,0,0,0.04)] ${press3dClasses} ${light ? "bg-[#e4e4e2] text-[#626268]" : "bg-[#252528] text-portfolio-dim"}`}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={onToggleOpen}
        >
          <div className="w-full h-full flex flex-col gap-1.5 justify-center items-center">
              <div className={`w-full h-[1.5px] ${light ? "bg-portfolio-line" : "bg-[#b9b9b9]"} rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[3.3px]" : "rotate-0"}`}></div>
              <div className={`w-full h-[1.5px] ${light ? "bg-portfolio-line" : "bg-[#b9b9b9]"} rounded-full  transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.3px]" : "-rotate-0"}`}></div>
            </div>
        </button>
      </header>
      <div
        className={`fixed inset-0 z-20 overflow-auto px-4.5 pb-9 pt-22 transition-[opacity,clip-path] duration-300 ease-[cubic-bezier(.2,.75,.2,1)] min-[1100px]:hidden ${light ? "bg-[#f3f3f1]" : "bg-portfolio-bg"} ${open ? "pointer-events-auto opacity-100 [clip-path:inset(0_0_0_0)]" : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]"}`}
        aria-hidden={!open}
      >
        <nav
          id="mobile-navigation"
          className="flex min-h-[calc(100vh-123px)] flex-col items-start md:pl-6"
          aria-label="Main navigation"
          inert={!open}
        >
          <p
            className={`mb-3 text-sm uppercase ${light ? "text-[#626268]" : "text-portfolio-dim"}`}
          >
            Navigation
          </p>
          <div className="grid w-full">
            {navigation.map((item) => (
              <a
                className={`w-max px-3 py-2.25 text-lg transition-colors ${light ? "text-[#626268] hover:text-[#171719]" : "text-portfolio-dim hover:text-portfolio-fg"}`}
                href={`#${item.id}`}
                key={item.id}
                onClick={(event) => {
                  event.preventDefault();
                  onToggleOpen();
                  window.setTimeout(() => scrollToSection(item.id), 300);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <ContactLinks mobile />
        </nav>
      </div>
    </>
  );
}
