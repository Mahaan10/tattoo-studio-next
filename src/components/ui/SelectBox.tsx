import { FieldError, Path, UseFormRegister } from "react-hook-form";

interface SelectBoxOptions {
  id: number;
  label: string;
  value: string;
}

interface SelectBoxProps<T extends Record<string, any>> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
  options: SelectBoxOptions[];
  required?: boolean;
}

function SelectBox<T extends Record<string, any>>({
  label,
  name,
  options,
  register,
  errors,
  required,
}: SelectBoxProps<T>) {
  return (
    <div className="relative">
      <select
        {...register(name)}
        id={label}
        defaultValue=""
        className="block w-full px-3 pb-2.5 pt-4 text-sm bg-transparent border border-bright-snow/50 dark:border-onyx/50 dark:hover:border-onyx/75 hover:border-bright-snow/75 dark:focus:border-onyx focus:border-bright-snow transition-all duration-300 focus:shadow-xs dark:focus:shadow-black-red focus:shadow-bright-snow/50 appearance-none focus:outline-none peer rounded-lg"
      >
        <option value="" disabled hidden></option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <label
        htmlFor={label}
        className="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-carbon-black dark:bg-snow opacity-75 peer-focus:opacity-100 px-2 peer-focus:px-2 dark:peer-focus:text-onyx peer-focus:text-snow peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 space-x-1"
      >
        <span>{label}</span>
        {required && (
          <span className="dark:text-red-700 text-red-500 text-sm">*</span>
        )}
      </label>

      {errors && (
        <p className="dark:text-red-700 text-red-500 text-xs mt-1">
          {errors.message}
        </p>
      )}
    </div>
  );
}

export default SelectBox;
