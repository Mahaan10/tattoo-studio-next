import { VoucherProductResponse } from "@/components/schema & types/product/product.types";
import DotsLoader from "@/components/ui/DotsLoader";
import Table from "@/components/ui/Table";
import { formatEuro } from "@/components/utils/formatter";
import { Pencil } from "lucide-react";

interface ShopRowProps {
  index: number;
  voucherProduct: VoucherProductResponse;
}

function ShopRow({ voucherProduct, index }: ShopRowProps) {
  //   const { editArtistStatus, editArtistStatusIsPending } = useArticle();

  //   const handleActiveToggle = () => {
  //     editArtistStatus({
  //       artistId: artist?.id,
  //       status: artist.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
  //     });
  //   };

  return (
    <Table.Row>
      <td>{index}</td>
      <td>{voucherProduct.type}</td>
      <td>{formatEuro(voucherProduct.priceCents)}</td>
      <td>
        {voucherProduct.discountPercent === 0
          ? "-"
          : voucherProduct.discountPercent}
      </td>
      <td>
        <div className="flex items-center justify-center gap-3">
          {/* Status Text */}
          {/* <span
            className={`text-xs font-medium tracking-wide transition-colors duration-300
      ${voucherProduct.isActive ? "text-green-400" : "text-snow/40"}`}
          >
            {voucherProduct.isActive ? "Active" : "Inactive"}
          </span> */}

          {/* Toggle */}
          <button
            type="button"
            role="switch"
            aria-checked={voucherProduct.isActive}
            //disabled={editArtistStatusIsPending}
            //onClick={handleActiveToggle}
            className={`
        relative flex items-center w-14 h-7 rounded-full
        transition-all duration-300 ease-in-out
        ${
          voucherProduct.isActive
            ? "bg-green-500/20 border border-green-500/30"
            : "bg-snow/10 border border-snow/10"
        }
        /* editArtistStatusIsPending && "opacity-60 cursor-not-allowed" */
      `}
          >
            <span
              className={`
          absolute left-1 flex items-center justify-center
          w-6 h-6 rounded-full bg-snow
          transition-all duration-300 ease-in-out
          ${voucherProduct.isActive ? "translate-x-6" : "translate-x-0"}
        `}
            >
              {/* {editArtistStatusIsPending ? (
                <DotsLoader />
              ) : (
                <span
                  className={`w-2 h-2 rounded-full ${
                    voucherProduct.isActive ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              )} */}
            </span>
          </button>
        </div>
      </td>
      <td className="flex items-center justify-center">
        <button
          //onClick={onCheckIn}
          className="flex items-center justify-center size-9 rounded-xl border border-snow/10 hover:bg-black bg-onyx text-snow/75 text-center transition-all duration-300 hover:border-snow/25"
          title="Check In"
        >
          <Pencil className="size-4" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ShopRow;
