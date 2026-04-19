"use client";

import { useFormContext } from "react-hook-form";
import DatePickerField from "@/components/ui/DatePickerField";
import SelectBox from "@/components/ui/SelectBox";
import { GuestArtistBookingAppointment } from "@/components/schema & types/guest-artist/guest-artist.schema";
import { useEffect } from "react";
import { GuestArtistDaysAvailability } from "@/components/schema & types/guest-artist/guest-artist.types";
import useGuestArtistBooking from "../useGuestArtistBooking";
import ReadOnlyField from "@/components/ui/ReadOnlyField";

interface AvailabilityProps {
  onNext: () => void;
}

function Availability({ onNext }: AvailabilityProps) {
  const {
    control,
    register,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useFormContext<GuestArtistBookingAppointment>();

  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const range = watch("dateRange");
  const numberOfTables = watch("numberOfTables");

  const {
    tableAvailability,
    tableAvailabilityIsError,
    tableAvailabilityIsLoading,
    tablePricePerDay,
    monthlyDiscountPercent,
  } = useGuestArtistBooking({ startDate, endDate });

  // availability logic
  const maxTablesAvailable =
    tableAvailability?.length > 0
      ? Math.min(...tableAvailability.map((d) => d.availableTables))
      : 0;

  useEffect(() => {
    setValue("numberOfTables", 1);
  }, [maxTablesAvailable, setValue]);

  useEffect(() => {
    if (range?.from) {
      setValue("startDate", range.from, { shouldValidate: true });
    }

    if (range?.to) {
      setValue("endDate", range.to, { shouldValidate: true });
    }
  }, [range, setValue]);

  // disable fully booked dates
  const disabledDates =
    tableAvailability
      ?.filter((d) => d.availableTables === 0)
      .map((d) => {
        const [y, m, day] = d.date.split("-");
        return new Date(Number(y), Number(m) - 1, Number(day));
      }) || [];

  const isDateSelected = startDate && endDate;

  const tableOptions =
    maxTablesAvailable > 0
      ? Array.from({ length: maxTablesAvailable }, (_, i) => ({
          id: i + 1,
          label: `${i + 1} Table${i + 1 > 1 ? "s" : ""}`,
          value: String(i + 1),
        }))
      : [];

  const getDays = () => {
    if (!startDate || !endDate) return 0;

    const diff = endDate.getTime() - startDate.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
  };

  const totalDays = getDays();

  const basePrice = totalDays * tablePricePerDay * Number(numberOfTables || 0);

  const isMonthly = totalDays >= 30;

  const discountAmount = isMonthly
    ? (basePrice * monthlyDiscountPercent) / 100
    : 0;

  const finalPrice = basePrice - discountAmount;

  const basePriceText = `${basePrice.toFixed(2)}€`;

  const discountText = `-${discountAmount.toFixed(2)}€ (${monthlyDiscountPercent}%)`;

  const finalPriceText = `${finalPrice.toFixed(2)}€`;

  const availabilityText = tableAvailabilityIsLoading
    ? "Checking availability..."
    : tableAvailabilityIsError
      ? "Error loading availability"
      : maxTablesAvailable > 0
        ? `${maxTablesAvailable} Tables available`
        : "No tables available";

  return (
    <>
      <DatePickerField<GuestArtistBookingAppointment>
        label="Select Dates"
        name={"dateRange" as any}
        control={control}
        errors={undefined}
        mode="range"
        disablePast
        disabledDates={disabledDates}
        excludeDays={[0]}
      />

      {/* Availability */}
      {isDateSelected && (
        <ReadOnlyField label="Availability" value={availabilityText} />
      )}

      {/* Tables */}
      <SelectBox<GuestArtistBookingAppointment>
        label="Number of Tables"
        name="numberOfTables"
        register={register}
        errors={errors.numberOfTables}
        options={tableOptions}
        disabled={
          !isDateSelected ||
          tableAvailabilityIsLoading ||
          maxTablesAvailable === 0
        }
      />

      {totalDays > 0 && numberOfTables && !isMonthly && (
        <ReadOnlyField label="Total Price" value={basePriceText} />
      )}

      {totalDays > 0 && numberOfTables && isMonthly && (
        <>
          <ReadOnlyField label="Total Price" value={basePriceText} />

          <ReadOnlyField
            label={`Discount (${monthlyDiscountPercent}%)`}
            value={discountText}
          />

          <ReadOnlyField label="Final Price" value={finalPriceText} />
        </>
      )}

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        disabled={!isDateSelected || maxTablesAvailable === 0}
        className="submit-btn"
      >
        Continue
      </button>
    </>
  );
}

export default Availability;
