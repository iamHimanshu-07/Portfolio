# Portfolio Website

Personal portfolio for **Himanshu Singh Yadav** — AI/ML Engineer & Full-Stack Developer.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

🌐 **Live:** [himanshu-personal-portfolio.vercel.app](https://himanshu-personal-portfolio.vercel.app/)

---

## Local development

Requires Node.js 18+ and pnpm (or npm/yarn).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

The contact form is wired to [Formspree](https://formspree.io). Set this in `.env.local` before running:

```bash
FORMSPREE_ID=your_formspree_id
```

If `FORMSPREE_ID` is missing, the contact form handler fails loud at startup (by design — a silent broken form is worse than a loud one).

---

## Scripts

| Command       | What it does                          |
| ------------- | ------------------------------------- |
| `pnpm dev`    | Start the dev server with HMR         |
| `pnpm build`  | Production build                      |
| `pnpm start`  | Run the production build              |
| `pnpm lint`   | Run ESLint                            |

---

## Deployment

Pushed to `main` auto-deploys to Vercel. No extra config needed beyond the `FORMSPREE_ID` env var (set in the Vercel dashboard under Project Settings → Environment Variables).

The Vercel project is the one linked to this GitHub repo; the canonical public URL is `himanshu-personal-portfolio.vercel.app`.

---

## Project structure

```
app/          # Next.js App Router entry (layout, page, globals)
components/   # Section components (hero, projects, skills, …) + ui/ primitives
hooks/        # Custom React hooks
lib/          # Shared helpers (cn, etc.)
public/       # Static assets (resume PDF, images, favicons)
```

Content lives entirely in the component files — edit a section's `.tsx` in `components/` to change what shows on the site.

---

## License

[MIT](LICENSE)
