import { TranslationProps } from "@/types/translation";
import { AboutMe, Footer, Profile, SkillCards } from "@/server";

export const Home = ({ dictionary }: TranslationProps) => (
  <>
    <Profile dictionary={dictionary} />

    <AboutMe dictionary={dictionary} />

    <SkillCards dictionary={dictionary} />

    <Footer dictionary={dictionary} />
  </>
);
