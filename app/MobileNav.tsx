"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className={`hamburger${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-nav-panel">
          <a href="#" onClick={() => setOpen(false)}>
            Who is Squad
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Our Sectors
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Get in touch
          </a>
          <a
            className="btn-outline"
            href="tel:1300491856"
            onClick={() => setOpen(false)}
          >
            Lets Talk: 1300 491 856
          </a>
        </div>
      )}
    </div>
  );
}
