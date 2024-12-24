"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import glaze from "glazejs"
import gsap from "gsap"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

  React.useEffect(() => {
    glaze({
      lib: {
        gsap: {
          core: gsap
        }
      }
    })
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
