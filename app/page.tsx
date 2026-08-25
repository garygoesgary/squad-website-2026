import ScrollReveal from "./ScrollReveal";
import ContactForm from "./ContactForm";
import HeroParallax from "./HeroParallax";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <HeroParallax />

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="logo" href="#">
            <img className="logo-mark" src="/images/squad-logo.svg" alt="Squad" />
            <span className="logo-tag">hospitality talent scouts</span>
          </a>
          <nav className="main-nav">
            <a href="#">
              Employers <img className="caret" src="/images/icon-caret.svg" alt="" />
            </a>
            <a href="#">
              Job Seekers <img className="caret" src="/images/icon-caret.svg" alt="" />
            </a>
            <a href="#">
              Sectors <img className="caret" src="/images/icon-caret.svg" alt="" />
            </a>
            <a href="#">
              About <img className="caret" src="/images/icon-caret.svg" alt="" />
            </a>
          </nav>
          <a className="btn btn-outline" href="tel:1300491856">
            Lets Talk: 1300 491 856
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="wrap hero-inner" data-reveal>
          <h1>We love your work</h1>
          <p className="hero-sub">
            Squad Recruitment connects you to exclusive professional networks
            worldwide. Let us help you find your perfect match.
          </p>
          <a className="pill-link" href="#insights">
            See what we are all about
            <span className="pill-arrow">
              <img src="/images/icon-submit-arrow.svg" alt="" />
            </span>
          </a>
        </div>
        <div className="hero-bar" aria-hidden="true" />
      </section>

      <section className="mission">
        <div className="wrap" data-reveal>
          <p className="mission-lead">
            Squad Recruitment is a hospitality-born team that will help you
            find the best match. We seek talent, not just a person.
          </p>
          <p className="mission-sub">
            We service head chefs to temp staff, working on both sides of the
            business.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="wrap services-grid">
          <div className="service-card" data-reveal aria-hidden="true" />
          <div className="service-card" data-reveal aria-hidden="true" />
          <div className="service-card" data-reveal aria-hidden="true" />
        </div>
        <div className="services-labels">
          <div className="wrap services-labels-grid">
            <span>Hotel managers</span>
            <span>Head chefs</span>
            <span>Managers</span>
          </div>
        </div>
      </section>

      <section className="trusted">
        <div className="wrap" data-reveal>
          <p className="trusted-label">Trusted by</p>
          <div className="trusted-strip">
            <span className="trusted-logo" />
            <span className="trusted-logo" />
            <span className="trusted-logo" />
            <span className="trusted-logo" />
            <span className="trusted-logo" />
            <span className="trusted-logo" />
          </div>
        </div>
      </section>

      <section className="dots-row" aria-hidden="true">
        <div className="wrap dots-grid" data-reveal>
          <span className="dot-circle" />
          <span className="dot-circle" />
          <span className="dot-circle" />
          <span className="dot-circle" />
          <span className="dot-circle" />
          <span className="dot-circle" />
        </div>
      </section>

      <section className="insights" id="insights">
        <div className="wrap">
          <div className="insights-head" data-reveal>
            <div>
              <h2>Read latest insights.</h2>
              <p>Insights and news articles authored by our very own team.</p>
            </div>
            <div className="pagination-arrows">
              <button className="arrow-btn arrow-btn--prev" aria-label="Previous">
                <img src="/images/icon-submit-arrow.svg" alt="" />
              </button>
              <button className="arrow-btn arrow-btn--next" aria-label="Next">
                <img src="/images/icon-submit-arrow.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="insights-cards">
            <article className="insight-card insight-card--bright" data-reveal>
              <p className="insight-date">02 September 2024</p>
              <p className="insight-excerpt">
                Worried about your kitchen hiring budget? Getting staffing
                right in an Australian food business is tricky at the best of
                times, and when you compare hourly wages to day rates it can
                often look like contractors are too expensive (even if
                they&apos;d be ideal gap-fillers for your roster).
              </p>
              <a className="insight-link" href="#">
                Read more
                <img src="/images/icon-submit-arrow.svg" alt="" />
              </a>
            </article>
            <article className="insight-card" data-reveal>
              <p className="insight-date">11 July 2024</p>
              <p className="insight-excerpt">
                Hiring is a full-time job, and if you don&apos;t have a
                dedicated hiring manager on staff (or they&apos;re just too
                busy), then when it comes time to recruit a new contract chef
                for your business you&apos;ll need.
              </p>
            </article>
            <article className="insight-card" data-reveal>
              <p className="insight-date">04 June 2024</p>
              <p className="insight-excerpt">
                Staying on top of recruitment in hospitality can be a
                challenge. Particularly for regional businesses, mining sites
                or just any area where demand for great talent exceeds
                supply, when you need great people fast.
              </p>
            </article>
          </div>

          <div className="insights-feature" data-reveal>
            <div className="insights-feature-media" aria-hidden="true" />
            <div className="insights-feature-copy">
              <p>
                Worried about your kitchen hiring budget? Getting staffing
                right in an Australian food business is tricky at the best of
                times, and when you compare hourly wages to day rates it can
                often look like contractors are too expensive (even if
                they&apos;d be ideal gap-fillers for your roster).
              </p>
              <p>
                Worried about your kitchen hiring budget? Getting staffing
                right in an Australian food business is tricky at the best of
                times, and when you compare hourly wages to day rates it can
                often look like contractors are too expensive (even if
                they&apos;d be ideal gap-fillers for your roster).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="run-banner" aria-hidden="true" />

      <section className="contact">
        <div className="wrap contact-grid">
          <div className="contact-intro" data-reveal>
            <h2>Send us a message.</h2>
            <p>
              We love to talk all things people. Get in touch with the team
              for any inquiries, whether business-related or otherwise.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap footer-grid" data-reveal>
          <div className="footer-brand">
            <img className="logo-mark" src="/images/squad-logo.svg" alt="Squad" />
            <p className="footer-tagline">We love your work.</p>
          </div>
          <div className="footer-contact">
            <p><a href="tel:1300491856">1300 491 856</a></p>
            <p>194 Sandgate Rd, Albion<br />Queensland 4010</p>
            <p>120 Spencer St, Melbourne<br />Victoria 3000</p>
            <p>64 York St, Sydney<br />New South Wales 2000</p>
            <p>
              <a href="mailto:hello@squadrecruitment.com.au">
                hello@squadrecruitment.com.au
              </a>
            </p>
          </div>
        </div>

        <div className="wrap footer-bottom">
          <div className="footer-flags">
            <span className="flag flag-au">
              <img src="/images/flag-au-base.svg" alt="Australian flag" />
              <img className="flag-au-stars" src="/images/flag-au-stars.svg" alt="" />
            </span>
            <img className="flag" src="/images/flag-aboriginal.png" alt="Aboriginal flag" />
            <img className="flag" src="/images/flag-torres-strait.jpg" alt="Torres Strait Islander flag" />
          </div>
          <p className="acknowledgement">
            Squad Recruitment acknowledges the Traditional Custodians of
            country throughout Australia and their connections to land, sea
            and community. We pay our respect to their Elders past and
            present and extend that respect to all Aboriginal and Torres
            Strait Islander peoples today.
          </p>
          <p className="copyright">
            Copyright &copy; 2026{" "}
            <a
              href="https://www.squadrecruitment.com.au/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
