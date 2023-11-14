import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiroko Music",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html suppressHydrationWarning lang="en">{children}</html>;
}
