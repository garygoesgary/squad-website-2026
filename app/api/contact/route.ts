import { NextRequest, NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const RECIPIENT = "garygoes@gmail.com";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email sending isn't configured yet." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = String(body.first_name ?? "").trim();
  const lastName = String(body.last_name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const iAm = String(body.i_am ?? "").trim();
  const message = String(body.message ?? "").trim();
  const referral = String(body.referral ?? "").trim();

  if (!firstName || !lastName || !email || !iAm || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const lines = [`Name: ${firstName} ${lastName}`, `Email: ${email}`];
  if (phone) lines.push(`Phone: ${phone}`);
  lines.push(`I am: ${iAm}`);
  if (referral) lines.push(`How they heard about us: ${referral}`);
  lines.push("", "Message:", message);

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Squad Website <onboarding@resend.dev>",
      to: [RECIPIENT],
      reply_to: email,
      subject: `Website enquiry from ${firstName} ${lastName}`,
      text: lines.join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    console.error("Resend error", resendResponse.status, errorText);
    return NextResponse.json(
      { error: "Couldn't send the message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
