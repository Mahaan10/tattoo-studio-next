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
} from "@/components/constants/Navigation";
import TextAreaField from "@/components/ui/TextAreaField";
import { BookingInfo } from "@/components/schema & types/booking/booking-appointment.types";
import { formatBookingStatus } from "@/components/utils/formatter";
import DatePickerField from "@/components/ui/DatePickerField";
import useArtist from "../../artist/useArtist";

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
  } = useForm<UpdateStatusFormValues>({
    mode: "onChange",
    resolver: zodResolver(UpdateStatusValidationSchema),
  });

  const availableStatuses =
    STATUS_TRANSITIONS[booking.status as any] ||
    []; /* BOOKINGSTATS INSTEAD ANY */

  const filteredStatusOptions = BookingStatus.filter((option) =>
    availableStatuses.includes(option.value as any),
  );

  const onSubmit: SubmitHandler<UpdateStatusFormValues> = (data) => {
    if (data.status === "TATTOO_SCHEDULED") {
      // ⚠️ you need extra fields for this
      let newTattooSchedule = {
        scheduledDate: data.scheduledDate!,
        artistId: data.artistId!,
        stationId: data.stationId!,
        durationNote: data.durationNote!,
        notes: data.notes || "",
      };
      scheduleTattoo({ bookingId: booking.id, newTattooSchedule });

      return;
    } else {
      let newBookingStatus = {
        status: data.status,
        adminNotes: data.adminNotes,
        cancelReason: data.cancelReason,
      };

      updateBookingStatus(
        { bookingId: booking.id, newBookingStatus },
        {
          onSuccess: () => onClose(),
        },
      );
    }
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
        label="Status"
        errors={errors.status}
        options={filteredStatusOptions}
        required
        defaultValue={booking.status}
      />

      {/* Admin notes */}
      <TextAreaField<UpdateStatusFormValues>
        label="Admin Notes"
        name="adminNotes"
        errors={errors.adminNotes}
        register={register}
      />

      {/* Cancell Reason */}

      {watch("status") === "CANCELLED" && (
        <SelectBox<UpdateStatusFormValues>
          name="cancelReason"
          label="Cancel Reason"
          register={register}
          errors={errors.cancelReason}
          options={BookingStatusCancelReason}
        />
      )}

      {watch("status") === "TATTOO_SCHEDULED" && (
        <>
          <input name="scheduledDate" type="datetime-local" />
          <input name="artistId" />
          <input name="stationId" />
          <input name="durationNote" />
          <textarea name="notes" />
        </>
      )}

      <button
        type="submit"
        disabled={updateBookingStatusIsPending || !isValid}
        className="submit-btn"
      >
        {updateBookingStatusIsPending ? "Submitting ..." : "Update Status"}
      </button>
    </form>
  );
}

export default UpdateBookingStatusForm;
