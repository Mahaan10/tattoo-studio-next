import { Control, Controller, FieldError, Path } from "react-hook-form";
import {
  DayPicker, Matcher
} from "react-day-picker";
import { format } from "date-fns";
import { useState } from "react";
import useOutsideClick from "@/components/hook/useOutsideClick";
//import "react-day-picker/dist/style.css";

interface DatePickerProps<T extends Record<string, any>> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  errors: FieldError | undefined;
  required?: boolean;
  mode?: "single" | "multiple";
  disablePast?: boolean,
  disableFuture?: boolean
}

function DatePickerField<T extends Record<string, any>>({
  label,
  name,
  control,
  errors,
  required,
  mode = "single",
  disablePast,
  disableFuture
}: DatePickerProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const containerRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const today = new Date()
  const disabledMatchers: Matcher[] = [];

  if (disablePast) disabledMatchers.push({ before: today })


  if (disableFuture) disabledMatchers.push({ after: today })


  return (
    <div className="relative" ref={containerRef}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          const handleInputClick = () => {
            const dateValue = value as any
            if (dateValue instanceof Date) {
              setCurrentMonth(value)
            }
            setIsOpen((prev) => !prev)
          }

          const handleSelect = (val: any) => {
            onChange(val);
            if (mode === "single") setIsOpen(false);
          };

          const getDisplayValue = () => {
            if (!value) return "";
            if (mode === "single") {
              const dateValue = value as any;
              if (dateValue instanceof Date) {
                return format(dateValue, "PPP");
              }
            }
            if (mode === "multiple" && Array.isArray(value)) {
              return value.length > 0 ? `${value.length} dates selected` : "";
            }
            return "";
          };



          return (
            <>
              <div className="relative">
                <input
                  readOnly
                  value={getDisplayValue()}
                  onClick={() => setIsOpen((prev) => !prev)}
                  placeholder=" "
                  className="block w-full px-3 pb-2.5 pt-4 text-sm bg-transparent border border-onyx/50 hover:border-onyx/75 focus:border-onyx transition-all duration-300 cursor-pointer peer rounded-lg outline-none"
                />
                <label className="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 opacity-75 origin-left bg-alabaster px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 pointer-events-none transition-all">
                  <span>{label}</span>
                  {required && <span className="text-red-700 ml-1">*</span>}
                </label>
              </div>

              {isOpen && (
                <div className="absolute bottom-full mb-2 z-50 p-4 bg-onyx border border-alabaster/10 rounded-2xl slide-in-from-bottom-2 duration-2000">
                  <DayPicker
                    captionLayout="dropdown"
                    mode={mode as any}
                    selected={value}
                    onSelect={handleSelect}
                    month={currentMonth}
                    onMonthChange={setCurrentMonth}
                    fromYear={disableFuture ? 1940 : undefined}
                    toYear={disablePast ? today.getFullYear() + 1 : undefined}
                    disabled={disabledMatchers.length ? disabledMatchers : undefined}
                    classNames={{
                      months: "flex flex-col space-y-4",
                      month: "space-y-4",
                      month_caption: "flex justify-center pt-1 relative items-center gap-1",
                      caption_label: "hidden",
                      dropdowns: "flex justify-center gap-2 z-20",
                      dropdown: "p-1.5 rounded-sm border border-alabaster/50 text-xs bg-onyx text-snow hover:border-alabaster/75 focus:border-alabaster outline-none transition-all duration-200 cursor-pointer appearance-none custom-select-arrow",
                      nav: "flex items-center",
                      button_previous: "absolute left-4 top-9 z-30 h-7 w-7 flex items-center p-1 justify-center hover:opacity-100 transition-all bg-snow/40 rounded-full hover:bg-snow/75 duration-200",
                      button_next: "absolute right-4 top-9 z-30 h-7 w-7 flex items-center p-1 justify-center hover:opacity-100 transition-all bg-snow/40 rounded-full hover:bg-snow/75 duration-200",
                      month_grid: "w-full border-collapse space-y-1",
                      weekdays: "flex",
                      weekday: "text-snow/75 rounded-md w-9 font-normal text-[0.8rem]",
                      week: "flex w-full mt-2",
                      day: "h-9 w-9 p-0 flex items-center justify-center text-sm font-normal text-snow/75 hover:bg-dried-mustard/20 hover:text-dried-mustard rounded-full transition-colors cursor-pointer",
                      selected: "bg-dried-mustard! text-onyx! hover:bg-dried-mustard hover:text-onyx focus:bg-dried-mustard focus:text-onyx",
                      today: "text-dried-mustard! underline underline-offset-4 font-semibold",
                      outside: "text-snow/40 opacity-50",
                      disabled: "text-snow/40 opacity-30 cursor-not-allowed",
                      hidden: "invisible",
                    }}
                  />
                </div>
              )}
            </>
          );
        }}
      />
      {errors && <p className="text-red-700 text-xs mt-1">{errors.message}</p>}
    </div>
  );
}

export default DatePickerField;
