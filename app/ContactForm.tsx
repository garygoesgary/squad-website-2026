import FlowButtonContent from "./FlowButtonContent";

export default function ContactForm() {
  return (
    <div className="contact-form-grid">
      <div className="contact-intro reveal">
        <h2 className="contact-heading">talk to us today.</h2>
        <p className="contact-body">
          We love to talk all things people. Get in touch with the team for
          any inquiries, whether business-related or otherwise.
        </p>
      </div>

      <form className="contact-form">
        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="firstName">
              First Name<span aria-hidden="true">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="lastName">
              Last Name<span aria-hidden="true">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="email">
              Email<span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="04XX XXX XXX"
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="message">
            Message<span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us how we can help..."
            required
          />
        </div>

        <button type="submit" className="contact-submit btn-flow">
          <FlowButtonContent text="Submit" />
        </button>
      </form>
    </div>
  );
}
