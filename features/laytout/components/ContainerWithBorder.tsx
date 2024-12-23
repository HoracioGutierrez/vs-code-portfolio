"use client"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React, { ComponentClass, FunctionComponent } from "react"

type ContainerWithBorderProps = {
  asChild?: boolean
  as?: string | ComponentClass<any, any> | FunctionComponent<any>
  children?: React.ReactNode
  className?: string
  variant?: "default" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right",
  [key: string]: any
}

function ContainerWithBorder({ as = "div", children, className, variant = "default", ...props }: ContainerWithBorderProps) {

  const containerWithBorderClasses = cn([
    "border-muted-foreground/50 bg-primary text-foreground",
    {
      "border": variant === "default",
      "border-t": variant === "top",
      "border-b": variant === "bottom",
      "border-l": variant === "left",
      "border-r": variant === "right",
      "border-tl": variant === "top-left",
      "border-tr": variant === "top-right",
      "border-bl": variant === "bottom-left",
      "border-br": variant === "bottom-right",
    },
    className
  ])

  const asElement = React.createElement(motion(as), { className: containerWithBorderClasses, ...props }, children)

  return asElement

}

export default ContainerWithBorder