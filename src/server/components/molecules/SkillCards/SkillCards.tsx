import { SkillCard } from "@/client/components";
import { getSkills } from "./skills";
import { TranslationProps } from "@/types/translation";

export const SkillCards = ({ dictionary }: TranslationProps) => {
  const skills = getSkills(dictionary);

  return (
    <section id="skills" className="mt-8">
      <p className="text-2xl text-text-light dark:text-text-dark font-medium">
        {dictionary.home.skills.title}
      </p>

      <div
        className={`grid grid-cols-2 gap-3 mt-6 md:grid-cols-3 lg:grid-cols-4`}
      >
        {skills.map(({ title, Icon, tags }) => (
          <SkillCard key={title} title={title} Icon={Icon} tags={tags} />
        ))}
      </div>
    </section>
  );
};
