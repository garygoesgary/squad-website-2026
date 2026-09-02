"use client";

import { useEffect } from "react";

export default function HeroParallax() {
  useEffect(() => {
    const media = document.querySelector<HTMLElement>(".hero-media");
    if (!media) return;

    // Image is mirrored horizontally to match the Figma layout, so the
    // flip has to be baked into every transform write below (inline
    // style writes replace the whole value, they don't merge with CSS).
    const mirror = "scaleX(-1)";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      media.style.transform = mirror;
      return;
    }

    let ticking = false;

    function update() {
      ticking = false;
      const scrollY = window.scrollY;
      // Moves slower than the page (0.25x) and clamps to the bleed room
      // baked into .hero-media's -12% inset, so no gaps show at the edges.
      const offset = Math.min(scrollY * 0.25, 120);
      media!.style.transform = `${mirror} translate3d(0, ${offset}px, 0)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
