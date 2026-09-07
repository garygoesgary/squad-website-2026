"use client";

import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!header || !hero) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      // Once the hero's bottom edge has scrolled above the header, the
      // fixed nav is sitting over whatever section comes next rather
      // than the photo — that's when it needs its own backing.
      setPastHero(hero.getBoundingClientRect().bottom <= header.offsetHeight);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={`site-header${pastHero ? " is-scrolled" : ""}`}>
      <div className="wrap header-inner">
        <a className="logo" href="#">
          <img
            className="logo-badge"
            src="/images/logo-badge.svg"
            alt="Squad"
          />
        </a>
        <nav className="main-nav">
          <a href="#">Who is Squad</a>
          <a href="#" className="weight-medium">
            Our Sectors
          </a>
          <a href="#">Get in touch</a>
        </nav>
        <a className="btn-outline header-cta" href="tel:1300491856">
          Lets Talk: 1300 491 856
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
