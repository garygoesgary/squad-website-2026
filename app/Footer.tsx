export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <a
          href="#"
          className="footer-logo-link"
          aria-label="Back to top"
        >
          <img
            className="footer-logo"
            src="/images/logo-badge.svg"
            alt="Squad"
          />
        </a>

        <img
          className="footer-tagline"
          src="/images/footer-tagline.svg"
          alt="we love your work."
        />

        <div className="footer-contact">
          <p>1300 491 856</p>
          <a href="mailto:hello@squadhospitality.com.au">
            hello@squadhospitality.com.au
          </a>
          <p className="footer-address">
            194 Sandgate Rd, Albion
            <br />
            Queensland 4010
          </p>
        </div>

        <div className="footer-acknowledgement-block">
          <div className="footer-flags">
            <img
              src="/images/flag-australia.webp"
              alt="Flag of Australia"
              width={300}
              height={150}
            />
            <img
              src="/images/flag-aboriginal.webp"
              alt="Australian Aboriginal Flag"
              width={300}
              height={150}
            />
            <img
              src="/images/flag-torres-strait-islander.webp"
              alt="Torres Strait Islander Flag"
              width={300}
              height={150}
            />
          </div>
          <p className="footer-acknowledgement">
            Squad Recruitment acknowledges the Traditional Custodians of
            country throughout Australia and their connections to land, sea
            and community. We pay our respect to their Elders past and
            present and extend that respect to all Aboriginal and Torres
            Strait Islander peoples today.
          </p>
        </div>

        <p className="footer-copyright">
          Copyright @ 2026{" "}
          <a href="https://www.squadrecruitment.com.au/privacy-policy">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
