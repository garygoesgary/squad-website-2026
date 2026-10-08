// Figma node 132:280 ("Squad app"). Reuses the same 3-column grid as
// Services (.app-grid mirrors .services-grid) — column 1 is the
// heading, column 2 the details/badges, column 3 intentionally empty,
// matching the design.
export default function SquadApp() {
  return (
    <div className="app-grid">
      <h2 className="app-heading reveal">
        The New Squad booking app&hellip;Coming Soon!
      </h2>
      <div className="app-details reveal reveal-delay-1">
        <p className="app-details-label">Quick online booking for hospitality staff</p>
        <p className="app-details-body">
          Vetted kitchen hands, cooks, section chefs, sous chefs, head chefs,
          housekeepers, utility staff and more, available for anything from
          a single shift to ongoing weekly requirements.
        </p>
        <p className="app-details-body">
          When Squad launches in your area, you&rsquo;ll be able to post
          jobs, see which of our vetted staff are available and interested,
          choose who you want, confirm the booking and manage timesheets,
          all through the Squad app.
        </p>
        <p className="app-details-body">
          <strong>
            Launching first in South East Queensland, with more locations
            across Australia to follow.
          </strong>
        </p>
      </div>
    </div>
  );
}
