# CocoStamp

> Your Brand, Naturally Refined.

Premium static marketing site for **CocoStamp** — precision laser-engraved coconut drinkware for luxury hospitality.

## Stack

- Single-file static HTML (no build step)
- Inlined critical CSS, deferred JS, lazy-loaded fonts (Cormorant Garamond + Inter)
- SVG-only imagery (placeholder coconut + collection marks — swap for real photography when available)
- Fully responsive: 390 / 768 / 1024 / 1440 px
- WCAG AA, semantic HTML, `prefers-reduced-motion` honored
- JSON-LD `Organization` + `Offer` schema

## Local preview

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push to `main` on a repo named e.g. `cocostamp.github.io` (or any repo with Pages enabled)
2. Settings → Pages → Source: `main` / root
3. The `.nojekyll` file disables Jekyll processing

## Replacing placeholder visuals

The hero coconut and collection grid use inline SVG placeholders. To swap for real photography:

- Hero: replace the `<svg>` inside `.coconut` with `<img src="hero.webp" width="..." height="..." alt="..." fetchpriority="high" decoding="async">`
- Collection: replace each `.coll-img` SVG with a `<picture>` element using WebP

## Brand tokens

| Token | Hex | Usage |
|---|---|---|
| `--palm` | `#1B3022` | Headings, primary surfaces |
| `--sand` | `#F4F1EE` | Background |
| `--umber` | `#5C4033` | Engraving accent, dividers |
| `--copper` | `#B87333` | CTAs, accents |

## Sections

Hero · Collection · Process · Features · Wholesale Pricing · Eco · Contact
