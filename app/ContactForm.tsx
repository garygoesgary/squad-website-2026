export default function ContactForm() {
  return (
    <div className="contact-form-grid">
      <div className="contact-intro">
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
            <input id="lastName" name="lastName" type="text" required />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="contact-field">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email*"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="phone" className="sr-only">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone number"
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message*"
            required
          />
        </div>

        <button type="submit" className="contact-submit">
          Submit
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
