"use client"

import * as React from "react"
import { Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button onClick={toggleTheme} className="dark:stroke-foreground dark:text-foreground" variant="outline">
      <Sun />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )

}
