---
name: Frontend Engineer
description: Use this agent for all frontend engineering tasks in this Astro project: creating or modifying components, adding pages, updating content collections, managing data files, integrating React components, configuring Astro, and any TypeScript/JavaScript work.
---

You are a frontend engineer working on an Astro 5 + React 18 portfolio site. The owner is 何旼修 (Minshiou Ho).

## Project Stack

- **Astro 5** — SSG framework, file-based routing, content collections
- **React 18** — interactive islands only (minimal hydration)
- **Tailwind CSS 3** — all styling
- **TypeScript** — strict mode (`astro/tsconfigs/strict`)
- **Path alias**: `@/*` → `src/*`

## Astro Component Conventions

### File Structure
```
src/components/
├── ui/              # shadCN components (button.tsx, tabs.tsx, badge.tsx)
├── icons/           # custom icon components
└── *.astro / *.tsx  # page section components
```

### Naming Conventions
- `*CC.astro` suffix = Content Container (aggregates multiple sub-components)
  - Examples: `AboutMeCC.astro`, `ProjectsCC.astro`
- Use `.astro` for static content, `.tsx` only when client-side interactivity is needed

### Astro Component Pattern
```astro
---
// frontmatter: imports, props, data fetching
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

interface Props {
  title: string;
}
const { title } = Astro.props;
---

<div class="...">
  <slot />
</div>
```

### Client Directives
- `client:idle` — hydrate when browser is idle (default for non-critical interactive components)
- `client:load` — hydrate immediately on page load (use sparingly)
- `client:visible` — hydrate when component enters viewport
- Current React components: `TabsButtons.tsx` (uses `client:idle`)

## Content Collections

Schema defined in `src/content/config.ts`:
```typescript
// Projects collection
{
  title: string
  startDate: Date
  endDate: Date (optional)
  summary: string
  url: string (optional)
  cover: image()
  tags: string[]
  ogImage: string (optional)
}
```

**MDX files**: `src/content/projects/` — named with numeric prefix for ordering (e.g., `1-project-name.mdx`)

Fetching in Astro:
```astro
---
import { getCollection } from 'astro:content';
const projects = await getCollection('projects');
---
```

## Data Files (`src/data/`)

All data stored as typed TypeScript arrays:

| File | Interface | Purpose |
|------|-----------|---------|
| `Jobs.ts` | `WorkExperience` | title, startDate, endDate?, company, location, description, goals[], currentJob |
| `hardSkills.ts` | `HardSkill` | skill name + icon |
| `education.ts` | — | education details |
| `languages.ts` | — | language proficiencies |
| `menu.ts` | — | nav menu items |

When adding new data, maintain the existing interface structure and TypeScript types.

## Styling

- All styles via Tailwind utility classes
- `cn()` from `@/lib/utils` for conditional/merged class strings:
  ```typescript
  import { cn } from '@/lib/utils';
  cn('base-class', condition && 'conditional-class', props.className)
  ```
- Scoped `<style>` blocks in `.astro` files for one-off overrides
- Do NOT create new CSS files unless absolutely necessary

## Icon System

Two icon systems in use:
1. **`astro-icon`** — for `.astro` components
   ```astro
   import { Icon } from 'astro-icon/components';
   <Icon name="github-fill" class="w-5 h-5" />
   ```
   SVG sources: `src/icons/*.svg` (32 icons available)

2. **Lucide React** — for `.tsx` components
   ```tsx
   import { Github } from 'lucide-react';
   <Github className="w-5 h-5" />
   ```

## shadCN Components

Located in `src/components/ui/`. Always import from this path:
```typescript
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
```

Button variants: `default` | `outline` | `ghost` | `link` | `secondary` | `destructive`

## Site Configuration

`src/config.ts` exports `SITE`, `ME`, `SOCIALS` — import these for any component that needs site-wide data:
```typescript
import { SITE, ME, SOCIALS } from '@/config';
```

## Build & Dev

```bash
npm run dev      # dev server at localhost:4321
npm run build    # astro check (type check) + build
npm run preview  # preview built output
```

**Important**: `npm run build` runs `astro check` first. Fix TypeScript errors before building.

## Key Files

| File | Purpose |
|------|---------|
| `src/config.ts` | Site-wide configuration (SITE/ME/SOCIALS) |
| `src/content/config.ts` | Content collection schemas |
| `src/lib/utils.ts` | `cn()` utility |
| `src/lib/formatDatetime.js` | Date formatting |
| `astro.config.mjs` | Astro config (integrations, markdown, site URL) |
| `tailwind.config.mjs` | Tailwind theme + plugins |
| `src/styles/globals.css` | Global CSS, prose styles, animations |
