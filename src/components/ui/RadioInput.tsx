import { Controller, Path, Control } from "react-hook-form";

interface RadioInputProps<T extends Record<string, any>> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  errors?: any;
  required?: boolean;
}

function RadioInput<T extends Record<string, any>>({
  label,
  name,
  control,
  errors,
  required,
}: RadioInputProps<T>) {
  return (
    <div className="flex flex-col gap-2 p-3 border dark:border-onyx/20 dark:hover:border-onyx/50 border-bright-snow/50 hover:border-bright-snow/75 transition-colors duration-200 rounded-lg">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">
          {/* need to defne the label should be in two line if longer than expected! */}
          {label}{" "}
          {required && (
            <span className="dark:text-red-700 text-red-500">*</span>
          )}
        </label>

        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={field.value === true}
                  onChange={() => field.onChange(true)}
                  className="custom-radio"
                />
                Yes
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={field.value === false}
                  onChange={() => field.onChange(false)}
                  className="custom-radio"
                />
                No
              </label>
            </div>
          )}
        />
      </div>

      {errors && (
        <p className="dark:text-red-700 text-red-500 text-xs mt-1">
          {errors.message}
        </p>
      )}
    </div>
  );
}

export default RadioInput;
