"use client";

import { PurchaseResponse } from "@/components/schema & types/product/product.types";
import getProductsApi, {
  checkPaymentStatus,
  createVoucherProductApi,
  getVoucherProductsApi,
  makePurchaseVoucherApi,
} from "@/components/services/productService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

export default function useProducts(sessionId?: string) {
  const t = useTranslations("product");
  const queryClient = useQueryClient();

  // Get public products
  const {
    isLoading: productsIsLoading,
    isError: productsIsError,
    data: productsData,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsApi,
  });

  const products = productsData ?? [];

  // Purchase voucher
  const { isPending: makePurchaseIsPending, mutate: makePurchase } =
    useMutation({
      mutationFn: makePurchaseVoucherApi,

      onSuccess: (data: PurchaseResponse) => {
        toast.success(t("toast.redirecting"));
        queryClient.invalidateQueries({ queryKey: ["products"] });

        window.location.href = data.stripePaymentUrl;
      },

      onError: () => {
        toast.error(t("toast.purchaseFailed"));
      },
    });

  // Check payment status
  const {
    data: paymentStatus,
    isLoading: paymentStatusIsLoading,
    isError: paymentStatusIsError,
  } = useQuery({
    queryKey: ["payment-status", sessionId],
    queryFn: () => checkPaymentStatus(sessionId!),
    enabled: !!sessionId,
  });

  // get all products
  const {
    data: allProductsData,
    isLoading: allProductsIsLoading,
    isError: allProductsIsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getVoucherProductsApi,
  });

  const allProducts = allProductsData?.items ?? [];

  // create voucher product
  const {
    isPending: createVoucherProductIsPending,
    mutate: createVoucherProduct,
  } = useMutation({
    mutationFn: createVoucherProductApi,

    onSuccess: () => {
      toast.success("Voucher product created");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onError: () => {
      toast.error("Voucher product not created, Try again later");
    },
  });

  return {
    // Public Products
    products,
    productsIsLoading,
    productsIsError,

    // Purchase
    makePurchase,
    makePurchaseIsPending,

    // Payment status
    paymentStatus,
    paymentStatusIsLoading,
    paymentStatusIsError,

    // get all products
    allProducts,
    allProductsIsLoading,
    allProductsIsError,

    // create voucher product
    createVoucherProductIsPending,
    createVoucherProduct,
  };
}
