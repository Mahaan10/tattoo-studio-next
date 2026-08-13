export type ProductType = "FULL_DAY" | "HALF_DAY" | "CUSTOM";

export type DeliveryType = "EMAIL" | "EMAIL_AND_POST";

export type VoucherTreatment = "SINGLE_PURPOSE";

export interface ProductInfo {
  id: string;
  type: ProductType;
  name: string;
  nameDe: string;
  nameEn: string;
  priceCents: number | null;
  discountPercent: number | 0;
  finalPriceCents: number | null;
}

export interface PurchaseInfo {
  productId: string;
  amountCents?: number;
  buyerName: string;
  buyerEmail: string;
  delivery: DeliveryType;
  shippingName?: string;
  shippingLine1?: string;
  shippingLine2?: string;
  shippingPostalCode?: string;
  shippingCity?: string;
  shippingCountry?: string;
}

export interface PurchaseResponse {
  sale: {
    id: string;
    status: string;
    grossCents: number;
  };

  stripePaymentUrl: string;
}

export interface PaymentStatusResponse {
  status: string;
  context: string;
}

export interface CreateVoucherProductInfo {
  type: ProductType;
  name: string;
  priceCents: number | null;
  discountPercent: number;
  voucherTreatment: VoucherTreatment;
}

export interface UpdateVoucherProductInfo {
  name: string;
  priceCents: number | null;
  discountPercent: number;
}

export interface UpdateVoucherProductStatusInfo {
  isActive: boolean;
}

export interface VoucherProductResponse {
  id: string;
  type: ProductType;
  name: string;
  nameDe: string | null;
  nameEn: string | null;
  priceCents: number | null;
  discountPercent: number;
  voucherTreatment: VoucherTreatment;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface VoucherProductsResponse {
  total: number;
  page: number;
  limit: number;
  items: VoucherProductResponse[];
}
