import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number, currency = "NGN") => {
  const locale =
    currency === "NGN" ? "en-NG" : currency === "USD" ? "en-US" : "en-GB";
  return amount.toLocaleString(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  });
};

// export function capitalize(str: string) {
//   return str.replace(/\b\w/g, (char) => char.toUpperCase());
// }

export function capitalize(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function getDate(
  filter: "yesterday" | "today" | "tomorrow" | "last week" | "next two days",
) {
  const todaysDate = new Date();
  const offsets = {
    yesterday: -1,
    today: 0,
    tomorrow: 1,
    "last week": -7,
    "next two days": 2,
  };
  const when = offsets[filter];

  const targetDate = new Date(todaysDate);
  targetDate.setDate(todaysDate.getDate() + when);

  const d_ = ("0" + targetDate.getDate()).slice(-2);
  const m_ = ("0" + (targetDate.getMonth() + 1)).slice(-2);
  const y_ = targetDate.getFullYear();

  return `${y_}-${m_}-${d_}`;
}

export const fuzzyMatch = (str1: string, str2: string) => {
  const formattedStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const formattedStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const length = Math.min(formattedStr1.length, formattedStr2.length);

  return formattedStr1.slice(0, length) === formattedStr2.slice(0, length);
};

export function simpleSocialShare({
  medium,
  referralCode,
  message,
}: {
  medium: TSocialMedia;
  referralCode: string;
  message: string;
}) {
  const shareurl = `${window?.location.origin}?referralCode=${
    referralCode ?? ""
  }`;

  const hrefs = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareurl}&quote=${message}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareurl}&title=${message}`,
    twitter: `https://twitter.com/intent/tweet?text=${message}%0d%0a${shareurl}`,
    whatsapp: `https://api.whatsapp.com/send?phone=&text=${message}%0d%0a${shareurl}`,
    telegram: `https://telegram.me/share/url?url=${shareurl}&text=${message}`,
    reddit: `https://reddit.com/submit?url=${shareurl}&title=${message}`,
  };
  return hrefs[medium];
}

export const xDay = new Date().toLocaleDateString("en-US", {
  weekday: "long",
});

export const isDue = ({ last, dur }: { last: number; dur: number }) => {
  const now = Date.now();
  const dueTime = last + dur * 24 * 60 * 60 * 1000; // dur in days

  return now >= dueTime;
};
