"use client";

import { useState } from "react";
import FlowButtonContent from "./FlowButtonContent";

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
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path className="hamburger-line-top" d="M4 12L20 12" />
          <path className="hamburger-line-mid" d="M4 12H20" />
          <path className="hamburger-line-bottom" d="M4 12H20" />
        </svg>
      </button>

      {open && (
        <div className="mobile-nav-panel">
          <a href="#intro" onClick={() => setOpen(false)}>
            Our Services
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Get in touch
          </a>
          <a
            className="btn-outline btn-flow"
            href="tel:1300491856"
            onClick={() => setOpen(false)}
          >
            <FlowButtonContent text="Lets Talk: 1300 491 856" />
          </a>
        </div>
      )}
    </div>
  );
}
