"use client";

import { useEffect, useRef } from "react";

// Parallax only at desktop widths (>=1024px — matches the breakpoint
// where .hero-media already switches to the desktop crop and where
// its oversized/parallax sizing kicks in via globals.css). Mobile and
// tablet stay exactly as before, no transform ever applied there.
const DESKTOP_BREAKPOINT = 1024;

export default function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      if (window.innerWidth < DESKTOP_BREAKPOINT) {
        el.style.transform = "";
        return;
      }

      // Same progress-based technique as Billboard.tsx: measure the
      // (normal-sized) section, not the oversized image itself, so the
      // range stays consistent regardless of how much extra height
      // the image carries for the parallax reserve.
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const range = rect.height * 0.15;
      const progress =
        (vh / 2 - (rect.top + rect.height / 2)) /
        (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));

      el.style.transform = `translateY(${(clamped * range).toFixed(1)}px)`;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="hero-media" aria-hidden="true" ref={ref} />;
}
