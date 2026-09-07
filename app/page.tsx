import SiteHeader from "./SiteHeader";
import ClientsCarousel from "./ClientsCarousel";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media" aria-hidden="true" />

        <SiteHeader />

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

      <section id="next" className="section-dark-ash">
        <p className="section-dark-ash-copy">
          Squad recognises talent—helping you recruit the best, from top
          first-class chefs, to hard-working shift workers.
        </p>
      </section>

      <section className="section-sand">
        <ClientsCarousel />
      </section>
    </main>
  );
}
