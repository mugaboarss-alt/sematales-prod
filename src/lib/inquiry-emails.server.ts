const RESEND_URL = "https://api.resend.com/emails";

const FROM = "Sema Tales <hello@sematales.rw>";
const OWNER = "hello@sematales.rw";

export interface InquiryEmailData {
  name: string;
  email: string;
  subject: string;
  services: string[];
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmail(payload: Record<string, unknown>) {
  const resendKey = process.env["RESEND_API_KEY"];
  if (!resendKey) {
    throw new Error("Email credentials are not configured");
  }

  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Resend request failed [${response.status}]: ${errorBody}`);
    throw new Error(`Resend request failed [${response.status}]: ${errorBody}`);
  }
}

const wrap = (inner: string) => `<!doctype html>
<html><body style="margin:0;padding:0;background-color:#ffffff;">
  <div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:#111111;max-width:560px;margin:0 auto;padding:32px 24px;">
    ${inner}
  </div>
</body></html>`;

export async function sendInquiryNotification(data: InquiryEmailData) {
  const services = data.services.length
    ? data.services.map(escapeHtml).join(", ")
    : "None selected";

  const html = wrap(`
    <p style="margin:0 0 24px;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#777777;">New inquiry</p>
    <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p style="margin:0 0 8px;"><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
    <p style="margin:0 0 24px;"><strong>Categories:</strong> ${services}</p>
    <p style="margin:0 0 8px;"><strong>Message</strong></p>
    <p style="margin:0;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
  `);

  await sendEmail({
    from: FROM,
    to: [OWNER],
    reply_to: data.email,
    subject: `New inquiry — ${data.subject}`,
    html,
  });
}

export async function sendInquiryAcknowledgement(data: InquiryEmailData) {
  const text = `Hi ${data.name},

Thank you for trusting us with the start of your story. Your message just landed with us, and we're ready to listen.

We'll be in touch within 2–3 hours to set up a quick call and talk through what you have in mind.

While you wait, come hang out with us on Instagram @sematales — it's a decent preview of some of the stories we've helped tell so far.

Talk soon,
The Sema Tales Team`;

  const html = wrap(
    `<p style="margin:0 0 16px;">Hi ${escapeHtml(data.name)},</p>
    <p style="margin:0 0 16px;">Thank you for trusting us with the start of your story. Your message just landed with us, and we&rsquo;re ready to listen.</p>
    <p style="margin:0 0 16px;">We&rsquo;ll be in touch within 2&ndash;3 hours to set up a quick call and talk through what you have in mind.</p>
    <p style="margin:0 0 16px;">While you wait, come hang out with us on Instagram <a href="https://www.instagram.com/sematales/" style="color:#111111;">@sematales</a> &mdash; it&rsquo;s a decent preview of some of the stories we&rsquo;ve helped tell so far.</p>
    <p style="margin:0;">Talk soon,<br />The Sema Tales Team</p>`
  );

  await sendEmail({
    from: FROM,
    to: [data.email],
    subject: "We've got your message — sit tight",
    text,
    html,
  });
}
