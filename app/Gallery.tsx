"use client";

import { useEffect, useRef } from "react";

// No real photography supplied yet for this section (Figma node
// 132:346 shows plain grey placeholder rectangles) — six placeholder
// cells, numbered so it's obvious where each future image slots in.
// Swap each placeholder div for a real <img src="..."> when photos
// are supplied; the 515x335, no-gap sizing is already set on
// .gallery-cell so nothing else needs to change.
const PLACEHOLDER_COUNT = 6;
const placeholders = Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => i + 1);

// Rendered twice back-to-back for the same seamless-loop technique as
// ClientsCarousel — scrolls from the end of the first set into the
// identical start of the second, then silently wraps back.
const loopedPlaceholders = [...placeholders, ...placeholders];

const CELL_WIDTH = 515;
const PIXELS_PER_SECOND = 60;

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const secondSetStart = track.querySelectorAll<HTMLElement>(
      ".gallery-cell"
    )[placeholders.length];

    // Re-read lazily inside the loop (rather than once at mount) so a
    // layout-timing race on some mobile browsers can't leave this
    // stuck at 0 and silently disable the auto-scroll forever — same
    // fix applied to ClientsCarousel.
    let oneSetWidth = 0;

    let paused = false;
    let lastTime: number | null = null;
    let rafId = 0;

    const tick = (time: number) => {
      rafId = requestAnimationFrame(tick);
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (oneSetWidth <= 0) {
        oneSetWidth = secondSetStart?.offsetLeft ?? 0;
      }

      if (!paused && oneSetWidth > 0) {
        track.scrollLeft += PIXELS_PER_SECOND * dt;
        if (track.scrollLeft >= oneSetWidth) {
          track.scrollLeft -= oneSetWidth;
        }
      }
    };

    // Only a real drag/click pauses the auto-scroll — deliberately
    // ignores prefers-reduced-motion (a slow ambient strip, not a
    // disorienting effect), matching ClientsCarousel.
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    track.addEventListener("pointerdown", pause);
    track.addEventListener("pointerup", resume);
    track.addEventListener("pointerleave", resume);
    track.addEventListener("pointercancel", resume);

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("pointerup", resume);
      track.removeEventListener("pointerleave", resume);
      track.removeEventListener("pointercancel", resume);
    };
  }, []);

  const scrollByCell = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: CELL_WIDTH * direction,
      behavior: "smooth",
    });
  };

  return (
    <div className="gallery">
      <div className="gallery-track" ref={trackRef}>
        {loopedPlaceholders.map((n, i) => (
          <div className="gallery-cell" key={`${n}-${i}`}>
            <span>{n}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="gallery-arrow gallery-arrow-left"
        aria-label="Previous image"
        onClick={() => scrollByCell(-1)}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M15 6l-6 6 6 6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        className="gallery-arrow gallery-arrow-right"
        aria-label="Next image"
        onClick={() => scrollByCell(1)}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 6l6 6-6 6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
