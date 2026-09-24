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

        <div className="footer-columns">
          <div className="footer-contact">
            <p>1300 491 856</p>
            <a href="mailto:hello@squadrecruitment.com.au">
              hello@squadrecruitment.com.au
            </a>
          </div>

          <div className="footer-addresses">
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
          </div>
        </div>

        <div className="footer-acknowledgement-block">
          <div className="footer-flags">
            <img
              src="/images/flag-australia.svg"
              alt="Flag of Australia"
              width={30}
              height={20}
            />
            <img
              src="/images/flag-aboriginal.svg"
              alt="Australian Aboriginal Flag"
              width={30}
              height={20}
            />
            <img
              src="/images/flag-torres-strait-islander.svg"
              alt="Torres Strait Islander Flag"
              width={30}
              height={20}
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
