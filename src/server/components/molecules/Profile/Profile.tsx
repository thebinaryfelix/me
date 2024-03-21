import Image from "next/image";
import { TranslationProps } from "@/types/translation";
import { CopyEmailButton } from "@/client";

export const Profile = ({ dictionary }: TranslationProps) => (
  <section id="profile">
    <div className="pt-4 flex justify-center">
      <Image
        priority
        width={128}
        height={128}
        alt={dictionary.home.profile.pictureAlt}
        src="/profile_img.webp"
        className="rounded-full"
      />
    </div>

    <div className="flex flex-col items-center">
      <p
        className="font-bold text-2xl mt-4 text-text-light dark:text-text-dark"
        aria-label="Mateus Felix"
      >
        Mateus Félix
      </p>
      <p className="text-base text-secondary-light dark:text-secondary-dark">
        {dictionary.home.profile.occupation}
      </p>
      <p className="text-base text-secondary-light dark:text-secondary-dark">
        {dictionary.home.profile.location}
      </p>

      <div className="w-full sm:w-1/2 lg:w-1/5">
        <CopyEmailButton
          successFeedback={dictionary.home.profile.contactTooltip}
        >
          <strong>{dictionary.home.profile.contactButton}</strong>
        </CopyEmailButton>
      </div>
    </div>
  </section>
);
