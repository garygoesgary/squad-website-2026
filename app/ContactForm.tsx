"use client";

import { FormEvent } from "react";

const RECIPIENT = "garygoes@gmail.com";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const firstName = data.get("first_name")?.toString().trim() ?? "";
    const lastName = data.get("last_name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const iAm = data.get("i_am")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";
    const referral = data.get("referral")?.toString().trim() ?? "";

    const subject = `Website enquiry from ${firstName} ${lastName}`.trim();
    const bodyLines = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      iAm && `I am: ${iAm}`,
      referral && `How they heard about us: ${referral}`,
      "",
      "Message:",
      message,
    ].filter((line): line is string => Boolean(line) || line === "");

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  }

  return (
    <form className="contact-form" data-reveal onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          First name*
          <input
            type="text"
            name="first_name"
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Last name*
          <input type="text" name="last_name" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email*
          <input type="email" name="email" required />
        </label>
        <label>
          Phone number
          <input type="tel" name="phone" />
        </label>
      </div>
      <label>
        I am *
        <select name="i_am" defaultValue="" required>
          <option value="" disabled>
            Select an option
          </option>
          <option value="An employer">An employer</option>
          <option value="A job seeker">A job seeker</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Message*
        <textarea name="message" rows={4} required />
      </label>
      <label>
        How did you hear about us?
        <select name="referral" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="Search engine">Search engine</option>
          <option value="Social media">Social media</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <div className="file-upload">
        <p>Upload a file or drag and drop.</p>
        <p className="file-upload-note">Maximum upload size: 5.0MB</p>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit &rarr;
      </button>
    </form>
  );
}
