"use client";

import { useEffect, useRef } from "react";

// The image is rendered 30% taller than the section (15% overflow off
// each edge — see .billboard-image) and shifted vertically based on
// scroll position, so it visually moves slower than the page as the
// section passes through the viewport. Uses transform (not
// background-position) so it's GPU-composited, and a scroll listener
// rather than background-attachment:fixed, which doesn't work on iOS
// Safari.
export default function Billboard() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = section?.querySelector<HTMLElement>(".billboard-image");
    if (!section || !image) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const range = rect.height * 0.15;

      // -1 when the section is about to enter from below, 0 when
      // centred in the viewport, +1 when about to leave above.
      const progress =
        (vh / 2 - (rect.top + rect.height / 2)) /
        (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));

      image.style.transform = `translateX(-50%) translateY(${(clamped * range).toFixed(1)}px)`;
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

  return (
    <section
      className="section-billboard"
      role="img"
      aria-label="Billboard reading 'Your story starts here' — Squad, hospitality talent scouts"
      ref={sectionRef}
    >
      <div className="billboard-image" aria-hidden="true" />
    </section>
  );
}
