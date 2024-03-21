import { Home } from "@/server/components";
import { Locale } from "../../i18n-config";
import { getDictionary } from "../../getDictionary";

const Page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(lang);
  return <Home dictionary={dictionary} />;
};

export default Page;
