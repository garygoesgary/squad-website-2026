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

- [`public/images/squad-image_Chef.webp`](public/images/squad-image_Chef.webp) — desktop, client-supplied crop `Squad-Chef-Desktop.webp`, 2434×1654, replaced 2026-09-30 (latest of several replacements — same scene, refined framing/grade each time)
- [`public/images/hero-tablet.webp`](public/images/hero-tablet.webp) — tablet, 1200×500 (banner) — unchanged
- [`public/images/hero-mobile.webp`](public/images/hero-mobile.webp) — mobile, client-supplied crop `Squad-Chef-Mobile.webp`, 1080×1350 (4:5 portrait), replaced 2026-09-30 (latest of several replacements)

[`public/images/billboard-street.webp`](public/images/billboard-street.webp) — "TRUST US TO FIND THE BEST." billboard mockup on a brick wall (different street location, replaced earlier "YOUR STORY STARTS HERE" version, 2026-10-07). 3000×2086 source (~1.44:1, essentially the same ratio as the version it replaced), displayed full-bleed via `background-size: cover` at a 1440:740 aspect ratio and parallaxes on scroll (see [Billboard.tsx](app/Billboard.tsx)). Update `aria-label` on that component's `<section>` if the billboard copy changes again — it's not derived from the image automatically.

# Client logos

[`public/images/clients/`](public/images/clients/) — pulled from the "Website" Figma file's clients carousel (node 78:299), used by [ClientsCarousel.tsx](app/ClientsCarousel.tsx). All are the designer's real placed assets (Figma's own exports), not re-sourced independently:

- `agnes.png`, `calile.png`, `evt.png`, `discovery.png`, `crystalbrook.png`, `waymark.png` — raster (transparent background)
- `star.svg`, `w-hotels.svg`, `dap-and-co.svg` — real vector exports (stripped of the card background/blur baked into Figma's export, so they layer cleanly under the site's own `.carousel-cell` glass-card styling)

# Image gallery

Auto-scrolling gallery ([Gallery.tsx](app/Gallery.tsx), Figma node 132:346), sits between Services and the "Download the app" section. Full-bleed, 515×335 cells with zero gap, matching the design.

Real photography (replaced the placeholder rectangles 2026-10-07) — 12 images from the client's "Web Images" folder, saved to [`public/images/gallery/`](public/images/gallery/) as `gallery-1.webp` … `gallery-12.webp`. Source files were already ~1.537:1 (matching the cell's 515:335 ratio almost exactly), center-cropped to that ratio precisely and resized to 1030×670 (2x, for retina) via Pillow, since macOS `sips` can't write webp. Each has descriptive alt text (hotel staff/service photography) rather than a shared generic string.

Auto-scrolls right-to-left (opposite of ClientsCarousel, deliberately — 2026-09-30), draggable with the mouse (native `overflow-x:auto` only supports touch/trackpad/scrollbar dragging, not a mouse click-drag, so `Gallery.tsx` implements it directly via pointer capture), and the red circular arrows (styled like the hero's `.scroll-arrow`) speed the auto-scroll up ~10x while held (with a 1s minimum so a quick click still registers) rather than jumping one image — right arrow boosts forward, left arrow boosts in reverse. Touch-pause mechanics otherwise match ClientsCarousel.

# Squad app section

"Download the NEW Squad app" ([SquadApp.tsx](app/SquadApp.tsx), Figma node 132:280), sits directly above the clients carousel, reusing Services' 3-column grid (heading / details+badges / empty). The divider line originally under Services (`border-bottom`) now sits under this section instead (on `.app-grid`, not `.services-grid`) — moved 2026-09-30. Badge assets pulled from that Figma node, not re-sourced from Apple/Google directly:

- [`public/images/app-store-badge.svg`](public/images/app-store-badge.svg) — real SVG, hand-assembled from Figma's own 5 separately-transformed vector layers (background pill, border stroke, Apple logo, "App Store" text, "Download on the" text) since Figma has no single clean SVG export for this badge. Each layer's position/size was computed from its Figma inset percentage against the shared parent frame, not eyeballed — verified pixel-accurate against Figma's own render. Replaced a flattened PNG version 2026-09-30.
- [`public/images/google-play-badge.svg`](public/images/google-play-badge.svg) — real vector export. **Note:** the source SVG is stored pre-flipped by Figma (its own generated code wraps it in a `rotate(180deg) scaleX(-1)` correction) — that same corrective transform is applied via `.app-badges img.google-play-badge` in globals.css. Don't remove it without checking the badge still reads right-side up.

# Billboard parallax

[Billboard.tsx](app/Billboard.tsx) — the billboard section parallaxes: the image renders 30% taller than its container and shifts vertically (via `transform`, scroll-driven, rAF-throttled) as the section passes through the viewport. Deliberately not `background-attachment: fixed` — that doesn't work on iOS Safari. Respects `prefers-reduced-motion` (skips the effect entirely, image stays centred/static).

[SquadApp.tsx](app/SquadApp.tsx)'s heading and body copy were updated 2026-10-08 with real content from the client (was leftover/duplicated placeholder text copy-pasted from the "Long-term temporary personnel" service item — now genuine app copy). Heading reads "The New Squad booking app…Coming Soon!"; the third body paragraph ("Launching first in South East Queensland…") is bold (`<strong>`).

# Acknowledgement of Country flags

Footer flag row (above the Acknowledgement of Country text, [Footer.tsx](app/Footer.tsx)) — client-supplied files, not hand-drawn (an earlier hand-built SVG version was replaced 2026-09-25):

- [`public/images/flag-australia.webp`](public/images/flag-australia.webp)
- [`public/images/flag-aboriginal.webp`](public/images/flag-aboriginal.webp)
- [`public/images/flag-torres-strait-islander.webp`](public/images/flag-torres-strait-islander.webp)

All three 300×150 (2:1).
