# Squad Brand Colours

Source: [Squad Playbook 2026](https://www.figma.com/design/qGkABPztzm6fHVI65IqGN3/Squad-Playbook-2026?node-id=28-1094) (Figma variables, `brand/` collection).

| Name | Token | Hex |
|---|---|---|
| Molten Red | `brand/molten-red` | `#ff1414` |
| Volcanic Red | `brand/volcanic-red` | `#d5121b` |
| Dark Ash | `brand/dark-ash` | `#2e2a2a` |
| White | `brand/white` | `#ffffff` |
| Burnt Red | `brand/burnt-red` | `#720008` |
| Dusk Red | `brand/dusk-red` | `#a5000c` |
| Sandstone | `brand/sandstone` | `#ebe2db` |
| Sand | `brand/sand` | `#fdf7f3` |

## CSS custom properties

```css
:root {
  --brand-molten-red: #ff1414;
  --brand-volcanic-red: #d5121b;
  --brand-dark-ash: #2e2a2a;
  --brand-white: #ffffff;
  --brand-burnt-red: #720008;
  --brand-dusk-red: #a5000c;
  --brand-sandstone: #ebe2db;
  --brand-sand: #fdf7f3;
}
```

Pull directly from Figma variables again with `get_variable_defs` if the Playbook file's palette changes — don't hand-guess hex values from screenshots.

# Logo

[`public/images/squad-logo-variants-sheet.svg`](public/images/squad-logo-variants-sheet.svg) — saved from `Squad-logo-2026.svg` on the desktop.

This is a full lockup sheet, not a single ready-to-use mark: it contains several variants at different scales in one file — the red-badge/white-wordmark lockup, a reversed dark-text-on-light version, and a small "s." monogram icon. Which variant goes where is not decided automatically — use whichever one is uploaded/specified for a given placement.

Also saved, the two clean lockup exports (white wordmark + tagline on red, no extra variants baked in):
- [`public/images/squad-logo-lockup-1-line.svg`](public/images/squad-logo-lockup-1-line.svg) — tagline on one line
- [`public/images/squad-logo-lockup-2-line.svg`](public/images/squad-logo-lockup-2-line.svg) — tagline wraps to two lines

Badge-only mark (no tagline baked in, 142×62), used in the nav bar next to a separate "hospitality talent scouts" text element:
- [`public/images/logo-badge.svg`](public/images/logo-badge.svg) — pulled from the "Website" Figma file's nav (node 25:424, named "Layer_1"); the nav's actual "Logo Container" layer (25:403) is broken/empty in the file, same pattern as other logo nodes there — this Layer_1 sibling is the one that's real.

# Service/sector icons

Nine icons representing Squad's offerings, saved as-is from the desktop into [`public/images/icons/`](public/images/icons/):

- `icon-education.svg`
- `icon-restaurants.svg`
- `icon-events.svg`
- `icon-mining-camps.svg`
- `icon-remote-locations.svg`
- `icon-aged-care-healthcare.svg`
- `icon-pubs-clubs.svg`
- `icon-catering.svg`
- `icon-hotel-and-resorts.svg`

150×150 viewBox, single-colour (black) line/fill icons with no colour styling applied — recolour via CSS `fill` when used, don't assume a colour.

# Photography

Hero photo, source `Squad-Chef-Large-RGB.webp` (chef in a dark restaurant kitchen, lifting a lid off a steaming pot beside an open flame, replaced 2026-09-22) — cropped per breakpoint from the same source image so the same photo is consistent across all three:

- [`public/images/squad-image_Chef.webp`](public/images/squad-image_Chef.webp) — desktop, client-supplied crop `Squad-Chef-Desktop.webp`, 2434×1654, replaced 2026-09-27 (second replacement same day — refined grade/lighting, supersedes the earlier version from that day)
- [`public/images/hero-tablet.webp`](public/images/hero-tablet.webp) — tablet, 1200×500 (banner) — unchanged
- [`public/images/hero-mobile.webp`](public/images/hero-mobile.webp) — mobile, client-supplied crop `Squad-Chef-Mobile.webp`, 1080×1350 (4:5 portrait), replaced 2026-09-27 (second replacement same day — supersedes the version from earlier that day)

[`public/images/billboard-street.webp`](public/images/billboard-street.webp) — "YOUR STORY STARTS HERE" billboard mockup on a brick wall (same street photo location as the earlier "Brisbane we got you" version, replaced 2026-09-22). 2000×1390 source, displayed full-bleed via `background-size: cover` at a 1440:740 aspect ratio, matching the design's frame.

# Client logos

[`public/images/clients/`](public/images/clients/) — pulled from the "Website" Figma file's clients carousel (node 78:299), used by [ClientsCarousel.tsx](app/ClientsCarousel.tsx). All are the designer's real placed assets (Figma's own exports), not re-sourced independently:

- `agnes.png`, `calile.png`, `evt.png`, `discovery.png`, `crystalbrook.png`, `waymark.png` — raster (transparent background)
- `star.svg`, `w-hotels.svg`, `dap-and-co.svg` — real vector exports (stripped of the card background/blur baked into Figma's export, so they layer cleanly under the site's own `.carousel-cell` glass-card styling)

# Image gallery (placeholder)

Auto-scrolling gallery ([Gallery.tsx](app/Gallery.tsx), Figma node 132:346), sits between Services and the "Download the app" section. **No real photography has been supplied for this yet** — Figma itself only shows plain grey (`#d9d9d9`) placeholder rectangles, so the six cells here are numbered placeholder `<div>`s, not `<img>` tags. Full-bleed, 515×335 cells with zero gap, matching the design. Swap each placeholder for `<img src="...">` when real photos are supplied — the sizing/no-gap CSS on `.gallery-cell` won't need to change. Same auto-scroll + touch-pause mechanics as ClientsCarousel, plus red circular prev/next arrows (styled like the hero's `.scroll-arrow`) that smooth-scroll by one cell width.

# Squad app section

"Download the NEW Squad app" ([SquadApp.tsx](app/SquadApp.tsx), Figma node 132:280), sits directly above the clients carousel, reusing Services' 3-column grid (heading / details+badges / empty). Badge assets pulled from that Figma node, not re-sourced from Apple/Google directly:

- [`public/images/app-store-badge.png`](public/images/app-store-badge.png) — flattened PNG (119×35). The badge is composed of 5 separately-transformed vector layers in Figma with no single clean SVG export available, so this is Figma's own flattened render of that exact node rather than a hand-reassembled approximation.
- [`public/images/google-play-badge.svg`](public/images/google-play-badge.svg) — real vector export. **Note:** the source SVG is stored pre-flipped by Figma (its own generated code wraps it in a `rotate(180deg) scaleX(-1)` correction) — that same corrective transform is applied via `.app-badges img.google-play-badge` in globals.css. Don't remove it without checking the badge still reads right-side up.

The body copy under "Quick online booking for jobs" is word-for-word identical to the "Long-term temporary personnel" service item's paragraphs — this reads as leftover/duplicated placeholder text in the Figma file (mismatched to an app-booking heading), not real app copy. Flagged to the client; swap in real copy when supplied.

# Acknowledgement of Country flags

Footer flag row (above the Acknowledgement of Country text, [Footer.tsx](app/Footer.tsx)) — client-supplied files, not hand-drawn (an earlier hand-built SVG version was replaced 2026-09-25):

- [`public/images/flag-australia.webp`](public/images/flag-australia.webp)
- [`public/images/flag-aboriginal.webp`](public/images/flag-aboriginal.webp)
- [`public/images/flag-torres-strait-islander.webp`](public/images/flag-torres-strait-islander.webp)

All three 300×150 (2:1).
