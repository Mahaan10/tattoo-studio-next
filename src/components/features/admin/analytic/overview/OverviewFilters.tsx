"use client";

import { AnalyticsFilterForm } from "@/components/schema & types/analytics/analytics.types";
import CheckBoxInput from "@/components/ui/CheckBoxInput";
import DatePickerField from "@/components/ui/DatePickerField";
import { Controller, useForm } from "react-hook-form";

interface OverviewFiltersProps {
  defaultValues: AnalyticsFilterForm;
  onSubmit: (values: AnalyticsFilterForm) => void;
}

function OverviewFilters({ defaultValues, onSubmit }: OverviewFiltersProps) {
  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<AnalyticsFilterForm>({
    defaultValues,
  });

  const from = watch("from");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-snow/20 bg-card p-5"
    >
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
        <DatePickerField
          label="From"
          name="from"
          control={control}
          errors={errors.from}
          disableFuture
          isDark
        />

        <DatePickerField
          label="To"
          name="to"
          control={control}
          errors={errors.to}
          disableFuture
          minDate={from}
          isDark
        />

        <Controller
          control={control}
          name="granularity"
          render={({ field }) => (
            <select
              value={field.value}
              onChange={field.onChange}
              className="border border-alabaster/50 rounded-lg px-3 py-3 bg-transparent"
            >
              <option value="day">Daily</option>
              <option value="week">Weekly</option>
              <option value="month">Monthly</option>
            </select>
          )}
        />

        <CheckBoxInput
          label="Include walk-in bookings"
          name="includeWalkIn"
          register={register}
          errors={errors.includeWalkIn}
        />

        <div className="flex justify-end sm:items-end">
          <button
            type="submit"
            className="submit-btn w-full text-sm lg:text-base"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </form>
  );
}

export default OverviewFilters;
