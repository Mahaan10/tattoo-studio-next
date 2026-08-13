"use client";

import { PurchaseResponse } from "@/components/schema & types/product/product.types";
import getProductsApi, {
  checkPaymentStatus,
  createVoucherProductApi,
  editVoucherProductApi,
  getVoucherProductsApi,
  makePurchaseVoucherApi,
  updateVoucherProductStatusApi,
} from "@/components/services/productService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

export default function useProducts(sessionId?: string) {
  const t = useTranslations("product");
  const tAdminShop = useTranslations("admin.shops");
  const queryClient = useQueryClient();

  // Get public products
  const {
    isLoading: productsIsLoading,
    isError: productsIsError,
    data: productsData,
  } = useQuery({
    queryKey: ["public-products"],
    queryFn: getProductsApi,
  });

  const products = productsData ?? [];

  // Purchase voucher
  const { isPending: makePurchaseIsPending, mutate: makePurchase } =
    useMutation({
      mutationFn: makePurchaseVoucherApi,

      onSuccess: (data: PurchaseResponse) => {
        toast.success(t("toast.redirecting"));
        // queryClient.invalidateQueries({ queryKey: ["products"] });

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
    queryKey: ["voucher-products"],
    queryFn: getVoucherProductsApi,
  });

  const allProducts = allProductsData?.items ?? [];

  // create voucher product
  // create voucher product
  const {
    isPending: createVoucherProductIsPending,
    mutate: createVoucherProduct,
  } = useMutation({
    mutationFn: createVoucherProductApi,

    onSuccess: () => {
      toast.success(tAdminShop("toast.created"));
      queryClient.invalidateQueries({ queryKey: ["voucher-products"] });
    },

    onError: () => {
      toast.error(tAdminShop("toast.createFailed"));
    },
  });

  // edit voucher product
  // edit voucher product
  const { isPending: editVoucherProductIsPending, mutate: editVoucherProduct } =
    useMutation({
      mutationFn: editVoucherProductApi,

      onSuccess: () => {
        toast.success(tAdminShop("toast.updated"));
        queryClient.invalidateQueries({ queryKey: ["voucher-products"] });
      },

      onError: () => {
        toast.error(tAdminShop("toast.updateFailed"));
      },
    });

  // update isActive property
  // update isActive property
  const {
    isPending: updateVoucherProductStatusIsPending,
    mutate: updateVoucherProductStatus,
  } = useMutation({
    mutationFn: updateVoucherProductStatusApi,

    onSuccess: () => {
      toast.success(tAdminShop("toast.statusUpdated"));

      queryClient.invalidateQueries({
        queryKey: ["voucher-products"],
      });
    },

    onError: () => {
      toast.error(tAdminShop("toast.statusUpdateFailed"));
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

    // edit voucher product
    editVoucherProduct,
    editVoucherProductIsPending,

    // Active status
    updateVoucherProductStatus,
    updateVoucherProductStatusIsPending,
  };
}
