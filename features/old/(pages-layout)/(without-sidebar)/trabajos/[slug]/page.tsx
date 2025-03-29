import { getProjectBySlug } from "@/features/trabajos/actions/getProjectBySlug";
import Image from "next/image";
import Link from "next/link";

type TrabajosPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: TrabajosPageProps) {
  const { slug } = await params;
  const { payload } = await getProjectBySlug(slug);

  return (
    <div
      className={
        "col-start-1 -col-end-1 row-start-2 row-end-5 p-4 xl:p-20 w-full grid md:grid-cols-2 gap-8 md:gap-0"
      }
    >
      <div className="self-center">
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="font-black text-4xl">{payload.title}</h2>
          <p className="text-muted-foreground/50 text-sm balance">
            {payload.subtitle}
          </p>
        </div>
        <p className="text-muted-foreground mb-6 text-balance">
          {payload.description}
        </p>
        <Link
          className="!text-sm !bg-muted-foreground/30 !py-2.5 !px-3 !rounded-lg !w-fit !cursor-pointer"
          href={payload.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          _ir-al-proyecto
        </Link>
      </div>
      <div className="self-center">
        <Image
          src={`/images/trabajos/${payload.slug}/laptop.png`}
          width={700}
          height={700}
          alt={payload.title}
          quality={100}
          className="justify-self-center"
        />
      </div>
    </div>
  );
}
