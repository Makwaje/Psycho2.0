import { z } from "zod";

// login schema validation to be used in react hook form
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export type TLoginSchema = z.infer<typeof loginSchema>;

// signup schema validation to be used in react hook form
export const signUpSchema = z
  .object({
    name: z
      .string({ required_error: "This field is required" })
      .includes(" ", { message: "Full name is required" }),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    // phoneNumber: z
    //   .string()
    //   .min(10, "Please provide valid phone number")
    //   .max(10, "Please provide valid phone number"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Password must match",
    path: ["confirmPassword"],
  });
export type TSignUpSchema = z.infer<typeof signUpSchema>;
