"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MainCategoryLinkProps = {
    children: React.ReactNode;
    href: string;
}

export default function MainCategoryLink({ children, href = "/" }: MainCategoryLinkProps) {

    const pathname = usePathname()

    return (
        <Link href={href} className={cn("p-4 text-muted-foreground hover:text-white", pathname === href && "text-white animate-pulse")}>
            {children}
        </Link>
    )
}