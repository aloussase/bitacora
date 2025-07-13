# AGENTS.md - Development Guidelines

## Build & Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## Project Structure
- This is an Astro + Starlight documentation site
- Content files in `src/content/docs/` (Markdown/MDX)
- Assets in `src/assets/`
- Configuration in `astro.config.mjs`

## Code Style
- TypeScript strict mode enabled (extends astro/tsconfigs/strict)
- Use ES modules (type: "module" in package.json)
- Astro component conventions for .astro files
- MDX for documentation with frontmatter

## Content Guidelines
- Document files should use .md or .mdx extensions
- Place documentation in `src/content/docs/` directory
- Use frontmatter for metadata in documentation
- Follow existing sidebar structure in astro.config.mjs

## Testing
- No specific test framework configured
- Verify builds with `npm run build`
- Check preview with `npm run preview`