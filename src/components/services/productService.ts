import { AxiosResponse } from "axios";
import http from "./httpService";

import {
  PaymentStatusResponse,
  ProductInfo,
  PurchaseInfo,
  PurchaseResponse,
  CreateVoucherProductInfo,
  UpdateVoucherProductInfo,
  VoucherProductResponse,
  VoucherProductsResponse,
  UpdateVoucherProductStatusInfo,
} from "../schema & types/product/product.types";

export default function getProductsApi(): Promise<ProductInfo[]> {
  return http
    .get("/vouchers/products")
    .then(({ data }: AxiosResponse<ProductInfo[]>) => data);
}

export function makePurchaseVoucherApi(
  newPurchase: PurchaseInfo,
): Promise<PurchaseResponse> {
  return http
    .post("/vouchers/purchase", newPurchase)
    .then(({ data }: AxiosResponse<PurchaseResponse>) => data);
}

export function checkPaymentStatus(
  sessionId: string,
): Promise<PaymentStatusResponse> {
  return http
    .get("/payments/status", {
      params: {
        sessionId,
      },
    })
    .then(({ data }: AxiosResponse<PaymentStatusResponse>) => data);
}

export function getVoucherProductsApi(): Promise<VoucherProductsResponse> {
  return http
    .get("/admin/voucher-products")
    .then(({ data }: AxiosResponse<VoucherProductsResponse>) => data);
}

export function createVoucherProductApi(
  newVoucherProduct: CreateVoucherProductInfo,
): Promise<VoucherProductResponse> {
  return http
    .post("/admin/voucher-products", newVoucherProduct)
    .then(({ data }: AxiosResponse<VoucherProductResponse>) => data);
}

export function editVoucherProductApi({
  voucherProductId,
  newVoucherProduct,
}: {
  voucherProductId: string;
  newVoucherProduct: UpdateVoucherProductInfo;
}): Promise<VoucherProductResponse> {
  return http
    .patch(`/admin/voucher-products/${voucherProductId}`, newVoucherProduct)
    .then(({ data }: AxiosResponse<VoucherProductResponse>) => data);
}

export function updateVoucherProductStatusApi({
  voucherProductId,
  data,
}: {
  voucherProductId: string;
  data: UpdateVoucherProductStatusInfo;
}): Promise<VoucherProductResponse> {
  return http
    .patch(`/admin/voucher-products/${voucherProductId}`, data)
    .then(({ data }: AxiosResponse<VoucherProductResponse>) => data);
}
