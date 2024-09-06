import Button from "../ui/Button";
import { useTranslation } from "react-i18next";

interface NewsLetterProps {
  setShowNewsletter: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNewsletterPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewsLetter({
  setShowNewsletter,
  setShowNewsletterPopUp,
}: NewsLetterProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-10 lg:mt-20 flex flex-col justify-between w-full gap-8 px-4 py-20 text-white newsletter_bg lg:flex-row md:px-10 lg:px-20">
      <div className="max-w-[400px]">
        <h3 className="text-3xl">{t("SUBSCRIBE_TO_OUR_NEWSLETTER")}</h3>
        <p className="mt-2 text-sm">{t("SUBSCRIBE_TO_OUR_NEWSLETTER_DESC")}</p>
      </div>
      <form action="" className="lg:self-end">
        <fieldset className="flex">
          <input
            type="text"
            placeholder="Enter your email address"
            className="px-4 py-3 rounded-[4px_0_0_4px] focus:outline-none text-gray-one max-w-[200px] lg:max-w-[220px]"
          />
          <Button
            className="bg-cyan py-3 rounded-[0_4px_4px_0]"
            type="button"
            onClick={() => {
              setShowNewsletter(true);
              setShowNewsletterPopUp(true);
            }}
          >
            {t("SUBMIT")}
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
