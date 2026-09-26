import { SkillFolder } from "@/components/portfolio/skill-folder";
import { SectionIntro } from "@/components/portfolio/shared/section-intro";
import { skillFolders } from "@/data/portfolio";

type SkillsSectionProps = {
  openFolder: string | null;
  onToggleFolder: (id: string) => void;
};

export function SkillsSection({
  openFolder,
  onToggleFolder,
}: SkillsSectionProps) {
  return (
    <section
      className="w-full pb-26 max-[760px]:pb-19"
      id="skills"
      aria-labelledby="skills-title"
    >
      <SectionIntro title="Skills" spacing="mb-16 max-[760px]:mb-[37px]">
        My skills focus on designing and building clear, usable digital
        products. I work across product design, mobile app design, and website
        creation.
      </SectionIntro>
      <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
        {skillFolders.map((folder) => (
          <SkillFolder
            key={folder.id}
            folder={folder}
            open={openFolder === folder.id}
            onToggle={() => onToggleFolder(folder.id)}
          />
        ))}
      </div>
    </section>
  );
}
