import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga, Lilita_One } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/providers/theme-provider";

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  variable: "--font-hero",
  weight: ["400"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Rafael Almeida - Portolio",
  description: "Fullstack Creative Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          lilitaOne.variable,
          "bg-[#fefefe] dark:bg-gray-900 text-gray-900 dark:text-slate-200 antialiased font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          themes={["dark", "light"]}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
