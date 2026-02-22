import type { Metadata } from "next";
import { Space_Grotesk, Lora } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { LazyCommandMenu, LazyChatWidget } from "@/components/lazy-widgets";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Mother London | Studio Tools",
  description: "90+ AI prompts across 11 agency departments for creative advertising, strategy, and production",
  keywords: ["AI", "creative advertising", "agency tools", "prompts", "Claude"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${lora.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {/* Accessibility: Skip to main content link */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-0 md:ml-64">
              <header className="sticky top-0 z-30 bg-background border-b border-border">
                <div className="flex items-center justify-end px-4 md:px-6 h-14">
                  {/* Spacer for mobile menu button */}
                  <div className="w-10 md:hidden mr-auto" />
                  <div className="flex items-center gap-3">
                    <LazyCommandMenu />
                  </div>
                </div>
              </header>
              <main id="main-content" tabIndex={-1} className="p-4 md:p-6 outline-none">
                {children}
              </main>
            </div>
          </div>
          <LazyChatWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
