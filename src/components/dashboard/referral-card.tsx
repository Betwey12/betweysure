"use client";
import { useQuery } from "@tanstack/react-query";
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterXIcon,
  WhatsappIcon,
} from "../icons";
import { HTTPRequest } from "@/api";
import { useState } from "react";
import Link from "next/link";
import { simpleSocialShare } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

export default function ReferralCard() {
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);

  const { data } = useQuery({
    queryKey: ["thrive_user"],
    queryFn: () => HTTPRequest.Get("users/thrive-user"),
    enabled: !!user,
  });
  const thriveUser = data?.user?.data;

  console.log(thriveUser);

  function copyToClipboard() {
    navigator.clipboard.writeText(thriveUser?.user_share_url);
    setCopied(true);
  }

  const socialSites: { medium: TSocialMedia; icon: JSX.Element }[] = [
    {
      medium: "facebook",
      icon: <FacebookIcon />,
    },
    {
      medium: "twitter",
      icon: <TwitterXIcon />,
    },
    {
      medium: "reddit",
      icon: <RedditIcon />,
    },
    {
      medium: "linkedin",
      icon: <LinkedinIcon />,
    },
    {
      medium: "whatsapp",
      icon: <WhatsappIcon />,
    },
    {
      medium: "telegram",
      icon: <TelegramIcon />,
    },
  ];

  const message =
    "Hey, get the best predictions for free on Betweysure. Use my referral code: ";
  return (
    <div className="footer_bg mt-6 rounded-3xl p-6 flex flex-col gap-6 py-8 text-white">
      <h3 className="text-2xl">Refer & get paid</h3>
      <div className="flex items-center gap-3 text-5xl">
        {socialSites.map((site) => {
          return (
            <Link
              key={site.medium}
              href={simpleSocialShare({
                medium: site.medium,
                message,
                shareurl: thriveUser?.user_share_url,
              })}
              target="_blank"
              rel="noreferrer"
              className="text-white text-4xl lg:text-5xl"
            >
              {site.icon}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center px-4 py-3 bg-gray-300 justify-between gap-2 lg:max-w-[95%]">
        <p className="text-black">
          Get Amazing offers on betweysure when you use my code
        </p>
        <button
          className="text-white bg-cyan px-6 py-1 rounded"
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
