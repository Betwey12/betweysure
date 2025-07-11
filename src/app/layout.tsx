import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { home } from "@/constants";
import { gilroy, rubik } from "./font";
import { ThemeProvider } from "@/components/provider/theme-provider";
import QueryProvider from "@/components/provider/query-provider";
import AuthProvider from "@/components/provider/auth-provider";
import SlipProvider from "@/components/provider/SlipProvider";
import MyMuiLocalizationProvider from "@/components/provider/mui-localization-provucer";
import ReCaptchaProvider from "@/components/provider/recaptcha-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import PopUpProvider from "@/components/provider/pop-up-provider";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  keywords: home.keywords,
  alternates: {
    canonical: `${SITE_URL}`,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${rubik.className} ${gilroy.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ReCaptchaProvider>
            <QueryProvider>
              <MyMuiLocalizationProvider>
                <AuthProvider>
                  <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                  >
                    <PopUpProvider>
                      <SlipProvider>{children}</SlipProvider>
                    </PopUpProvider>
                  </ThemeProvider>
                </AuthProvider>
              </MyMuiLocalizationProvider>
            </QueryProvider>
          </ReCaptchaProvider>
        </NextIntlClientProvider>
        <GoogleAnalytics gaId="G-S04GSWE5BT" />
        <Script
          type="text/javascript"
          id="zsiqchat"
        >{`var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siqb47ccd4d62e116bb01ff63f73ec8d528bacef77674ee6b027bc548a44a40c8ec", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`}</Script>
      </body>
    </html>
  );
}
