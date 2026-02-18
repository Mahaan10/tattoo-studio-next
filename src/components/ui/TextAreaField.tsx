import { FieldError, Path, UseFormRegister } from "react-hook-form";

interface TextAreaFieldProps<T extends Record<string, any>> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
  rows?: number;
}

function TextAreaField<T extends Record<string, any>>({
  label,
  name,
  register,
  errors,
  rows = 4,
}: TextAreaFieldProps<T>) {
  return (
    <div className="relative">
      <textarea
        id={label}
        rows={rows}
        placeholder=" "
        {...register(name)}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-lg border border-bright-snow/50 dark:border-onyx/50 dark:hover:border-onyx/75 hover:border-bright-snow/75 dark:focus:border-onyx focus:border-bright-snow transition-all duration-300 focus:outline-none peer resize-none"
      />
      <label
        htmlFor={label}
        className="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-carbon-black dark:bg-snow opacity-75 peer-focus:opacity-100 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
      >
        <span>{label}</span>
      </label>
      {errors && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
    </div>
  );
}

export default TextAreaField;
