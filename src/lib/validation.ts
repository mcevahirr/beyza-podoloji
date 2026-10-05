import { z } from "zod";
import { services } from "@/content/services";

const serviceTitles = services.map((s) => s.title);

/** İstemci ve sunucunun ortak kullandığı randevu talebi şeması. */
export const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Lütfen adınızı ve soyadınızı yazın.").max(80),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[^\d+]/g, ""))
    .pipe(z.string().regex(/^\+?\d{10,13}$/, "Geçerli bir telefon numarası girin.")),
  service: z
    .string()
    .trim()
    .refine((v) => v === "" || v === "Diğer" || serviceTitles.includes(v), "Geçersiz hizmet seçimi.")
    .optional()
    .default(""),
  message: z.string().trim().max(1000, "Mesaj en fazla 1000 karakter olabilir.").optional().default(""),
  consent: z.literal(true, { error: "KVKK metnini onaylamanız gerekiyor." }),
  // Bot tuzağı: gerçek kullanıcılar bu alanı görmez ve boş bırakır.
  website: z.string().max(0).optional().default(""),
});

export type AppointmentInput = z.input<typeof appointmentSchema>;
export type Appointment = z.output<typeof appointmentSchema>;
