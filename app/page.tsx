import SiteHeader from "./SiteHeader";
import ClientsCarousel from "./ClientsCarousel";
import HeroAnimation from "./HeroAnimation";
import ContactForm from "./ContactForm";
import ImageGallery from "./ImageGallery";
import Footer from "./Footer";

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

        <section id="next" className="section-dark-ash">
          <p className="section-dark-ash-copy">
            Squad recognises talent—helping you recruit the best, from top
            first-class chefs, to hard-working shift workers.
          </p>
        </section>

        <section className="section-sand">
          <ClientsCarousel />
        </section>

        <ImageGallery />

        <section
          className="section-billboard"
          role="img"
          aria-label="Billboard reading 'Brisbane we got you' — Squad, hospitality talent scouts"
        />

        <section id="contact" className="section-contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
