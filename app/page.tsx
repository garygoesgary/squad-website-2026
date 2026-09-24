import SiteHeader from "./SiteHeader";
import ClientsCarousel from "./ClientsCarousel";
import HeroAnimation from "./HeroAnimation";
import ContactForm from "./ContactForm";
import Services from "./Services";
import Footer from "./Footer";
import FlowButtonContent from "./FlowButtonContent";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-content">
            <HeroAnimation />
            <p className="hero-description">
              Squad Hospitality is here to help you with your
              <br />
              Permanent, Temporary or Contract staffing needs.
            </p>
          </div>

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

        <section id="intro" className="section-intro">
          <p className="section-intro-copy reveal">
            Squad is the hospitality staffing specialist. Helping you
            recruit the best staff, from top first-class managers, to
            hard-working kitchen shift workers. Long term, short term and
            everything in between.
          </p>
          <a
            href="#next"
            className="section-intro-button btn-flow reveal reveal-delay-1"
          >
            <FlowButtonContent text="Helping in these areas" />
          </a>
        </section>

        <section id="next" className="section-services">
          <Services />
        </section>

        <section className="section-sand">
          <ClientsCarousel />
        </section>

        <section
          className="section-billboard"
          role="img"
          aria-label="Billboard reading 'Your story starts here' — Squad, hospitality talent scouts"
        />

        <section id="contact" className="section-contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
