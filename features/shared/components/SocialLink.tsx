import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    external?: boolean;
}

export function SocialLink({ href, icon: Icon, label, external = true }: SocialLinkProps) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 text-muted-foreground hover:text-white"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
        >
            <Icon className="size-4" aria-hidden="true" />
            <span>{label}</span>
        </Link>
    );
}
