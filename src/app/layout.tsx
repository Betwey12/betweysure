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

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
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
          <QueryProvider>
            <MyMuiLocalizationProvider>
              <AuthProvider>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                  <SlipProvider>{children}</SlipProvider>
                </ThemeProvider>
              </AuthProvider>
            </MyMuiLocalizationProvider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
