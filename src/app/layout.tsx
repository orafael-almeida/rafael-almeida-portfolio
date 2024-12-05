import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/providers/theme-provider";
import ThemeAnimationHandler from "@/components/ThemeAnimationHandler";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Rafael Almeida",
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
          "text-white antialiased font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          themes={["light", "dark"]}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeAnimationHandler>
          {children}

          </ThemeAnimationHandler>
        </ThemeProvider>
      </body>
    </html>
  );
}
