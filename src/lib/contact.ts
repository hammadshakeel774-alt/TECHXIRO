import { createServerFn } from "@tanstack/react-start";
import { env } from "node:process";
import { z } from "zod";

const contactSchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    company: z.string().trim().min(1).max(200),
    phone: z
      .string()
      .max(20)
      .regex(/^[+()\d\s-]*$/),
    type: z.enum([
      "AI Automation",
      "Computer Vision",
      "Machine Learning",
      "AI Agents",
      "Data Analytics",
      "Custom AI Solution",
      "Web Development",
      "Chatbots",
    ]),
    message: z.string().trim().min(10).max(2000),
  })
  .strict();

type ContactSubmission = z.infer<typeof contactSchema>;

type SubmitContactResult =
  | { success: true }
  | {
      success: false;
      reason: "configuration" | "delivery";
    };

async function deliverContact(submission: ContactSubmission): Promise<boolean> {
  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error(
      "Contact delivery is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
    );
    return false;
  }

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: submission.email,
        subject: "New TECHXIRO contact request",
        text: [
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Company: ${submission.company}`,
          `Phone: ${submission.phone || "Not provided"}`,
          `Project type: ${submission.type}`,
          "",
          "Message:",
          submission.message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error("Contact email delivery request failed.", error);
    return false;
  }

  if (!response.ok) {
    console.error("Contact email delivery returned an HTTP error.", response.status);
    return false;
  }

  return true;
}

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }): Promise<SubmitContactResult> => {
    const delivered = await deliverContact(data);
    if (!delivered) return { success: false, reason: "delivery" };

    return { success: true };
  });
