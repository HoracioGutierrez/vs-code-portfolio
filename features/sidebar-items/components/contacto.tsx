import { Mail, Phone } from "lucide-react";
import { SocialLink } from "@/features/shared/components/SocialLink";
import { CONTACT_INFO, CONTACT_LINKS } from "@/features/contacto/constants/contact";

export default function Contacto() {
    return (
        <div className="flex flex-col gap-4">
            <SocialLink
                href={CONTACT_LINKS.email}
                icon={Mail}
                label={CONTACT_INFO.email}
            />
            <SocialLink
                href={CONTACT_LINKS.phone}
                icon={Phone}
                label={CONTACT_INFO.phone}
            />
        </div>
    )
}