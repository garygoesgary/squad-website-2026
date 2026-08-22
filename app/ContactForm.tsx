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
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : <>Submit &rarr;</>}
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
