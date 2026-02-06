# VS Code Portfolio

Portfolio personal con tema Visual Studio Code, desarrollado por **Horacio Gutierrez**.

## Tech Stack

| Capa | Tecnologias |
|------|-------------|
| **Framework** | Next.js 15 (App Router, Server Components, Turbopack) |
| **UI** | React 19, Tailwind CSS 4, Radix UI, Framer Motion, GSAP |
| **State** | Zustand, nuqs (URL search params) |
| **Backend** | Supabase (PostgreSQL + Auth via SSR cookies) |
| **AI** | Vercel AI SDK, Google Gemini 1.5 Flash, OpenAI |
| **Editor** | CodeMirror 6 (syntax highlighting + tema custom) |
| **Validacion** | Zod |
| **Deploy** | Vercel |

## Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                          VERCEL                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                   Next.js 15 App Router                   │  │
│  │                                                           │  │
│  │  ┌─────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │  │
│  │  │  Home    │  │ Trabajos │  │ Sobre mi │  │ Contacto │  │  │
│  │  │ (landing)│  │ [slug]   │  │ [file]   │  │  (form)  │  │  │
│  │  └────┬────┘  └────┬─────┘  └──────────┘  └────┬─────┘  │  │
│  │       │             │                           │         │  │
│  │       ▼             │                           │         │  │
│  │  ┌──────────┐       │                           │         │  │
│  │  │ AI Code  │       │                           │         │  │
│  │  │ Review   │       │                           │         │  │
│  │  │ Game     │       │                           │         │  │
│  │  └────┬─────┘       │                           │         │  │
│  │       │             │                           │         │  │
│  │       ▼             ▼                           ▼         │  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │              Server Actions + Services             │   │  │
│  │  │         (action → service → data layers)           │   │  │
│  │  └───────────────────────┬────────────────────────────┘   │  │
│  └──────────────────────────┼────────────────────────────────┘  │
│                             │                                   │
└─────────────────────────────┼───────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
     ┌──────────────┐ ┌─────────────┐ ┌─────────────┐
     │   Supabase   │ │ Google AI   │ │  OpenAI     │
     │  PostgreSQL  │ │ Gemini 1.5  │ │  (API)      │
     │  + Auth SSR  │ │ Flash       │ │             │
     └──────────────┘ └─────────────┘ └─────────────┘
```

## Estructura del Proyecto

```
app/                          # Rutas (App Router)
├── api/codereview/           # Endpoint AI code review
├── sobre-mi/[file]/          # Secciones bio dinamicas
├── contacto/                 # Formulario de contacto
├── trabajos/[slug]/          # Detalle de proyectos
└── layout.tsx                # Layout raiz con ThemeProvider

features/                     # Feature-based architecture
├── landing/                  # Home: animaciones + AI game
├── layout/                   # Sistema de layout VS Code
│   ├── components/           # Editor, header, footer, sidebar
│   ├── stores/               # useLayout (Zustand)
│   └── hooks/                # Hooks reutilizables
├── sidebar-items/            # Filtro y listado de proyectos
├── sobre-mi/                 # Secciones: educacion, experiencia, hobbies
├── trabajos/                 # Detalle de trabajos
├── contacto/                 # Form + preview de codigo en vivo
├── shared/                   # Utilidades, tipos y constantes compartidas
└── ui/                       # Componentes base (Radix + shadcn/ui)

supabase/                     # Clientes Supabase (server + client)
lib/                          # Utilidades y temas CodeMirror
```

Cada feature sigue el patron **action → service → data**:

- **Data**: queries directas a Supabase
- **Service**: logica de negocio
- **Action**: server actions con respuesta tipada (`ActionResponse<T>`)

## Features

- **UI VS Code**: layout completo con header, sidebar, editor, footer y bordes animados
- **Trabajos**: showcase de proyectos con filtro por tecnologia (nuqs + Supabase)
- **Sobre mi**: acordeon de carpetas con educacion, experiencia y hobbies
- **Contacto**: formulario dual-panel con preview de codigo en vivo (CodeMirror)
- **AI Code Review**: juego interactivo con Gemini que revisa codigo y responde en espanol rioplatense
- **Animaciones**: Framer Motion + GSAP para transiciones y textos animados
- **Dark mode**: soporte completo via next-themes

## Variables de Entorno

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
GOOGLE_GENERATIVE_AI_API_KEY=
OPENAI_API_KEY=
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (Turbopack)
npm run dev

# Build de produccion
npm run build

# Lint
npm run lint
```
