import { z } from "zod";

/**
 * Shared contact/appointment form schema template for future feature pages.
 */
export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().email(),
  phone: z.string().trim().min(8).max(20),
  message: z.string().trim().min(10).max(2000),
  locale: z.enum(["en", "ar"]),
  consent: z.literal(true),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
