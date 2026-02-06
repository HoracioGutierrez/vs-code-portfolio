// Tipo de proyecto desde Supabase
export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  thumbnail: string | null;
  url: string;
  tags: string[];
  created_at?: string;
  updated_at?: string;
};

// Props para trabajos-detail.tsx (server component)
export type TrabajosDetailProps = {
  slug: string;
};

// Props para trabajos-list.tsx (server component)
export type TrabajosListServerProps = {
  stack?: string[] | null;
};

