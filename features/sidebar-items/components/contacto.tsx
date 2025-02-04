import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Contacto() {
    return (
        <div className="flex flex-col gap-4">
            <Link href="mailto:horacio.estevez@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-white" target="_blank">
                <Mail className="size-4" />
                <span>horacio.estevez@gmail.com</span>
            </Link>
            <Link href="tel:1135069607" className="flex items-center gap-2 text-muted-foreground hover:text-white" target="_blank">
                <Phone className="size-4" />
                <span>1135069607</span>
            </Link>
        </div>
    )
}