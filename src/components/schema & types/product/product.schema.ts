import * as z from "zod";
import { ProductType } from "./product.types";

export const createPurchaseSchema = (productType: ProductType) =>
  z
    .object({
      productId: z.string().min(1),

      amount: z.number({ message: "Please enter a voucher amount" }).positive(),

      buyerName: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(120),

      buyerEmail: z.string().trim().email("Please enter a valid email address"),

      delivery: z.enum(["EMAIL", "EMAIL_AND_POST"]),

      shippingName: z.string().optional(),
      shippingLine1: z.string().optional(),
      shippingLine2: z.string().optional(),
      shippingPostalCode: z.string().optional(),
      shippingCity: z.string().optional(),
      shippingCountry: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      // CUSTOM voucher validation
      if (productType === "CUSTOM" && data.amount < 100) {
        ctx.addIssue({
          code: "custom",
          path: ["amount"],
          message: "Minimum voucher amount is €100",
        });
      }

      // Shipping validation
      if (data.delivery !== "EMAIL_AND_POST") return;

      const requiredFields = [
        {
          key: "shippingName",
          value: data.shippingName,
          message: "Recipient name is required",
        },
        {
          key: "shippingLine1",
          value: data.shippingLine1,
          message: "Address is required",
        },
        {
          key: "shippingPostalCode",
          value: data.shippingPostalCode,
          message: "Postal code is required",
        },
        {
          key: "shippingCity",
          value: data.shippingCity,
          message: "City is required",
        },
        {
          key: "shippingCountry",
          value: data.shippingCountry,
          message: "Country is required",
        },
      ];

      requiredFields.forEach((field) => {
        if (!field.value?.trim()) {
          ctx.addIssue({
            code: "custom",
            path: [field.key],
            message: field.message,
          });
        }
      });
    });

export type PurchaseFormData = z.infer<ReturnType<typeof createPurchaseSchema>>;

export const createVoucherProductSchema = z
  .object({
    type: z.enum(["FULL_DAY", "HALF_DAY", "CUSTOM"], {
      message: "Product type is required",
    }),

    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(120, "Name must be at most 120 characters"),

    price: z.preprocess(
      (value) => {
        if (value === "" || value === undefined || value === null) {
          return null;
        }

        const numberValue = Number(value);

        return Number.isNaN(numberValue) ? value : numberValue;
      },
      z
        .number({
          message: "Price must be a number",
        })
        .positive("Price must be greater than 0")
        .nullable(),
    ),

    discountPercent: z.preprocess(
      (value) => {
        if (value === "" || value === undefined || value === null) {
          return 0;
        }

        const numberValue = Number(value);

        return Number.isNaN(numberValue) ? value : numberValue;
      },
      z
        .number({
          message: "Discount must be a number",
        })
        .min(0, "Discount cannot be less than 0%")
        .max(100, "Discount cannot be greater than 100%"),
    ),

    voucherTreatment: z.literal("SINGLE_PURPOSE"),
  })
  .superRefine((data, ctx) => {
    if (data.type === "FULL_DAY" || data.type === "HALF_DAY") {
      if (data.price === null) {
        ctx.addIssue({
          code: "custom",
          path: ["price"],
          message: "Price is required",
        });
      }
    }

    if (data.type === "CUSTOM") {
      // CUSTOM always has no fixed price.
      // The API will receive priceCents: null.

      // CUSTOM always has 0 discount.
      if (data.discountPercent !== 0) {
        ctx.addIssue({
          code: "custom",
          path: ["discountPercent"],
          message: "Custom vouchers cannot have a discount",
        });
      }
    }
  });

export type CreateVoucherProductFormData = z.infer<
  typeof createVoucherProductSchema
>;

export const editVoucherProductSchema = z
  .object({
    type: z.enum(["FULL_DAY", "HALF_DAY", "CUSTOM"]),

    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(120, "Name must be at most 120 characters"),

    price: z.preprocess(
      (value) => {
        if (value === "" || value === undefined || value === null) {
          return null;
        }

        const numberValue = Number(value);

        return Number.isNaN(numberValue) ? value : numberValue;
      },
      z
        .number({
          message: "Price must be a number",
        })
        .positive("Price must be greater than 0")
        .nullable(),
    ),

    discountPercent: z.preprocess(
      (value) => {
        if (value === "" || value === undefined || value === null) {
          return 0;
        }

        const numberValue = Number(value);

        return Number.isNaN(numberValue) ? value : numberValue;
      },
      z
        .number({
          message: "Discount must be a number",
        })
        .min(0, "Discount cannot be less than 0%")
        .max(100, "Discount cannot be greater than 100%"),
    ),
  })
  .superRefine((data, ctx) => {
    if (data.type === "FULL_DAY" || data.type === "HALF_DAY") {
      if (data.price === null) {
        ctx.addIssue({
          code: "custom",
          path: ["price"],
          message: "Price is required",
        });
      }
    }

    if (data.type === "CUSTOM") {
      if (data.discountPercent !== 0) {
        ctx.addIssue({
          code: "custom",
          path: ["discountPercent"],
          message: "Custom vouchers cannot have a discount",
        });
      }
    }
  });

export type EditVoucherProductFormData = z.infer<
  typeof editVoucherProductSchema
>;
