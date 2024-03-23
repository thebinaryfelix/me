"use client";

import { useTheme } from "next-themes";
import { sendGAEvent } from "@next/third-parties/google";
import { TranslationProps } from "@/types/translation";
import { useIsClient } from "@/client/hooks";
import { DarkThemeIcon } from "@/server/components";
import { LightThemeIcon } from "@/server/components";

export const ToggleThemeButton = ({ dictionary }: TranslationProps) => {
  const { isClient } = useIsClient()

  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleToggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    sendGAEvent("event", "toggle_theme", { theme: newTheme });
    setTheme(newTheme);
  };

  if (!isClient) {
    return null;
  }

  const buttonLabel = `${dictionary.theme.toggle} ${dictionary.theme[isDark ? "light" : "dark"]
    }`;

  return (
    <button
      id="theme-toggle"
      onClick={handleToggleTheme}
      data-tooltip-target="tooltip-toggle"
      className="text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >
      <DarkThemeIcon hidden={isDark} />
      <LightThemeIcon hidden={!isDark} />
      <span className="sr-only">{buttonLabel}</span>
    </button>
  );
};
