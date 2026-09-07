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

export default function ClientsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cells = Array.from(
      track.querySelectorAll<HTMLElement>(".carousel-cell")
    );

    // Cheap enough (9 cells, plain rect math) to run straight off the
    // scroll event — no rAF batching needed, which also sidesteps rAF
    // getting suspended on a backgrounded/hidden document.
    const update = () => {
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;

      let closest: HTMLElement | null = null;
      let closestDist = Infinity;
      for (const cell of cells) {
        const r = cell.getBoundingClientRect();
        const dist = Math.abs(r.left + r.width / 2 - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = cell;
        }
      }
      for (const cell of cells) {
        cell.classList.toggle("is-active", cell === closest);
      }
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="clients-carousel">
      <p className="clients-carousel-label">Trusted by</p>
      <div className="carousel-track" ref={trackRef}>
        {clients.map((client) => (
          <div className="carousel-cell" key={client.name}>
            <img src={client.src} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
