# ArtAbility

Warm, accessible MVP for AI-assisted art education and a creator marketplace supporting special needs children and families.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Lucide React + Framer Motion
- Typed mock data in `src/data`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Identity chooser (Artist/Parent vs Buyer/Public) |
| `/home` | Artist/Parent landing |
| `/register` | Real-name verify (Artist/Parent only) |
| `/learn` | AI courses + online video resources (Artist/Parent only) |
| `/learn/demo` | Interactive AI lesson demo |
| `/marketplace` | Physical & Digital listings (both portals) |
| `/marketplace/[id]` | Artwork detail + revenue split |

## Portals

- **Artist / Kid’s Parent** — Register, Learn (AI courses + YouTube resources), Marketplace
- **Buyer / Public** — Marketplace only (lessons blocked)

## Journey

Register & Verify → AI Learning → Create → Upload → Review → Marketplace → Purchase → Revenue Distribution
