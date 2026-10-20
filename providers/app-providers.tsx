"use client";

import { Toaster } from "@/components/ui/sonner";
import { MotionProvider } from "@/providers/motion-provider";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <MotionProvider>
          {children}
          <Toaster richColors closeButton position="top-center" />
        </MotionProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
