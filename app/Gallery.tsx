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

const PIXELS_PER_SECOND = 60;
const BOOST_MULTIPLIER = 10;
// A plain click is a near-instant down+up — without a floor, the
// boost would barely register. Holding past this floor still works
// exactly as before (extends for as long as it's held, stops the
// instant it's released).
const MIN_BOOST_MS = 1000;

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  // -1/0/1: which arrow (if any) is currently boosting, read by the
  // rAF loop every frame. A ref (not state) since it only needs to be
  // read inside the loop, never trigger a re-render.
  const boostRef = useRef<0 | 1 | -1>(0);
  const boostStartRef = useRef(0);
  const boostClearTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

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
        if (oneSetWidth > 0) {
          // Start mid-loop (the two sets are identical, so this looks
          // the same as scrollLeft 0) so the reverse auto-scroll below
          // has room to count down before it ever needs to wrap.
          track.scrollLeft = oneSetWidth;
        }
      }

      if (!paused && oneSetWidth > 0) {
        // Base direction is reversed from before (right-to-left
        // content motion instead of left-to-right); holding an arrow
        // boosts speed, left arrow additionally flips direction back
        // the other way.
        const boost = boostRef.current;
        const delta =
          boost === 1
            ? -PIXELS_PER_SECOND * BOOST_MULTIPLIER * dt
            : boost === -1
              ? PIXELS_PER_SECOND * BOOST_MULTIPLIER * dt
              : -PIXELS_PER_SECOND * dt;

        track.scrollLeft += delta;
        if (track.scrollLeft <= 0) {
          track.scrollLeft += oneSetWidth;
        } else if (track.scrollLeft >= oneSetWidth) {
          track.scrollLeft -= oneSetWidth;
        }
      }
    };

    // Real click-and-drag with the mouse (native overflow-x:auto only
    // supports touch/trackpad/scrollbar dragging, not a mouse drag) —
    // pointer capture keeps the drag going even if the cursor leaves
    // the track mid-drag. Touch still falls through to the browser's
    // own touch-scroll as before (pointercancel fires once it takes
    // over, which still lands on endDrag/resume below).
    let dragging = false;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;

    const startDrag = (e: PointerEvent) => {
      paused = true;
      dragging = true;
      dragStartX = e.clientX;
      dragStartScrollLeft = track.scrollLeft;
      track.setPointerCapture(e.pointerId);
    };
    const onDrag = (e: PointerEvent) => {
      if (!dragging) return;
      track.scrollLeft = dragStartScrollLeft - (e.clientX - dragStartX);
    };
    const endDrag = (e: PointerEvent) => {
      dragging = false;
      paused = false;
      if (oneSetWidth > 0) {
        // Dragging can push scrollLeft into the second (duplicate) set
        // or briefly negative — normalise back into [0, oneSetWidth)
        // so the tick loop's simple wrap check keeps working.
        track.scrollLeft =
          ((track.scrollLeft % oneSetWidth) + oneSetWidth) % oneSetWidth;
      }
      try {
        track.releasePointerCapture(e.pointerId);
      } catch {
        // Pointer capture may already be gone (e.g. after pointercancel).
      }
    };

    track.addEventListener("pointerdown", startDrag);
    track.addEventListener("pointermove", onDrag);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointerleave", endDrag);
    track.addEventListener("pointercancel", endDrag);

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      track.removeEventListener("pointerdown", startDrag);
      track.removeEventListener("pointermove", onDrag);
      track.removeEventListener("pointerup", endDrag);
      track.removeEventListener("pointerleave", endDrag);
      track.removeEventListener("pointercancel", endDrag);
      if (boostClearTimerRef.current) clearTimeout(boostClearTimerRef.current);
    };
  }, []);

  // Hold to speed up (in that arrow's direction); release to return
  // to the normal auto-scroll speed, but never sooner than
  // MIN_BOOST_MS after it started, so a quick click still gives a
  // clearly visible burst rather than an imperceptible blip.
  const startBoost = (direction: 1 | -1) => {
    if (boostClearTimerRef.current) {
      clearTimeout(boostClearTimerRef.current);
      boostClearTimerRef.current = null;
    }
    boostStartRef.current = performance.now();
    boostRef.current = direction;
  };
  const endBoost = () => {
    const elapsed = performance.now() - boostStartRef.current;
    const remaining = MIN_BOOST_MS - elapsed;
    if (remaining > 0) {
      boostClearTimerRef.current = setTimeout(() => {
        boostRef.current = 0;
        boostClearTimerRef.current = null;
      }, remaining);
    } else {
      boostRef.current = 0;
    }
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
        aria-label="Speed up (reverse)"
        onPointerDown={() => startBoost(-1)}
        onPointerUp={endBoost}
        onPointerLeave={endBoost}
        onKeyDown={() => startBoost(-1)}
        onKeyUp={endBoost}
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
        aria-label="Speed up (forward)"
        onPointerDown={() => startBoost(1)}
        onPointerUp={endBoost}
        onPointerLeave={endBoost}
        onKeyDown={() => startBoost(1)}
        onKeyUp={endBoost}
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
