import { Control, Controller, FieldError, Path } from "react-hook-form";
import {
  DayPicker,
  SelectSingleEventHandler,
  SelectMultipleEventHandler,
} from "react-day-picker";
import { format } from "date-fns";
import { useState } from "react";
import useOutsideClick from "@/components/hook/useOutsideClick";
import "react-day-picker/dist/style.css";

interface DatePickerProps<T extends Record<string, any>> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  errors: FieldError | undefined;
  required?: boolean;
  mode?: "single" | "multiple";
}

function DatePickerField<T extends Record<string, any>>({
  label,
  name,
  control,
  errors,
  required,
  mode = "single",
}: DatePickerProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className="relative" ref={containerRef}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          const getDisplayValue = () => {
            if (!value) return "";
            if (mode === "single") {
              const dateValue = value as any;
              if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
                return format(dateValue, "PPP");
              }
            }
            if (mode === "multiple" && Array.isArray(value)) {
              return value.length > 0 ? `${value.length} dates selected` : "";
            }
            return "";
          };

          // Fix for the Select Handler type error
          const handleSelect = (val: any) => {
            onChange(val);
            if (mode === "single") setIsOpen(false);
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
                <div className="absolute bottom-full mb-2 z-50 p-3 bg-snow border border-onyx/20 rounded-xl shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <DayPicker
                    // v9 uses 'dropdown' or 'dropdown-years'
                    captionLayout="dropdown"
                    mode={mode as any}
                    selected={value}
                    onSelect={handleSelect}
                    startMonth={new Date(1970, 0)}
                    endMonth={new Date(new Date().getFullYear() + 10, 11)}
                    classNames={{
                      months: "flex flex-col space-y-4",
                      month: "space-y-4",
                      month_caption:
                        "flex justify-center pt-1 relative items-center gap-1",
                      caption_label: "hidden",
                      dropdowns: "flex justify-center gap-1 z-20",
                      dropdown:
                        "p-1 rounded border border-onyx/20 text-xs bg-transparent focus:outline-none cursor-pointer",
                      nav: "space-x-1 flex items-center",
                      button_previous:
                        "absolute left-1 top-4.5 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity",
                      button_next:
                        "absolute right-1 top-4.5 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity",
                      month_grid: "w-full border-collapse space-y-1",
                      weekdays: "flex",
                      weekday:
                        "text-onyx/50 rounded-md w-9 font-normal text-[0.8rem]",
                      week: "flex w-full mt-2",
                      day: "h-9 w-9 p-0 flex items-center justify-center text-sm font-normal aria-selected:opacity-100 hover:bg-onyx/10 rounded-md transition-colors cursor-pointer",
                      selected:
                        "bg-onyx hover:bg-onyx focus:bg-onyx focus:text-white",
                      today: "bg-onyx/5 text-onyx font-bold underline",
                      outside: "text-onyx/20 opacity-50",
                      disabled: "text-onyx/20 opacity-50",
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
