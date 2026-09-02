"use client";

import { useEffect } from "react";

export default function HeroParallax() {
  useEffect(() => {
    const media = document.querySelector<HTMLElement>(".hero-media");
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!media || !hero) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    // .hero-media's bleed room (from its -12% inset) scales with .hero's
    // own height, which itself changes across breakpoints (e.g. the
    // shorter tablet banner) — so the parallax clamp has to be measured,
    // not a fixed pixel value, or it'll reveal a gap on shorter heroes.
    let maxOffset = 0;

    function measure() {
      maxOffset = hero!.getBoundingClientRect().height * 0.12;
    }

    let ticking = false;

    function update() {
      ticking = false;
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY * 0.25, maxOffset);
      media!.style.transform = `translate3d(0, ${offset}px, 0)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    function onResize() {
      measure();
      update();
    }

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
