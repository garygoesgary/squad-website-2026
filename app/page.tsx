import HeroParallax from "./HeroParallax";
import MobileNav from "./MobileNav";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media" aria-hidden="true" />
        <HeroParallax />

        <header className="site-header">
          <div className="wrap header-inner">
            <a className="logo" href="#">
              <img
                className="logo-lockup"
                src="/images/squad-logo-lockup-1-line.svg"
                alt="Squad — hospitality talent scouts"
              />
            </a>
            <nav className="main-nav">
              <a href="#">what we do</a>
              <a href="#">who we are</a>
              <a href="#">talk to us</a>
            </nav>
            <a className="btn-outline header-cta" href="tel:1300491856">
              Lets Talk: 1300 491 856
            </a>
            <MobileNav />
          </div>
        </header>

        <a className="scroll-arrow" href="#next" aria-label="Scroll down">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 8l7 7 7-7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div className="hero-bar" aria-hidden="true" />
      </section>

      <section id="next" className="section-dark-ash" />
    </main>
  );
}
