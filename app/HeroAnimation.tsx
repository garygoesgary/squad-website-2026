"use client";

import { useEffect, useRef } from "react";

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animation: ReturnType<
      typeof import("lottie-web").default.loadAnimation
    > | null = null;
    let cancelled = false;

    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled || !container) return;
      animation = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/hero.json",
      });
    });

    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, []);

  return (
    <div
      className="hero-animation"
      ref={containerRef}
      aria-hidden="true"
    />
  );
}
