import * as z from "zod";

export const AdminSignInSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character",
    ),
});

export type AdminSignIn = z.infer<typeof AdminSignInSchema>;
