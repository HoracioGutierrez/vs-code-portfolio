import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function EncontrameEn() {
    return (
        <div className="flex flex-col gap-4">
            <Link href="https://github.com/HoracioGutierrez" className="flex items-center gap-2 text-muted-foreground hover:text-white" target="_blank">
                <ExternalLink className="size-4" />
                <span>Github</span>
            </Link>
            <Link href="https://x.com/HoraGutierrez" className="flex items-center gap-2 text-muted-foreground hover:text-white" target="_blank">
                <ExternalLink className="size-4" />
                <span>X (Twitter)</span>
            </Link>
            <Link href="https://instagram.com/HoraGutierrez" className="flex items-center gap-2 text-muted-foreground hover:text-white" target="_blank">
                <ExternalLink className="size-4" />
                <span>Instagram</span>
            </Link>
        </div>
    )
}