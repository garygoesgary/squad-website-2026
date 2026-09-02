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
            what we do
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            who we are
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            talk to us
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
