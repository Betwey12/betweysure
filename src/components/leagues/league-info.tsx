import Image from "next/image";

interface LeagueInfoProps {
  popularLeague?: {
    name: string;
    logo: string;
  };
  title?: string;
  description: string;
  isPeriod: boolean;
  periodTitle?: string;
  tab: string;
}

export default function LeagueInfo({
  isPeriod,
  description,
  title,
  popularLeague,
  tab,
  periodTitle,
}: LeagueInfoProps) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="mb-6 text-center font-bold flex flex-col lg:flex-row items-center gap-2 lg:gap-4 justify-center">
        {isPeriod ? (
          <h1 className="lg:text-4xl text-3xl text-center">{periodTitle}</h1>
        ) : (
          popularLeague && (
            <>
              <Image
                width={40}
                height={40}
                src={popularLeague?.logo}
                alt={`${popularLeague?.name} ${tab} page`}
                className="w-10 h-10 bg-white text-blue-one rounded-full object-contain"
              />
              <h1 className="lg:text-4xl text-3xl text-center">{title}</h1>
            </>
          )
        )}
      </div>
      <p className="text-center max-w-5xl">{description}</p>
    </div>
  );
}
