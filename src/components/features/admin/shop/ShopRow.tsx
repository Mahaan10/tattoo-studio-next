import { VoucherProductResponse } from "@/components/schema & types/product/product.types";
import Table from "@/components/ui/Table";
import { formatEuro } from "@/components/utils/formatter";
import { Pencil } from "lucide-react";
import { useTranslations } from "next-intl";

interface ShopRowProps {
  index: number;
  voucherProduct: VoucherProductResponse;
  onEdit: () => void;
  onToggleActive: () => void;
  isUpdating: boolean;
}

function ShopRow({
  voucherProduct,
  index,
  onEdit,
  isUpdating,
  onToggleActive,
}: ShopRowProps) {
  const t = useTranslations("admin.shops");

  const typeLabels = {
    FULL_DAY: t("type.fullDay"),
    HALF_DAY: t("type.halfDay"),
    CUSTOM: t("type.custom"),
  };

  return (
    <Table.Row>
      {/* Index */}
      <td>{index}</td>

      {/* Type */}
      <td>{typeLabels[voucherProduct.type]}</td>

      {/* Price */}
      <td>{formatEuro(voucherProduct.priceCents)}</td>

      {/* Discount */}
      <td>
        {voucherProduct.discountPercent === 0
          ? "-"
          : `${voucherProduct.discountPercent}%`}
      </td>

      {/* Active */}
      <td>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            role="switch"
            aria-checked={voucherProduct.isActive}
            disabled={isUpdating}
            onClick={onToggleActive}
            aria-label={
              voucherProduct.isActive
                ? t("accessibility.deactivate")
                : t("accessibility.activate")
            }
            className={`
              relative flex items-center
              w-14 h-7 rounded-full
              transition-all duration-300 ease-in-out
              ${
                voucherProduct.isActive
                  ? "bg-green-500/20 border border-green-500/30"
                  : "bg-snow/10 border border-snow/10"
              }
              ${isUpdating ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            <span
              className={`
                absolute left-1
                flex items-center justify-center
                w-6 h-6 rounded-full
                bg-snow
                transition-all duration-300 ease-in-out
                ${voucherProduct.isActive ? "translate-x-6" : "translate-x-0"}
              `}
            >
              <span
                className={`
                  w-2 h-2 rounded-full
                  ${voucherProduct.isActive ? "bg-green-500" : "bg-gray-400"}
                `}
              />
            </span>
          </button>
        </div>
      </td>

      {/* Actions */}
      <td className="flex items-center justify-center">
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center justify-center size-9 rounded-xl border border-snow/10 hover:bg-black bg-onyx text-snow/75 text-center transition-all duration-300 hover:border-snow/25"
          title={t("accessibility.edit")}
        >
          <Pencil className="size-4" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ShopRow;
