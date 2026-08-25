"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error ?? "Couldn't send the message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Couldn't send the message."
      );
    }
  }

  return (
    <form className="contact-form" data-reveal onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span className="field-label">
            First Name <span className="required">*</span>
          </span>
          <input
            type="text"
            name="first_name"
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          <span className="field-label">
            Last Name <span className="required">*</span>
          </span>
          <input type="text" name="last_name" required />
        </label>
      </div>
      <div className="form-row">
        <label className="field-plain">
          <input type="email" name="email" placeholder="Email*" required />
        </label>
        <label className="field-plain">
          <input type="tel" name="phone" placeholder="Phone number" />
        </label>
      </div>
      <label className="field-plain">
        <select name="i_am" defaultValue="" required>
          <option value="" disabled>
            I am...*
          </option>
          <option value="An employer">An employer</option>
          <option value="A job seeker">A job seeker</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="field-plain">
        <textarea name="message" rows={4} placeholder="Message*" required />
      </label>
      <label className="field-plain">
        <select name="referral" defaultValue="">
          <option value="" disabled>
            How did you hear about us?*
          </option>
          <option value="Search engine">Search engine</option>
          <option value="Social media">Social media</option>
          <option value="Referral">Referral</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <div className="file-upload">
        <p>
          Upload a file or drag and drop
          <br />
          Maximum upload size: 5.24MB
        </p>
      </div>
      <button
        type="submit"
        className="submit-btn"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Submit"}
        <img src="/images/icon-submit-arrow.svg" alt="" />
      </button>
      {status === "success" && (
        <p className="form-status form-status--success">
          Thanks — your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-status--error">{errorMessage}</p>
      )}
    </form>
  );
}
