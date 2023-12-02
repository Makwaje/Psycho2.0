import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10, "Password must be at least 8 characters"),
});
export type TLoginSchema = z.infer<typeof loginSchema>;
