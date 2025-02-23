import { cn } from "@/lib/utils";
import Link from "next/link";

function HomePage() {
  return (
    <div
      className={cn(
        "grid place-content-center col-start-1 -col-end-1 row-start-2 row-end-5"
      )}
    >
      <div className="flex flex-col gap-20 px-4">
        <div>
          <p className="text-sm lg:text-base transition-all">Hola, soy</p>
          <h1 className="text-4xl lg:text-6xl transition-all">
            Horacio Gutierrez
          </h1>
          <p className="text-xl lg:text-3xl text-accent-1 font-bold transition-all">{`> Full-stack Developer`}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm lg:text-base">{`// complete el juego para continuar`}</p>
          <p className="text-muted-foreground text-sm lg:text-base">{`// también podes ir a ver el código`}</p>
          <p className="flex gap-2 flex-wrap text-sm lg:text-base">
            <span className="text-accent-1">const</span>
            <span className="text-accent-2">githubLink</span>
            <span>=</span>
            <Link
              href="https://github.com/HoracioGutierrez"
              target="_blank"
              className="text-accent-3 break-words"
            >
              <span className="sm:hidden">&quot;https://github.com/</span>
              <br className="sm:hidden" />
              <span className="sm:hidden">HoracioGutierrez&quot;</span>
              <span className="hidden sm:inline">
                &quot;https://github.com/HoracioGutierrez&quot;
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
