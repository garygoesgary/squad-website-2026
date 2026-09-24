// Inner markup for a ".btn-flow" button — currently just the contact
// form's "Submit" (the nav CTAs reverted to a plain .btn-outline).
// Two arrow icons that swap sides on hover, the label, and the
// expanding circle that fills the button.
export default function FlowButtonContent({ text }: { text: string }) {
  return (
    <>
      <svg
        className="btn-flow-arrow btn-flow-arrow-left"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
      <span className="btn-flow-text">{text}</span>
      <span className="btn-flow-circle" aria-hidden="true" />
      <svg
        className="btn-flow-arrow btn-flow-arrow-right"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </>
  );
}
