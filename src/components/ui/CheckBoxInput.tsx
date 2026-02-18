import { FieldError, Path, UseFormRegister } from "react-hook-form";

interface CheckBoxInputProps<T extends Record<string, any>> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors?: FieldError;
}

function CheckBoxInput<T extends Record<string, any>>({
  label,
  name,
  register,
  errors,
}: CheckBoxInputProps<T>) {
  return (
    <div className="flex flex-col gap-1 py-1">
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          {...register(name)}
          className="w-5 h-5 mt-0.5 dark:accent-onyx accent-snow rounded dark:border-onyx/20 border-snow/75 cursor-pointer"
        />
        <span className="text-sm text-body dark:group-hover:text-onyx group-hover:text-snow transition-colors">
          {label}
        </span>
      </label>
      {errors && (
        <p className="dark:text-red-700 text-red-500 text-[10px] ml-8">
          {errors.message}
        </p>
      )}
    </div>
  );
}

export default CheckBoxInput;
