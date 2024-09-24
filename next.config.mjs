import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "refpa4293501.top",
      "media.api-sports.io",
      "flagcdn.com",
      "blog.betweysure.com",
    ],
  },
};

export default withNextIntl(nextConfig);
