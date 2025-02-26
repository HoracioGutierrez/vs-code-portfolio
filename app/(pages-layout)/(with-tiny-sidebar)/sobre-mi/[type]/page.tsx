import Link from "next/link";
import { Folder } from "lucide-react";

async function SobreMiPage() {

  return (
    <div className="flex grow items-center justify-center p-8">
      <div className="flex flex-col gap-8 p-8 border border-muted-foreground/50 rounded-lg max-w-3xl w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-accent-2  transition-opacity">Sobre Mi</h1>
          <h2 className="text-lg text-muted-foreground  transition-opacity">Conocé un poco más sobre quien soy</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h3 className="text-base mb-4 text-accent-1 opacity-50 hover:opacity-100 transition-opacity">Start</h3>
            <div className="flex flex-col gap-2">
              <Link href="/sobre-mi/personal/bio" className="flex items-center gap-2 text-accent-2 opacity-50 hover:opacity-100 transition-opacity">
                <Folder className="w-5 h-5 text-accent-1  fill-accent-1" />
                <span className="text-sm">Bio</span>
              </Link>
              <Link href="/sobre-mi/personal/intereses" className="flex items-center gap-2 text-accent-2 opacity-50 hover:opacity-100 transition-opacity">
                <Folder className="w-5 h-5 text-accent-1  fill-accent-1" />
                <span className="text-sm">Intereses</span>
              </Link>
              <Link href="/sobre-mi/personal/educacion" className="flex items-center gap-2 text-accent-2 opacity-50 hover:opacity-100 transition-opacity">
                <Folder className="w-5 h-5 text-accent-1  fill-accent-1" />
                <span className="text-sm">Educación</span>
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-base mb-4 text-accent-1 opacity-50 hover:opacity-100 transition-opacity">Recent</h3>
            <div className="flex flex-col gap-2">
              <Link href="/sobre-mi/profesional/experiencia" className="flex items-center gap-2 text-accent-2 opacity-50 hover:opacity-100 transition-opacity">
                <Folder className="w-5 h-5 text-accent-2 fill-accent-2" />
                <span className="text-sm">Experiencia</span>
              </Link>
              <Link href="/sobre-mi/profesional/habilidades" className="flex items-center gap-2 text-accent-2 opacity-50 hover:opacity-100 transition-opacity">
                <Folder className="w-5 h-5 text-accent-2 fill-accent-2" />
                <span className="text-sm">Habilidades</span>
              </Link>
              <Link href="/sobre-mi/profesional/proyectos" className="flex items-center gap-2 text-accent-2 opacity-50 hover:opacity-100 transition-opacity">
                <Folder className="w-5 h-5 text-accent-2 fill-accent-2" />
                <span className="text-sm">Proyectos</span>
              </Link>
            </div>
          </div>

          <div className="col-span-2">
            <h3 className="text-base mb-4 text-accent-1 opacity-50 hover:opacity-100 transition-opacity">Otros</h3>
            <div className="flex flex-col gap-2">
              <Link href="/sobre-mi/hobbies/vide-juegos" className="flex items-center gap-2 text-accent-2 opacity-50 hover:opacity-100 transition-opacity">
                <Folder className="w-5 h-5 text-accent-3 fill-accent-3" />
                <span className="text-sm">Video Juegos</span>
              </Link>
              <Link href="/sobre-mi/hobbies/viajes" className="flex items-center gap-2 text-accent-2 opacity-50 hover:opacity-100 transition-opacity">
                <Folder className="w-5 h-5 text-accent-3 fill-accent-3" />
                <span className="text-sm">Viajes</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMiPage;
