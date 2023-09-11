import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobsite inventory management",
  description: "Jobsite inventory dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${OpenSans.className} p-2.5 bg-brand-background-primary`}
      >
        {children}
      </body>
    </html>
  );
}
