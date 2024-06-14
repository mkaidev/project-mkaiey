import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mkai Web Development",
  description: "Web development of Project Hunt built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={font.className}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
