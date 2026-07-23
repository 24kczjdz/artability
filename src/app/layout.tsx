import type { Metadata } from "next";
import { Lexend, Nunito } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { PortalModeProvider } from "@/context/portal-mode";
import { ToastProvider } from "@/components/ui/toast";
import { siteConfig } from "@/data/site";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — AI Art Education & Marketplace`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <PortalModeProvider>
          <ToastProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-violet-deep focus:shadow-lg"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </ToastProvider>
        </PortalModeProvider>
      </body>
    </html>
  );
}
