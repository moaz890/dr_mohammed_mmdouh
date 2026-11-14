import { env } from "@/config/env";

export function normalizeWhatsAppNumber(raw?: string): string {
  if (!raw) return "";
  const cleaned = raw.replace(/\D/g, "");
  if (cleaned.startsWith("01") && cleaned.length === 11) {
    return `20${cleaned.slice(1)}`;
  }
  return cleaned;
}

export function buildWhatsAppUrl(message?: string, phoneNumber?: string): string {
  const digits =
    normalizeWhatsAppNumber(phoneNumber) ||
    normalizeWhatsAppNumber(env.NEXT_PUBLIC_WHATSAPP_NUMBER) ||
    "201050600032";

  const textParam = message && message.trim() ? `=${encodeURIComponent(message)}` : "";

  return `https://api.whatsapp.com/send/?phone=${digits}&text${textParam}&type=phone_number&app_absent=0`;
}

export const MADINATY_PHONE = "01050600033";
export const ONLINE_RESERVATION_MESSAGE = "السلام عليكم ارغب في حجز استشارة اونلاين";

export function getOnlineReservationUrl(): string {
  return buildWhatsAppUrl(ONLINE_RESERVATION_MESSAGE, MADINATY_PHONE);
}
