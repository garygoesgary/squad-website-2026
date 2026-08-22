import ScrollReveal from "./ScrollReveal";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="logo" href="#">
            <span className="logo-badge">
              squad<span className="dot">.</span>
            </span>
            <span className="logo-tag">hospitality talent scouts</span>
          </a>
          <nav className="main-nav">
            <a href="#">
              Employers <span className="caret">▾</span>
            </a>
            <a href="#">
              Job Seekers <span className="caret">▾</span>
            </a>
            <a href="#">
              Sectors <span className="caret">▾</span>
            </a>
            <a href="#">
              About <span className="caret">▾</span>
            </a>
          </nav>
          <a className="btn btn-outline" href="tel:1300461855">
            Lets Talk: 1300 461 855
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
          <a className="btn btn-primary" href="#job-seekers">
            Explore Recruitment Jobs
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
            <span className="trusted-logo">Standbreak Collection</span>
            <span className="trusted-logo">W</span>
            <span className="trusted-logo trusted-logo--strong">AGNES</span>
            <span className="trusted-logo">Bishopleg</span>
            <span className="trusted-logo">EVT</span>
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

      <section className="insights">
        <div className="wrap">
          <div className="insights-head" data-reveal>
            <div>
              <h2>Read latest insights.</h2>
              <p>Insights and news articles authored by our very own team.</p>
            </div>
            <div className="pagination-dots">
              <span className="page-dot page-dot--active">1</span>
              <span className="page-dot" />
            </div>
          </div>

          <div className="insights-cards">
            <article className="insight-card" data-reveal>
              <p className="insight-date">03 September 2024</p>
              <p className="insight-excerpt">
                Worried about your kitchen hiring budget? Getting staffing
                right in an Australian food business is tricky at the best of
                times, and when you compare hourly wages to day rates it can
                often look like contractors are too expensive (even if
                they&apos;re the ideal gap-fillers for your roster).
              </p>
              <a className="insight-link" href="#">
                Read more &gt;
              </a>
            </article>
            <article className="insight-card" data-reveal>
              <p className="insight-date">11 July 2024</p>
              <p className="insight-excerpt">
                Hiring is a full time job, and if you don&apos;t have a
                dedicated hiring manager on staff (or they&apos;re too busy)
                their when it comes time to recruit a new contract chef for
                your business you&apos;ll need.
              </p>
              <a className="insight-link" href="#">
                Read more &gt;
              </a>
            </article>
            <article className="insight-card insight-card--dark" data-reveal>
              <p className="insight-date">04 June 2024</p>
              <p className="insight-excerpt">
                Staying ahead in hospitality means keeping your pipeline of
                talent warm — even when you&apos;re not actively hiring,
                demand can spike without warning and supply doesn&apos;t
                always keep up.
              </p>
              <a className="insight-link" href="#">
                Read more &gt;
              </a>
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
                they&apos;re the ideal gap-fillers for your roster).
              </p>
              <p>
                Worried about your kitchen hiring budget? Getting staffing
                right in an Australian food business is tricky at the best of
                times, and when you compare hourly wages to day rates it can
                often look like contractors are too expensive (even if
                they&apos;re the ideal gap-fillers for your roster).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="run-banner">
        <div className="wrap run-inner" data-reveal>
          <h2>
            We run<span className="run-block" aria-hidden="true" />.
          </h2>
        </div>
      </section>

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
            <span className="logo-badge">
              squad<span className="dot">.</span>
            </span>
            <p className="footer-tagline">We love your work.</p>
          </div>
          <div className="footer-contact">
            <p>
              <a href="tel:1300461855">1300 461 855</a>
            </p>
            <p>
              194 Sandgate Rd, Albion
              <br />
              Queensland 4010
            </p>
            <p>
              120 Spencer St, Melbourne
              <br />
              Victoria 3000
            </p>
            <p>
              64 York St, Sydney
              <br />
              New South Wales 2000
            </p>
            <p>
              <a href="mailto:hello@squadrecruitment.com.au">
                hello@squadrecruitment.com.au
              </a>
            </p>
          </div>
        </div>
        <div className="wrap footer-social">
          <span className="social-icon" aria-label="Facebook">
            FB
          </span>
          <span className="social-icon" aria-label="Instagram">
            IG
          </span>
          <span className="social-icon" aria-label="LinkedIn">
            LI
          </span>
          <span className="social-icon" aria-label="TikTok">
            TT
          </span>
        </div>
        <div className="wrap footer-bottom">
          <p className="acknowledgement">
            Squad Recruitment acknowledges the Traditional Custodians of
            country throughout Australia and their connections to land, sea
            and community. We pay our respects to Aboriginal and Torres
            Strait Islander cultures and to their Elders past, present and
            emerging.
          </p>
          <p className="copyright">
            Copyright &copy; 2026 <a href="#">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </>
  );
}
