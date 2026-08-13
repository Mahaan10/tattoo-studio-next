import { VoucherProductResponse } from "@/components/schema & types/product/product.types";
import useProducts from "../../shop/useProducts";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateVoucherProductFormData,
  createVoucherProductSchema,
} from "@/components/schema & types/product/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import InputField from "@/components/ui/InputField";
import DotsLoader from "@/components/ui/DotsLoader";
import SelectBox from "@/components/ui/SelectBox";
import { euroToCents } from "@/components/utils/formatter";
import { useTranslations } from "next-intl";

interface ShopFormProps {
  onClose: () => void;
  voucherProductToEdit?: VoucherProductResponse | null;
}

function ShopForm({ onClose, voucherProductToEdit }: ShopFormProps) {
  const t = useTranslations("admin.shops");

  const {
    createVoucherProduct,
    createVoucherProductIsPending,
    editVoucherProduct,
    editVoucherProductIsPending,
  } = useProducts();

  const {
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
    register,
    watch,
    setValue,
  } = useForm<CreateVoucherProductFormData>({
    resolver: zodResolver(createVoucherProductSchema as any),
    mode: "onChange",
    defaultValues: {
      type: "FULL_DAY",
      name: "",
      price: null,
      discountPercent: 0,
      voucherTreatment: "SINGLE_PURPOSE",
    },
  });

  const selectedType = watch("type");

  const isFixedPriceProduct =
    selectedType === "FULL_DAY" || selectedType === "HALF_DAY";

  const isCustomProduct = selectedType === "CUSTOM";

  useEffect(() => {
    if (!voucherProductToEdit) {
      return;
    }

    reset({
      type: voucherProductToEdit.type,
      name: voucherProductToEdit.name,
      price:
        voucherProductToEdit.priceCents !== null
          ? voucherProductToEdit.priceCents / 100
          : null,
      discountPercent: voucherProductToEdit.discountPercent,
      voucherTreatment: voucherProductToEdit.voucherTreatment,
    });
  }, [voucherProductToEdit, reset]);

  useEffect(() => {
    if (selectedType === "CUSTOM") {
      setValue("price", null, {
        shouldValidate: true,
      });

      setValue("discountPercent", 0, {
        shouldValidate: true,
      });
    }
  }, [selectedType, setValue]);

  const onSubmit: SubmitHandler<CreateVoucherProductFormData> = (data) => {
    if (voucherProductToEdit?.id) {
      // PATCH
      // Type is intentionally NOT sent.

      const updateVoucherProduct = {
        name: data.name,
        priceCents: isFixedPriceProduct ? euroToCents(data.price!) : null,
        discountPercent: isFixedPriceProduct ? data.discountPercent : 0,
      };

      editVoucherProduct(
        {
          voucherProductId: voucherProductToEdit.id,
          newVoucherProduct: updateVoucherProduct,
        },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        },
      );

      return;
    }

    // POST
    const newVoucherProduct = {
      type: data.type,
      name: data.name,
      priceCents: isFixedPriceProduct ? euroToCents(data.price!) : null,
      discountPercent: isFixedPriceProduct ? data.discountPercent : 0,
      voucherTreatment: data.voucherTreatment,
    };

    createVoucherProduct(newVoucherProduct, {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  const isPending =
    createVoucherProductIsPending || editVoucherProductIsPending;

  const voucherProductTypeOption = [
    {
      id: 1,
      label: t("type.fullDay"),
      value: "FULL_DAY",
    },
    {
      id: 2,
      label: t("type.halfDay"),
      value: "HALF_DAY",
    },
    {
      id: 3,
      label: t("type.custom"),
      value: "CUSTOM",
    },
  ];

  return (
    <form
      className={`grid grid-cols-1 items-center justify-center gap-5 md:gap-6 ${
        isPending ? "pointer-events-none opacity-70" : ""
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Type - CREATE ONLY */}
      {!voucherProductToEdit && (
        <SelectBox<CreateVoucherProductFormData>
          name="type"
          label={t("form.type")}
          register={register}
          errors={errors.type}
          options={voucherProductTypeOption}
          required
        />
      )}

      {/* Name */}
      <InputField<CreateVoucherProductFormData>
        name="name"
        label={t("form.name")}
        register={register}
        errors={errors.name}
        required
      />

      {/* Fixed-price fields */}
      {!isCustomProduct && (
        <>
          <InputField<CreateVoucherProductFormData>
            label={t("form.price")}
            name="price"
            errors={errors.price}
            register={register}
            type="tel"
            required
          />

          <InputField<CreateVoucherProductFormData>
            name="discountPercent"
            label={t("form.discount")}
            register={register}
            errors={errors.discountPercent}
            type="tel"
            required
          />
        </>
      )}
      <button
        type="submit"
        disabled={isPending || !isValid}
        className="submit-btn"
      >
        {isPending ? (
          voucherProductToEdit ? (
            <>
              {t("form.updating")} <DotsLoader />
            </>
          ) : (
            <>
              {t("form.creating")} <DotsLoader />
            </>
          )
        ) : voucherProductToEdit ? (
          t("form.update")
        ) : (
          t("form.create")
        )}
      </button>
    </form>
  );
}

export default ShopForm;
