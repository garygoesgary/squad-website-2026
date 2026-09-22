const services = [
  {
    heading: "Permanent Recruitment",
    paragraphs: [
      "Specialist hospitality recruitment across Australia, with experience in selected international markets.",
      "Squad recruits front-of-house management from Assistant Manager level upward, kitchen positions from Chef de Partie upward, senior leaders such as General Managers and Operations Managers, and hospitality-based specialist functions including marketing, finance and engineering.",
    ],
  },
  {
    heading: "Long-term temporary personnel",
    paragraphs: [
      "Vetted kitchen hands, cooks, section chefs, sous chefs, head chefs and housekeepers who travel to regional, remote, island and accommodated locations.",
      "Assignments commonly run from around three to twelve weeks or longer, with staff working the hours required and operating as part of the client’s existing team.",
    ],
  },
  {
    heading: "Flexible and shift staffing",
    paragraphs: [
      "Vetted and onboarded hospitality workers for local shifts and shorter jobs. Clients can ask Squad to manage the matching process or use Squad’s platform to post requirements and select from the available team.",
      "Squad covers its full range of hospitality roles but does not position itself as an emergency service for shifts starting within two hours.",
    ],
  },
];

export default function Services() {
  return (
    <div className="services-grid">
      {services.map((service) => (
        <div className="service-column" key={service.heading}>
          <h3 className="service-heading">{service.heading}</h3>
          {service.paragraphs.map((p, i) => (
            <p className="service-body" key={i}>
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
