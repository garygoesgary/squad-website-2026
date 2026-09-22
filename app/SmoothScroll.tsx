"use client";

import { useEffect } from "react";

// CSS `scroll-behavior: smooth` has no way to tune duration/easing —
// it's quite quick and abrupt on most browsers. This intercepts clicks
// on in-page anchor links and animates the scroll manually instead:
// slower, with an ease-in-out curve.
const DURATION_MS = 900;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.("a[href^='#']");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      if (href.length < 2) return; // bare "#"

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const startY = window.scrollY;
      const style = getComputedStyle(target as HTMLElement);
      const marginTop = parseFloat(style.scrollMarginTop) || 0;
      const targetY =
        (target as HTMLElement).getBoundingClientRect().top +
        startY -
        marginTop;
      const distance = targetY - startY;

      if (reduceMotion || distance === 0) {
        window.scrollTo(0, targetY);
        history.pushState(null, "", href);
        return;
      }

      let startTime: number | null = null;
      const step = (time: number) => {
        if (startTime === null) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / DURATION_MS, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          history.pushState(null, "", href);
        }
      };
      requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
