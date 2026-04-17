"use client";

import {
  GuestArtistBookingAppointment,
  GuestArtistBookingSchema,
} from "@/components/schema & types/guest-artist/guest-artist.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useGuestArtistBooking from "./useGuestArtistBooking";
import InputField from "@/components/ui/InputField";
import DatePickerField from "@/components/ui/DatePickerField";
import SelectBox from "@/components/ui/SelectBox";
import CheckBoxInput from "@/components/ui/CheckBoxInput";
import { formatDate } from "@/components/utils/formattedDate";
import { useEffect } from "react";

function GuestArtistContainer() {
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
    watch,
    reset,
    control,
    setValue,
  } = useForm<GuestArtistBookingAppointment>({
    resolver: zodResolver(GuestArtistBookingSchema as any),
    mode: "onTouched",
  });

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const {
    tableAvailability,
    tableAvailabilityIsLoading,
    tableAvailabilityIsError,
    guestArtistBooking,
    guestArtistBookingIsPending,
  } = useGuestArtistBooking({ startDate, endDate });

  //  reset endDate when startDate changes
  useEffect(() => {
    if (startDate) {
      setValue("endDate", startDate);
    }
  }, [startDate, setValue]);

  //  disable days with no availability
  const disabledDates =
    tableAvailability
      ?.filter((d) => d.availableTables === 0)
      .map((d) => {
        const [y, m, day] = d.date.split("-");
        return new Date(Number(y), Number(m) - 1, Number(day));
      }) || [];

  //   Max available tables during startDate and endDate

  const maxTablesAvailable =
    tableAvailability.length > 0
      ? Math.min(...tableAvailability.map((d) => d.availableTables))
      : 0;

  // NEED TO REDEFINE THE 1 NUMBER!!!! undefined!
  useEffect(() => {
    setValue("numberOfTables", 1);
  }, [maxTablesAvailable, setValue]);

  //  select options
  const tableOptions =
    maxTablesAvailable > 0
      ? Array.from({ length: maxTablesAvailable }, (_, i) => ({
          id: i + 1,
          label: `${i + 1} table${i + 1 > 1 ? "s" : ""}`,
          value: String(i + 1),
        }))
      : [];

  const isDateSelected = startDate && endDate;

  const onSubmit: SubmitHandler<GuestArtistBookingAppointment> = (data) => {
    console.log("onSubmitData =>", data);

    guestArtistBooking({
      ...data,
      startDate: formatDate(data.startDate),
      endDate: formatDate(data.endDate),
      numberOfTables: Number(data.numberOfTables),
    });

    reset();
  };

  return (
    <div className="py-10 md:py-15 relative container mx-auto">
      <div className="h-full">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full max-w-xl bg-alabaster text-onyx rounded-2xl p-5 sm:p-6 md:p-6 shadow shadow-snow">
              <h1 className="text-3xl mb-5 font-bold">Guest Artist Request</h1>

              <form
                className="grid grid-cols-1 items-center justify-center gap-5 md:gap-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Full Name */}
                <InputField<GuestArtistBookingAppointment>
                  label="Full name"
                  name="name"
                  register={register}
                  errors={errors.name}
                  required
                />

                {/* Email */}
                <InputField<GuestArtistBookingAppointment>
                  label="Email"
                  name="email"
                  errors={errors.email}
                  register={register}
                  type="email"
                  required
                />

                {/* Phone Number */}
                <InputField<GuestArtistBookingAppointment>
                  label="Phone number"
                  name="phone"
                  errors={errors.phone}
                  register={register}
                  type="tel"
                  required
                />

                {/* Start Date */}
                <DatePickerField<GuestArtistBookingAppointment>
                  label="Start Date"
                  name="startDate"
                  control={control}
                  errors={errors.startDate}
                  required
                  disablePast
                  disabledDates={disabledDates}
                />

                {/* End Date */}
                <DatePickerField<GuestArtistBookingAppointment>
                  label="End Date"
                  name="endDate"
                  control={control}
                  errors={errors.endDate}
                  required
                  disabledDates={disabledDates}
                  minDate={startDate}
                />

                <div className="relative">
                  <input
                    readOnly
                    value={
                      maxTablesAvailable > 0
                        ? `${maxTablesAvailable} table${maxTablesAvailable > 1 ? "s" : ""} available`
                        : ""
                    }
                    placeholder=" "
                    className="block w-full px-3 pb-2.5 pt-4 text-sm bg-transparent border border-onyx/50 rounded-lg outline-none cursor-not-allowed opacity-70"
                  />
                  <label className="absolute text-sm text-body transform -translate-y-4 scale-75 top-1.5 bg-alabaster px-2">
                    Available Tables
                  </label>
                </div>

                {/* Number of Tables */}

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

                {/* Acknowledgement */}
                <CheckBoxInput<GuestArtistBookingAppointment>
                  label="Do you agree with our terms?"
                  name="acknowledgment"
                  register={register}
                  errors={errors.acknowledgment}
                />

                <button
                  type="submit"
                  disabled={guestArtistBookingIsPending || !isValid}
                  className="submit-btn"
                >
                  {guestArtistBookingIsPending
                    ? "Submitting ..."
                    : "Submit Booking"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestArtistContainer;
