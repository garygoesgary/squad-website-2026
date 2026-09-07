"use client";

import { useEffect, useRef } from "react";

const clients = [
  { name: "Agnes", src: "/images/clients/agnes.png" },
  { name: "The Calile Hotel", src: "/images/clients/calile.png" },
  { name: "The Star Entertainment Group", src: "/images/clients/star.svg" },
  { name: "Discovery Holiday Parks", src: "/images/clients/discovery.png" },
  { name: "EVT", src: "/images/clients/evt.png" },
  { name: "W Hotels", src: "/images/clients/w-hotels.svg" },
  { name: "Crystalbrook Collection", src: "/images/clients/crystalbrook.png" },
  { name: "Waymark Hotels", src: "/images/clients/waymark.png" },
  { name: "DAP & Co.", src: "/images/clients/dap-and-co.svg" },
];

// Rendered twice back-to-back so the track can scroll seamlessly from
// the end of the first set into the identical start of the second,
// then silently wrap back — the "never-ending" loop illusion.
const loopedClients = [...clients, ...clients];

const PIXELS_PER_SECOND = 40;

export default function ClientsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cells = Array.from(
      track.querySelectorAll<HTMLElement>(".carousel-cell")
    );

    // Width of one full (non-duplicated) set of cards, measured from the
    // DOM rather than computed from CSS values — the first cell of the
    // second copy sits exactly one set-width along the scrollable track.
    const oneSetWidth = cells[clients.length]?.offsetLeft ?? 0;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let paused = reduceMotion;
    let lastTime: number | null = null;
    let rafId = 0;

    const tick = (time: number) => {
      rafId = requestAnimationFrame(tick);
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (!paused && oneSetWidth > 0) {
        track.scrollLeft += PIXELS_PER_SECOND * dt;
        if (track.scrollLeft >= oneSetWidth) {
          track.scrollLeft -= oneSetWidth;
        }
      }
    };

    // Only an actual drag pauses the auto-scroll (so it isn't fighting
    // the user's own scrollLeft changes) — hovering never stops it.
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
    <div className="clients-carousel">
      <p className="clients-carousel-label">Trusted by</p>
      <div className="carousel-track" ref={trackRef}>
        {loopedClients.map((client, i) => (
          <div className="carousel-cell" key={`${client.name}-${i}`}>
            <img src={client.src} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
