import {z} from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Ім’я повинно містити мінімум 2 символи")
    .max(40, "Занадто довге ім’я"),
  phone: z
    .string()
    .min(10, "Номер має містити мінімум 10 цифр")
    .regex(/^\+?\d{10,15}$/, "Введіть коректний номер телефону"),
  details: z
    .string()
    .max(500, "Максимум 500 символів")
    .optional(),
})