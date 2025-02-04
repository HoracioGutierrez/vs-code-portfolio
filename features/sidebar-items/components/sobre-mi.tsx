"use client"
import { usePathname } from "next/navigation"

export default function SobreMi() {

    const pathname = usePathname()
    console.log("🚀 ~ SobreMi ~ pathname:", pathname)

    return (
        <div>sobre-mi</div>
    )
}