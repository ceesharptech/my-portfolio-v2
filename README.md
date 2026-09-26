# Eniola — portfolio

A responsive single-page portfolio for Eniola, a frontend engineer. The layout follows the supplied desktop and mobile reference screenshots: fixed desktop navigation, profile introduction, project previews, About collage, expandable Skills and Stack folders, Experience, Testimonials, contact form, and mobile navigation overlay.

Built with Next.js, TypeScript, Tailwind CSS, Geist, Phosphor icons, and `@dev.icons/react`. Page sections live in `src/sections`, reusable portfolio UI lives in `src/components/portfolio`, and the editable portfolio content lives in `src/data/portfolio.ts`. Global CSS is limited to Tailwind's import and theme tokens.

Project previews and collage cards are image placeholders to replace with your assets. Sample project content, experience entries, testimonials, email, and social links can be edited in `src/data/portfolio.ts`.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
