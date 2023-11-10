"use client";
import Controller from "@/components/controller";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import ThemeProvider from "@/components/theme-provider";
import { JetBrains_Mono } from "next/font/google";

const font = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body suppressHydrationWarning className={`${font.className} bg-white dark:bg-dark`}>
      <ThemeProvider attribute="class" defaultTheme="system" forcedTheme="dark" storageKey="theme" enableSystem disableTransitionOnChange>
        <>
          <div className="flex">
            <Sidebar className="w-[250px] h-screen border-primary py-2 border-r-[1px]" />
            <main className="flex-1">
              {children}
              <Footer />
            </main>
          </div>
          <Controller className="fixed bottom-0 left-0 right-0 h-36" />
        </>
      </ThemeProvider>
    </body>
  );
}
