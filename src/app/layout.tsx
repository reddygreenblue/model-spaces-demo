"use client";

import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import QueryProvider from "~/components/providers/query-provider";
import { ThemeProvider } from "~/components/providers/theme-provider";
import { Toaster } from "~/components/ui/sonner";
import { cn } from "~/lib/tailwind-util";
import { TopNav } from "~/components/top-navigation";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased dark:bg-black",
        )}
      >
        <ThemeProvider>
          <QueryProvider>
            <div className="relative mx-auto max-w-screen-2xl">
              <TopNav />
              {children}
              <Toaster richColors/>
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
