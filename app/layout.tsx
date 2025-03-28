import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
/* import MainEditor from "@/features/laytout/components/MainEditor"; */
import { Fira_Code } from "next/font/google";
import "./globals.css";
import MainEditor from "@/components/layout/main-editor";
import MainEditorHeader from "@/components/layout/main-editor-header";

const firaCode = Fira_Code({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horacio Gutierrez - Portfolio",
  description:
    "Portfolio de Horacio Gutierrez, Desarrollador Web Full-Stack en Javascript y Freelancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            <MainEditorHeader />
            {children}
          </MainEditor>
        </ThemeProvider>
      </body>
    </html>
  );
}
