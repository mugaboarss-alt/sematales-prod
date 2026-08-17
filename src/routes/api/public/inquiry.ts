import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const SERVICES = [
  "Strategy",
  "Film",
  "Photography",
  "Design",
  "Social Media Content",
  "Campaign Development",
  "Not sure yet — let's figure it out",
] as const;

const inquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(180),
  services: z.array(z.enum(SERVICES)).max(SERVICES.length).default([]),
  message: z.string().trim().min(10).max(4000),
});

export const Route = createFileRoute("/api/public/inquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }

        const parsed = inquirySchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { error: "Some details are missing or invalid." },
            { status: 400 }
          );
        }

        const inquiry = parsed.data;

        try {
          const { sendInquiryNotification, sendInquiryAcknowledgement } =
            await import("@/lib/inquiry-emails.server");
          await Promise.all([
            sendInquiryNotification(inquiry),
            sendInquiryAcknowledgement(inquiry),
          ]);
        } catch (err) {
          console.error("inquiry email failed", err);
          return Response.json(
            { error: "We couldn't send your message. Please try again." },
            { status: 500 }
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
