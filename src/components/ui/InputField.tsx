import { FieldError, Path, UseFormRegister } from "react-hook-form";

interface InputFieldProps<T extends Record<string, any>> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  errors: FieldError | undefined;
  required?: boolean;
}

function InputField<T extends Record<string, any>>({
  label,
  name,
  type = "text",
  register,
  errors,
  required,
}: InputFieldProps<T>) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder=""
        {...register(name)}
        id={label}
        className="block w-full px-3 pb-2.5 pt-4 text-sm bg-transparent border border-bright-snow/50 dark:border-onyx/50 dark:hover:border-onyx/75 hover:border-bright-snow/75 dark:focus:border-onyx focus:border-bright-snow transition-all duration-300 focus:shadow-xs dark:focus:shadow-black-red focus:shadow-bright-snow/50 appearance-none focus:outline-none peer rounded-lg"
      />
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

export default InputField;
