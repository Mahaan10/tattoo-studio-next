"use client";

import usePagination from "@/components/hook/usePagination";
import useProducts from "../../shop/useProducts";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Table from "@/components/ui/Table";
import Pagination from "@/components/templates/admin/Pagination";
import ShopRow from "./ShopRow";
import { VoucherProductResponse } from "@/components/schema & types/product/product.types";
import Modal from "@/components/ui/Modal";
import ShopForm from "./ShopForm";
import { useTranslations } from "next-intl";

function ShopTable() {
  const t = useTranslations("admin.shops");
  const {
    allProducts,
    allProductsIsError,
    allProductsIsLoading,
    updateVoucherProductStatus,
    updateVoucherProductStatusIsPending,
  } = useProducts();

  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination(allProducts || []);

  const [voucherProductToEdit, setVoucherProductToEdit] =
    useState<VoucherProductResponse | null>(null);

  useEffect(() => {
    if (allProductsIsError) {
      toast.error(t("table.loadError"));
    }
  }, [allProductsIsError, t]);

  if (allProductsIsError) {
    return <div className="text-red-500 text-sm">{t("table.loadError")}</div>;
  }

  return (
    <>
      <Table>
        <Table.Header>
          <th className="py-2">{t("table.index")}</th>
          <th>{t("table.type")}</th>
          <th>{t("table.price")}</th>
          <th>{t("table.discount")}</th>
          <th>{t("table.active")}</th>
          <th>{t("table.actions")}</th>
        </Table.Header>
        <Table.Body>
          {allProductsIsLoading ? (
            [...Array(6)].map((_, i) => (
              <Table.Row key={i}>
                <td colSpan={6}>
                  <div className="h-10 bg-snow/10 animate-pulse rounded" />
                </td>
              </Table.Row>
            ))
          ) : allProducts?.length === 0 ? (
            <Table.Row>
              <td colSpan={6} className="py-4">
                {t("table.empty")}
              </td>
            </Table.Row>
          ) : (
            paginatedData.map((voucherProduct, index) => (
              <ShopRow
                key={voucherProduct.id}
                voucherProduct={voucherProduct}
                index={(currentPage - 1) * 6 + index + 1}
                onEdit={() => setVoucherProductToEdit(voucherProduct)}
                onToggleActive={() =>
                  updateVoucherProductStatus({
                    voucherProductId: voucherProduct.id,
                    data: {
                      isActive: !voucherProduct.isActive,
                    },
                  })
                }
                isUpdating={updateVoucherProductStatusIsPending}
              />
            ))
          )}
        </Table.Body>
      </Table>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={totalPages}
      />

      {/* Edit Voucher Product */}
      {voucherProductToEdit && (
        <Modal
          title={`Edit ${voucherProductToEdit.name}`}
          onClose={() => setVoucherProductToEdit(null)}
        >
          <ShopForm
            voucherProductToEdit={voucherProductToEdit}
            onClose={() => setVoucherProductToEdit(null)}
          />
        </Modal>
      )}
    </>
  );
}

export default ShopTable;
