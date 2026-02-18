import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldError, Path, PathValue, UseFormSetValue } from "react-hook-form";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface InputFileProps<T extends Record<string, any>> {
  label: string;
  name: Path<T>;
  errors?: FieldError;
  setValue: UseFormSetValue<T>;
  accept?: string;
  showPreview?: boolean;
  required?: boolean;
}

function InputFile<T extends Record<string, any>>({
  label,
  name,
  setValue,
  showPreview = true,
  accept = "image/*",
  errors,
  required,
}: InputFileProps<T>) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    setValue(name, selectedFiles as PathValue<T, Path<T>>, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, [selectedFiles, name, setValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList) {
      const newFiles = Array.from(fileList);

      setSelectedFiles((prev) => [...prev, ...newFiles]);

      if (showPreview) {
        const newUrls = newFiles.map((file) => URL.createObjectURL(file));
        setPreviews((prev) => [...prev, ...newUrls]);
      }
    }
    //e.target.value = ""
  };

  const removeImage = (index: number) => {
    if (previews[index]) {
      URL.revokeObjectURL(previews[index]);
    }

    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <input
          type="file"
          multiple
          accept={accept}
          onChange={handleChange}
          className="block w-full px-3 pb-2.5 pt-4 text-sm bg-transparent border border-bright-snow/50 dark:border-onyx/50 dark:hover:border-onyx/75 hover:border-bright-snow/75 dark:focus:border-onyx focus:border-bright-snow transition-all duration-300 focus:shadow-xs dark:focus:shadow-black-red focus:shadow-bright-snow/50 appearance-none focus:outline-none peer rounded-lg"
        />

        <label
          htmlFor={label}
          className="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-carbon-black dark:bg-snow opacity-75 peer-focus:opacity-100 px-2 peer-focus:px-2 dark:peer-focus:text-onyx peer-focus:text-snow peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 space-x-1"
        >
          <span>{label}</span>
          {required && (
            <span className="dark:text-red-700 text-red-500 text-sm">*</span>
          )}
        </label>
      </div>
      {showPreview && previews.length > 0 && (
        <div className="flex flex-wrap gap-x-3 my-1">
          {previews.map((url, index) => (
            <div
              key={index}
              className="relative w-14 h-14 border dark:border-onyx/20 border-bright-snow/75 rounded-md overflow-hidden my-1 group"
            >
              <Image
                src={url}
                alt={`Preview ${index}`}
                fill
                className="object-cover"
              />
              {/* Delete btn */}
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-1 -right-1 dark:text-red-700 text-red-500 bg-transparent rounded-full"
                title="Remove image"
              >
                <IoIosCloseCircleOutline className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
      {errors && (
        <p className="dark:text-red-700 text-red-500 text-xs mt-1">
          {errors.message}
        </p>
      )}
    </div>
  );
}

export default InputFile;
