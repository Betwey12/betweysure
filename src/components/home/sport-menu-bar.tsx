import Link from "next/link";
import LiveIcon, {
  BasketballIcon,
  CalendarIcon,
  FootBallIcon,
  IceHockeyIcon,
  TennisIcon,
  TrendingUpIcon,
} from "../icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SportsMenuBar() {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-2 lg:flex items-center justify-between px-4 md:px-10 lg:px-20 py-11 flex-wrap">
      {trends.map((trend) => (
        <Link
          key={trend.name}
          className={cn(
            "flex items-center gap-2 py-2 rounded-lg transition-colors capitalize dark:text-white",
            {
              "text-primary dark:text-primary": pathname === trend.link,
            },
          )}
          href={trend.link}
        >
          <span className="text-2xl">{trend.icon}</span>
          <span>{trend.name}</span>
        </Link>
      ))}
    </div>
  );
}

const trends = [
  {
    name: "trending",
    icon: <TrendingUpIcon />,
    link: "/football-trends",
  },
  {
    name: "live",
    icon: <LiveIcon />,
    link: "/livescores",
  },
  {
    name: "today",
    icon: <CalendarIcon />,
    link: "/popular/today/predictions",
  },
  {
    name: "football",
    icon: <FootBallIcon />,
    link: "/football",
  },
  {
    name: "basketball",
    icon: <BasketballIcon />,
    link: "/basketball",
  },
  {
    name: "tennis",
    icon: <TennisIcon />,
    link: "/tennis",
  },
  {
    name: "baseball",
    icon: <BasketballIcon />,
    link: "/baseball",
  },
  {
    name: "ice hockey",
    icon: <IceHockeyIcon />,
    link: "/ice-hockey",
  },
];
