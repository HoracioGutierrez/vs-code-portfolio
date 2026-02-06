import { ExternalLink } from "lucide-react";
import { SocialLink } from "@/features/shared/components/SocialLink";

export default function EncontrameEn() {
    return (
        <div className="flex flex-col gap-4">
            <SocialLink href="https://github.com/HoracioGutierrez" icon={ExternalLink} label="Github" />
            <SocialLink href="https://x.com/HoraGutierrez" icon={ExternalLink} label="X (Twitter)" />
            <SocialLink href="https://instagram.com/HoraGutierrez" icon={ExternalLink} label="Instagram" />
        </div>
    )
}
