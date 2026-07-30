"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import useBooking from "../../booking/useBooking";
import {
  UpdateStatusFormValues,
  UpdateStatusValidationSchema,
} from "@/components/schema & types/booking/booking-status.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectBox from "@/components/ui/SelectBox";
import {
  BookingStatus,
  BookingStatusCancelReason,
} from "@/components/constants/Constants";
import TextAreaField from "@/components/ui/TextAreaField";
import {
  BookingInfo,
  TattooScheduledProps,
} from "@/components/schema & types/booking/booking-appointment.types";
import {
  formatBookingStatus,
  mergeDateAndTime,
} from "@/components/utils/formatter";
import DatePickerField from "@/components/ui/DatePickerField";
import useArtist from "../../artist/useArtist";
import InputField from "@/components/ui/InputField";
import DotsLoader from "@/components/ui/DotsLoader";
import { useTranslations } from "next-intl";
import TimePickerField from "@/components/ui/TimePickerField";

export const STATUS_TRANSITIONS: Record<
  /* BookingStatus */ any,
  /* BookingStatus */ any[]
> = {
  PENDING_CONSULT: ["CONSULT_APPROVED", "CANCELLED"],
  CONSULT_APPROVED: ["TATTOO_SCHEDULED", "CONSULT_NO_SHOW", "CANCELLED"],
  CONSULT_NO_SHOW: [],
  TATTOO_SCHEDULED: ["COMPLETED", "CANCELLED"],
  COMPLETED: [],
  CANCELLED: [],
};

interface UpdateBookingStatusFormProps {
  booking: BookingInfo;
  onClose: () => void;
}

function UpdateBookingStatusForm({
  booking,
  onClose,
}: UpdateBookingStatusFormProps) {
  const t = useTranslations("admin.bookings.updateStatus");
  const {
    updateBookingStatus,
    updateBookingStatusIsPending,
    scheduleTattoo,
    scheduleTattooIsPending,
  } = useBooking();

  const { allArtists, allArtistsIsLoading, allArtistsIsError } = useArtist();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<UpdateStatusFormValues>({
    mode: "onChange",
    resolver: zodResolver(UpdateStatusValidationSchema) as any,
    defaultValues: {
      status: booking.status,
    },
  });

  const availableStatuses =
    STATUS_TRANSITIONS[booking.status as any] ||
    []; /* BOOKINGSTATS INSTEAD ANY */

  // const filteredStatusOptions = BookingStatus.filter((option) =>
  //   availableStatuses.includes(option.value as any),
  // );

  const filteredStatusOptions = [
    {
      id: 0,
      value: booking.status,
      label: `(Current) ${formatBookingStatus(booking.status)}`,
    },
    ...BookingStatus.filter((option) =>
      availableStatuses.includes(option.value as any),
    ),
  ];

  const status = watch("status");

  const onSubmit: SubmitHandler<UpdateStatusFormValues> = (data) => {
    if (data.status === "TATTOO_SCHEDULED") {
      const newTattooSchedule: TattooScheduledProps = {
        scheduledDate: data.scheduledDate!,
        artistId: data.artistId!,
        // stationId: data.stationId!,
        notes: data.notes || "",
        agreedPriceCents:
          data.agreedPriceCents && Math.round(data.agreedPriceCents * 100),

        startsAt: mergeDateAndTime(data.scheduledDate!, data.startsAt!),

        endsAt: mergeDateAndTime(data.scheduledDate!, data.endsAt!),
      };

      scheduleTattoo(
        { bookingId: booking.id, newTattooSchedule },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        },
      );

      return;
    } else {
      const newBookingStatus = {
        status: data.status,
        adminNotes: data.adminNotes,
        cancelReason: data.cancelReason,
      };

      updateBookingStatus({ bookingId: booking.id, newBookingStatus });
    }

    reset();
    onClose();
  };

  return (
    <form
      className="grid grid-cols-1 items-center justify-center gap-5 md:gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Status */}
      <SelectBox<UpdateStatusFormValues>
        name="status"
        register={register}
        label={t("status")}
        errors={errors.status}
        options={filteredStatusOptions}
        required
        //defaultValue={booking.status}
      />

      {/* Admin notes */}
      {status !== "TATTOO_SCHEDULED" && (
        <TextAreaField<UpdateStatusFormValues>
          label={t("adminNotes")}
          name="adminNotes"
          errors={errors.adminNotes}
          register={register}
        />
      )}

      {/* Cancell Reason */}

      {status === "CANCELLED" && (
        <SelectBox<UpdateStatusFormValues>
          name="cancelReason"
          label={t("cancelReason")}
          register={register}
          errors={errors.cancelReason}
          options={BookingStatusCancelReason}
        />
      )}

      {status === "TATTOO_SCHEDULED" && (
        <>
          {/* Schedule Date */}
          <DatePickerField<UpdateStatusFormValues>
            name="scheduledDate"
            label={t("scheduleDate")}
            control={control}
            errors={errors.scheduledDate}
            disablePast
            required
          />

          {/* Artist Id */}
          {allArtistsIsLoading ? (
            <p className="text-sm">{t("loadingArtists")}</p>
          ) : (
            <SelectBox<UpdateStatusFormValues>
              name="artistId"
              label={t("artist")}
              register={register}
              options={allArtists}
              errors={errors.artistId}
            />
          )}

          {/* Price cents */}
          <InputField<UpdateStatusFormValues>
            name="agreedPriceCents"
            label="Price (€)"
            errors={errors.agreedPriceCents}
            register={register}
            required
            type="tel"
          />

          {/* <input name="stationId" />
          <input name="durationNote" /> */}

          {/* Starts At */}
          <TimePickerField<UpdateStatusFormValues>
            name="startsAt"
            label="Start Time"
            control={control}
            errors={errors.startsAt}
          />

          {/* End Time */}
          <TimePickerField<UpdateStatusFormValues>
            name="endsAt"
            label="End Time"
            control={control}
            errors={errors.endsAt}
          />

          {/* Notes */}
          <TextAreaField<UpdateStatusFormValues>
            name="notes"
            label={t("notes")}
            register={register}
            errors={errors.notes}
          />
        </>
      )}

      <button
        type="submit"
        disabled={
          updateBookingStatusIsPending || scheduleTattooIsPending || !isValid
        }
        className="submit-btn"
      >
        {updateBookingStatusIsPending || scheduleTattooIsPending ? (
          <>
            {t("updating")} <DotsLoader />
          </>
        ) : (
          t("updateStatus")
        )}
      </button>
    </form>
  );
}

export default UpdateBookingStatusForm;
