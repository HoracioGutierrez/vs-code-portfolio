import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Fira_Code } from "next/font/google";
import MainEditor from "@/components/layout/main-editor";
import MainEditorHeader from "@/components/layout/main-editor-header";
import * as motion from "motion/react-client"
import "./globals.css";
import MainEditorMainSidebar from "@/components/layout/main-editor-main-sidebar";

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horacio Gutierrez - Portfolio",
  description:
    "Portfolio de Horacio Gutierrez, Desarrollador Web Full-Stack en Javascript y Freelancer",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          firaCode.className,
          "min-h-dvh bg-background p-2 md:p-8 lg:p-17 transition-[padding] flex flex-col justify-center items-center overflow-hidden"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainEditor>
            {/* <MainEditorHeader /> */}
            <motion.div initial="hide" animate="show" exit="exit" className="flex flex-col grow">
              {/* <MainEditorMainSidebar /> */}
              {children}
            </motion.div>
          </MainEditor>
        </ThemeProvider>
      </body>
    </html>
  );
}
