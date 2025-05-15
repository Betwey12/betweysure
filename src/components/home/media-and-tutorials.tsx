import { useTranslations } from "next-intl";

export default function MediaAndTutorials() {
  const t = useTranslations("MEDIA_AND_TUTORIALS");
  const youtubes = [
    "https://www.youtube.com/embed/V8FFe1PfRkg?si=64Q9OPOXUB-QRiE9",
    "https://www.youtube.com/embed/G4P3hCWLcZw?si=K0P7G6boGVrLdsHc",
  ];
  return (
    <div className="flex flex-col gap-8 px-4 lg:px-20 md:px-10 mb-10 lg:mb-20 dark:text-white">
      <h3 className="lg:text-2xl text-xl font-semibold">{t("TITLE")}</h3>

      <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 justify-between">
        {youtubes.map((link) => (
          <iframe
            key={link}
            width="100%"
            height="345"
            src={link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
}
