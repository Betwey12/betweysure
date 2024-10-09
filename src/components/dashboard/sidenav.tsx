"use client";
import { MdDashboard } from "react-icons/md";
import {
  FaCaretDown,
  FaCaretUp,
  FaCashRegister,
  // FaExchangeAlt,
  FaHockeyPuck,
  FaMoneyCheck,
  // FaSimCard,
  FaWallet,
} from "react-icons/fa";
import { useState } from "react";
import championsBall from "@/assets/icons/champions-ball.webp";
import englandFlag from "@/assets/icons/england_flag.png";
import spanishFlag from "@/assets/icons/spain_flag.png";
import italianFlag from "@/assets/icons/flag_of_italy.png";
import germanFlag from "@/assets/icons/flag_of_germany.png";
import frenchFlag from "@/assets/icons/flag_of_france.png";
import europeFlag from "@/assets/icons/europe_flag_circle.png";
import { FaArrowsSpin, FaMoneyBill } from "react-icons/fa6";
import { TbFreeRights } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../ui/nav-link";
import {
  BaseballIcon,
  BasketballIcon,
  BundlesIcon,
  FootBallIcon,
  NewsIcon,
  PercentIcon,
  TennisIcon,
} from "../icons";

const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL;

interface SideNavProps {
  setShowSideNav?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideNav({ setShowSideNav }: SideNavProps) {
  return (
    <div className="relative border-gray-two border bg-white text-blue-three lg:flex min-h-screen lg:max-h-max max-h-[100vh] flex-col gap-8 h-full rounded lg:rounded-none shadow dark:text-white dark:bg-blue-two dark:border-0">
      <div className="p-4 block lg:px-5 lg:py-8 z-10 bg-inherit w-full">
        <Link href="/?category=trending">
          <Image
            width={120}
            height={120}
            src="/logo.png"
            alt="logo"
            className="w-[120px] lg:w-[160px]"
          />
        </Link>{" "}
      </div>
      <div className="flex flex-col lg:absolute bottom-0 lg:overflow-y-scroll lg:h-[85%] w-full bg-inherit">
        {navlinks.map((link, index) => (
          <NavLIst key={index} link={link} setShowSideNav={setShowSideNav} />
        ))}
      </div>
    </div>
  );
}

interface ListProps {
  link: NavLinks[number];
  setShowSideNav?: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavLIst({ link, setShowSideNav }: ListProps) {
  return (
    <>
      {link?.path ? (
        <NavLink
          href={link?.path}
          target={link.blank ? "_blank" : "_self"}
          className={`flex items-center gap-2 py-4 px-4 lg:px-5 hover:bg-gray-light
            ${link.name.toLowerCase().replace(" ", "-")}
              dark:hover:bg-blue-three`}
          onClick={() => setShowSideNav && setShowSideNav(false)}
        >
          {link.icon}
          <span>{link.name}</span>
        </NavLink>
      ) : (
        <DropdownList link={link} setShowSideNav={setShowSideNav} />
      )}
    </>
  );
}

function DropdownList({ link, setShowSideNav }: ListProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`flex items-center justify-between py-4 cursor-pointer hover:bg-gray-light px-4 lg:px-5
            ${link.name.toLowerCase().replace(" ", "-")}
             dark:hover:bg-blue-three`}
        role="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-2 items-center">
          {link.icon}
          <span>{link.name}</span>
        </div>
        {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
      </div>
      {isOpen && (
        <div className="flex flex-col pl-4 lg:pl-5">
          {link?.dropdown?.map((link, index) => (
            <Link
              href={link.path}
              className="flex items-center gap-2 border-l-2 border-cyan py-4 pl-4 lg:pl-5 hover:bg-gray-light dark:hover:bg-blue-three"
              key={index}
              onClick={() => setShowSideNav && setShowSideNav(false)}
            >
              {typeof link.icon === "object" && "src" in link.icon ? (
                <Image
                  width={20}
                  height={20}
                  src={link.icon}
                  alt={link.name}
                  className="w-4 h-4 rounded-full"
                />
              ) : (
                <>{link.icon}</>
              )}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const navlinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "Football",
    icon: <FootBallIcon />,
    dropdown: [
      {
        name: "All Predictions",
        path: "/dashboard/football-predictions?country=all",
        icon: championsBall,
      },
      {
        name: "England",
        path: "/dashboard/football-predictions?country=england",
        icon: englandFlag,
      },
      {
        name: "Spain",
        path: "/dashboard/football-predictions?country=spain",
        icon: spanishFlag,
      },
      {
        name: "Italy",
        path: "/dashboard/football-predictions?country=italy",
        icon: italianFlag,
      },
      {
        name: "Germany",
        path: "/dashboard/football-predictions?country=germany",
        icon: germanFlag,
      },
      {
        name: "France",
        path: "/dashboard/football-predictions?country=france",
        icon: frenchFlag,
      },
      {
        name: "Europe",
        path: "/dashboard/football-predictions?country=europe",
        icon: europeFlag,
      },
    ],
  },
  {
    name: "Other Sports",
    icon: <BaseballIcon />,
    dropdown: [
      {
        name: "Basketball",
        path: "/dashboard/other-sports?sport=basketball",
        icon: <BasketballIcon className="text-[#664136]" />,
      },
      {
        name: "Tennis",
        path: "/dashboard/other-sports?sport=tennis",
        icon: <TennisIcon className="text-[#6d9b00]" />,
      },
      {
        name: "Ice Hockey",
        path: "/dashboard/other-sports?sport=ice hockey",
        icon: <FaHockeyPuck className="text-[#ff8560]" />,
      },
      {
        name: "Baseball",
        path: "/dashboard/other-sports?sport=baseball",
        icon: <BaseballIcon className="text-[#999]" />,
      },
    ],
  },
  {
    name: "Premium predictions",
    icon: <BundlesIcon />,
    dropdown: [
      {
        name: "Football",
        path: "/dashboard/football-predictions?country=all",
        icon: <FootBallIcon />,
      },
      {
        name: "Other Sports",
        path: "/dashboard/other-sports?sport=basketball",
        icon: <BasketballIcon />,
      },
    ],
  },

  {
    name: "Free predictions",
    icon: <TbFreeRights />,
    dropdown: [
      {
        name: "Football",
        path: "/dashboard/football-predictions?country=all",
        icon: <FootBallIcon />,
      },
      {
        name: "Other Sports",
        path: "/dashboard/other-sports?sport=basketball",
        icon: <BasketballIcon />,
      },
    ],
  },
  {
    name: "Buy plan",
    path: "/dashboard/buy-plan",
    icon: <BundlesIcon />,
  },
  {
    name: "Sport News",
    icon: <NewsIcon />,
    path: blogUrl,
    blank: true,
  },
  {
    name: "Bet Offers",
    icon: <PercentIcon />,
    path: "/dashboard/bet-offers",
  },
  {
    name: "Bills Payment",
    icon: <FaMoneyBill />,
    dropdown: [
      {
        name: "Wallet Ballance",
        path: "/dashboard/wallet",
        icon: <FaWallet />,
      },
      {
        name: "Transactions",
        path: "/dashboard/wallet?tab=transactions",
        icon: <FaCashRegister />,
      },
      // {
      //   name: "Airtime",
      //   path: "/dashboard/perform?task=airtime",
      //   icon: <FaSimCard />,
      // },
      // {
      //   name: "Data",
      //   path: "/dashboard/perform?task=data",
      //   icon: <FaExchangeAlt />,
      // },
    ],
  },
  {
    name: "Convert Booking Code",
    path: "/dashboard/perform?task=convert-bet-code",
    icon: <FaArrowsSpin />,
  },
  {
    name: "Fund Betting Wallet",
    path: "/dashboard/perform?task=fund-bet-wallet",
    icon: <FaMoneyCheck />,
  },
];

type NavLinks = typeof navlinks;
