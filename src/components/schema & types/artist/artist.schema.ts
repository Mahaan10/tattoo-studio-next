import * as z from "zod";

export const TattooArtistValidationSchema = z
  .object({
    displayName: z
      .string({ message: "Name is required" })
      .min(2, "Name must be at least 2 characters")
      .max(80, "Name must be at most 80 characters"),

    email: z
      .string({ message: "Email is required" })
      //.min(1, "Email is required")
      .email("Please enter a valid email address"),

    phone: z
      .string({ message: "Phone number is required" })
      .min(1, { message: "Phone number is required" }),
    // .regex(/^(?:\+49|0049|0)1[5-7]\d{1,2}[\s-]?\d{7,8}$/, {
    //   message: "Please enter a valid german mobile number",
    // }),

    handle: z
      .string()
      .min(1, "Instagram username is required")
      .regex(/^[a-zA-Z0-9](?:[a-zA-Z0-9._]*[a-zA-Z0-9])?$/, {
        message: "Invalid Instagram username format",
      }),

    bio: z.string(),

    worksMeta: z
      .array(
        z.object({
          title: z
            .string()
            .min(1, "Title is required")
            .max(120, "Max 120 characters"),

          tags: z.array(z.string()),
        }),
      )
      .max(10, "Max 10 works meta"),

    cover: z
  .instanceof(File)
  .optional()
  .refine((file) => !file || file.size <= 10 * 1024 * 1024, {
    message: "Image must be less than 10MB",
  })
  .refine((file) => !file || file.type.startsWith("image/"), {
    message: "Only image files are allowed",
  }),

    works: z
      .array(
        z
          .instanceof(File)
          .refine((file) => file.size <= 10 * 1024 * 1024, {
            message: "Each image must be less than 10MG",
          })
          .refine((file) => file.type.startsWith("image/"), {
            message: "Only image files are allowed",
          }),
      )
      .max(10, "Maximum 10 images allowed").optional()
  })
  .refine(
  (data) => {
    // no new uploads → skip validation
    if (!data.works || data.works.length === 0) return true;

    return data.worksMeta?.length === data.works.length;
  },
  {
    message: "works meta must match works length",
    path: ["worksMeta"],
  }
)

export type TattooArtistFormData = z.infer<typeof TattooArtistValidationSchema>;
