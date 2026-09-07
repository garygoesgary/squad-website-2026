"use client";

import { useEffect, useRef } from "react";

const images = [
  "/images/gallery/placeholder-1.webp",
  "/images/gallery/placeholder-2.webp",
  "/images/gallery/placeholder-3.webp",
  "/images/gallery/placeholder-4.webp",
  "/images/gallery/placeholder-5.webp",
  "/images/gallery/placeholder-6.webp",
  "/images/gallery/placeholder-7.webp",
  "/images/gallery/placeholder-8.webp",
];

// Rendered twice back-to-back for the same seamless-wrap trick as the
// clients carousel — the track scrolls from the end of the first set
// into the identical start of the second, then silently resets.
const loopedImages = [...images, ...images];

const PIXELS_PER_SECOND = 40;

export default function ImageGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cells = Array.from(
      track.querySelectorAll<HTMLElement>(".gallery-cell")
    );

    // Width of one full (non-duplicated) set, measured from the DOM.
    const oneSetWidth = cells[images.length]?.offsetLeft ?? 0;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Left-to-right motion means the track scrolls backwards (scrollLeft
    // decreasing) — start partway in so there's room to count down
    // before wrapping back up to oneSetWidth.
    if (oneSetWidth > 0) track.scrollLeft = oneSetWidth;

    let paused = reduceMotion;
    let lastTime: number | null = null;
    let rafId = 0;

    const tick = (time: number) => {
      rafId = requestAnimationFrame(tick);
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (!paused && oneSetWidth > 0) {
        track.scrollLeft -= PIXELS_PER_SECOND * dt;
        if (track.scrollLeft <= 0) {
          track.scrollLeft += oneSetWidth;
        }
      }
    };

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      if (!reduceMotion) paused = false;
    };

    track.addEventListener("pointerdown", pause);
    track.addEventListener("pointerup", resume);
    track.addEventListener("pointerleave", resume);

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("pointerup", resume);
      track.removeEventListener("pointerleave", resume);
    };
  }, []);

  return (
    <div className="image-gallery">
      <div className="gallery-track" ref={trackRef}>
        {loopedImages.map((src, i) => (
          <div className="gallery-cell" key={`${src}-${i}`}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
