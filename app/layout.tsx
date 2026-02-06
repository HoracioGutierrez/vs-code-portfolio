import type { Metadata } from "next";
import { ThemeProvider } from "@/features/layout/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Fira_Code } from "next/font/google";
import MainEditor from "@/features/layout/components/main-editor";
import * as motion from "motion/react-client"
import { NuqsAdapter } from 'nuqs/adapters/next'
import { Toaster } from "sonner"
import "./globals.css";

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Horacio Gutierrez - Portfolio",
    template: "%s | Horacio Gutierrez"
  },
  description:
    "Portfolio de Horacio Gutierrez, Desarrollador Web Full-Stack en Javascript y Freelancer",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          firaCode.className,
          "min-h-dvh bg-background p-4 md:p-8 lg:p-17 transition-[padding] flex flex-col justify-center items-center overflow-hidden"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <MainEditor>
              <motion.div initial="hide" animate="show" exit="exit" className="flex flex-col grow">
                {children}
              </motion.div>
            </MainEditor>
          </NuqsAdapter>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--primary)',
                border: '1px solid var(--border-editor)',
                color: 'var(--foreground)',
                fontFamily: 'Fira Code, monospace',
              },
              classNames: {
                success: '[&>svg]:text-accent-2',
                error: '[&>svg]:text-accent-3',
              }
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
