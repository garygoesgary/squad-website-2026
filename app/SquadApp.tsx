// Figma node 132:280 ("Squad app"). Reuses the same 3-column grid as
// Services (.app-grid mirrors .services-grid) — column 1 is the
// heading, column 2 the details/badges, column 3 intentionally empty,
// matching the design.
export default function SquadApp() {
  return (
    <div className="app-grid">
      <h2 className="app-heading reveal">
        Download the
        <br />
        NEW Squad app
      </h2>
      <div className="app-details reveal reveal-delay-1">
        <p className="app-details-label">Quick online booking for jobs</p>
        <p className="app-details-body">
          Vetted kitchen hands, cooks, section chefs, sous chefs, head chefs
          and housekeepers who travel to regional, remote, island and
          accommodated locations.
        </p>
        <p className="app-details-body">
          Assignments commonly run from around three to twelve weeks or
          longer, with staff working the hours required and operating as
          part of the client&rsquo;s existing team.
        </p>
        <div className="app-badges">
          <a href="#" aria-label="Download on the App Store">
            <img src="/images/app-store-badge.svg" alt="Download on the App Store" />
          </a>
          <a href="#" aria-label="Get it on Google Play">
            {/* The source SVG Figma exported is stored pre-flipped —
                its own generated code wraps it in the same corrective
                transform applied here. */}
            <img
              className="google-play-badge"
              src="/images/google-play-badge.svg"
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
