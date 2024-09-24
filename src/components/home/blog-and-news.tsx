"use client";

import { FaArchive } from "react-icons/fa";
import { fetchPosts } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Spinner from "../ui/spinner";

const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL;

export default function BlogAndNews() {
  const t = useTranslations("BLOG_AND_NEWS");
  const { data: newsData, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: (): Promise<any> => fetchPosts(),
  });

  const news = newsData?.data.posts.edges.map((edge: any) => edge.node) ?? [];

  return (
    <div className="flex flex-col gap-8 px-4 lg:px-20 md:px-10 dark:text-white">
      <h3 className="text-3xl">{t("BLOG_AND_NEWS")}</h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 justify-between">
          {news.slice(0, 3).map((news: any, i: number) => (
            <NewsCard news={news} key={`${news.title}${i}`} />
          ))}
        </div>
      )}
    </div>
  );
}

function NewsCard({ news }: { news: any }) {
  const t = useTranslations("BLOG_AND_NEWS");
  const link = news.uri;
  const content = news.content.replace(/<[^>]*>?/gm, "").slice(0, 130);
  return (
    <div className="flex flex-col">
      <Image
        width={300}
        height={200}
        src={news.featuredImage?.node?.sourceUrl ?? ""}
        alt={news.title}
        className="w-full rounded-[12px_12px_0_0] h-[200px] object-cover"
      />
      <div className="flex flex-col justify-between h-full bg-white shadow-md rounded-[0_0_12px_12px] px-4 py-6 dark:bg-blue-one dark:text-white">
        <h4 className="text-dark dark:text-white">{news.title}</h4>
        <p className="text-sm text-gray-one mt-2">{content}...</p>
        <Link
          target="_blank"
          href={`${blogUrl}/${link}`}
          className="flex items-center gap-2 mt-8 text-cyan"
        >
          {t("READ")} <FaArchive />
        </Link>
      </div>
    </div>
  );
}
