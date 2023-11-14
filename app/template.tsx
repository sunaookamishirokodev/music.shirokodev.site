"use client";
import Controller from "@/components/controller";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import ThemeProvider from "@/components/theme-provider";
import musics from "./music";
import logger from "@/functions/console-log";
import { JetBrains_Mono } from "next/font/google";
import { useLayoutEffect } from "react";

const font = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    logger("log", {
      title: "Warning",
      cssTitle: "color: #ef4444; font-size: 12px",
      content: "Don't paste any texts or commands in here and run it.",
    });
    logger("log", {
      title: "Info",
      cssTitle: "color: #38bdf8; font-size: 12px",
      content: "Hello User:3! Wish you have happy experiences.",
    });
  }, []);
  return (
    <body suppressHydrationWarning className={`${font.className} bg-white dark:bg-dark`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        forcedTheme="dark"
        storageKey="theme"
        enableSystem
        disableTransitionOnChange
      >
        <>
          <div className="flex">
            <Sidebar className="sticky top-0 left-0 w-[250px] h-full border-primary py-2 border-r-[1px]" />
            <main className="flex-1">
              {children}
              <Footer />
            </main>
          </div>
        </>
      </ThemeProvider>
      <Controller songs={musics} />
    </body>
  );
}
