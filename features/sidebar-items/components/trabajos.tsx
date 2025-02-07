"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getProjectsByFilter } from "../actions/getProjectsByFilter"
import useProjectsStore from "../stores/useProjectsStore"

export default function Trabajos() {

    const defaultFilters = [
        { label: "Todos", value: "all", checked: true },
        { label: "React", value: "react", icon: "/images/react.svg", checked: false },
        { label: "HTML", value: "html", icon: "/images/html.svg", checked: false },
        { label: "CSS", value: "css", icon: "/images/css.svg", checked: false },
        { label: "JavaScript", value: "javascript", icon: "/images/javascript.svg", checked: false },
        { label: "TypeScript", value: "typescript", icon: "/images/typescript.svg", checked: false },
        { label: "Next.js", value: "nextjs", icon: "/images/nextjs.svg", checked: false },
        { label: "Tailwind CSS", value: "tailwindcss", icon: "/images/tailwindcss.svg", checked: false },
        { label: "Node.js", value: "nodejs", icon: "/images/nodejs.svg", checked: false },
        { label: "Express.js", value: "expressjs", icon: "/images/expressjs.svg", checked: false },
        { label: "MongoDB", value: "mongodb", icon: "/images/mongodb.svg", checked: false },
        { label: "PostgreSQL", value: "postgresql", icon: "/images/postgresql.svg", checked: false },
    ]

    const [filters, setFilters] = useState(defaultFilters)
    const [selectedFilters, setSelectedFilters] = useState<any[]>([])
    const { setProjects } = useProjectsStore()

    useEffect(() => {
        const getProjectsInitial = async () => {
            const { error, payload } = await getProjectsByFilter(["all"])

            if (error) {
                console.log("🚀 ~ Trabajos ~ error:", error)
                return
            }

            setProjects(payload as any[])
        }
        getProjectsInitial()
    }, [])

    const handleChange = async (e: any) => {
        let newFilters = [...filters]
        const filter = newFilters.find((f) => f.value === e.target.value)

        if (!filter) return

        if (e.target.value === "all") {
            newFilters = defaultFilters.map((f) => ({ ...f, checked: e.target.checked }))
            setSelectedFilters(!e.target.checked ? [] : newFilters)
        } else {
            filter.checked = !filter.checked
        }

        const selectedFilters = newFilters.filter((f) => f.checked).map((f) => f.value)

        setFilters(newFilters)
        setSelectedFilters(selectedFilters)
        const { error, payload } = await getProjectsByFilter(selectedFilters)

        if (error) {
            console.log("🚀 ~ Trabajos ~ error:", error)
            return
        }

        setProjects(payload as any[])
    }

    return (
        <div className="flex flex-col gap-4">
            {filters.map((filter) => (
                <div key={filter.value} className="flex items-center gap-4">
                    <input type="checkbox" value={filter.value} className="size-4 accent-accent-2" onChange={handleChange} checked={filter.checked} />
                    {filter.icon && <Image src={filter.icon} alt={filter.label} width={20} height={20} className="aspect-square" />}
                    <label>{filter.label}</label>
                </div>
            ))}
        </div>
    )
}