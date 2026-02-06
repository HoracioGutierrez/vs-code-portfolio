import { Mail, Phone } from "lucide-react";
import { SocialLink } from "@/features/shared/components/SocialLink";

export default function Contacto() {
    return (
        <div className="flex flex-col gap-4">
            <SocialLink
                href="mailto:horacio.estevez@gmail.com"
                icon={Mail}
                label="horacio.estevez@gmail.com"
            />
            <SocialLink
                href="tel:1135069607"
                icon={Phone}
                label="1135069607"
            />
        </div>
    )
}