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
  multiple?: boolean;
}

function InputFile<T extends Record<string, any>>({
  label,
  name,
  setValue,
  showPreview = true,
  accept = "image/*",
  errors,
  required,
  multiple,
}: InputFileProps<T>) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    if (multiple) {
      setValue(name, selectedFiles as any, {
        shouldValidate: true,
        shouldDirty: true,
      });
    } else {
      setValue(name, selectedFiles[0] as any, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [selectedFiles]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const newFiles = Array.from(fileList);

    if (!multiple) {
      const file = newFiles[0];

      setSelectedFiles([file]);

      if (showPreview) {
        setPreviews([URL.createObjectURL(file)]);
      }

      return;
    }

    // multiple mode
    setSelectedFiles((prev) => [...prev, ...newFiles]);

    if (showPreview) {
      const newUrls = newFiles.map((file) => URL.createObjectURL(file));
      setPreviews((prev) => [...prev, ...newUrls]);
    }
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
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
          className="block w-full px-3 pb-2.5 pt-4 text-sm bg-transparent border border-onyx/50 hover:border-onyx/75 focus:border-onyx transition-all duration-300 focus:shadow-xs focus:shadow-black-red appearance-none focus:outline-none peer rounded-lg"
        />

        <label
          htmlFor={label}
          className="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-left bg-alabaster opacity-75 peer-focus:opacity-100 px-2 peer-focus:px-2 peer-focus:text-onyx peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 space-x-1"
        >
          <span>{label}</span>
          {required && <span className="text-red-700 text-sm">*</span>}
        </label>
      </div>
      {showPreview && previews.length > 0 && (
        <div className="flex flex-wrap gap-x-3 my-1">
          {previews.map((url, index) => (
            <div
              key={index}
              className="relative w-14 h-14 border border-onyx/50 rounded-md overflow-hidden my-1 group"
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
                className="absolute -top-1 -right-1 text-red-700 bg-transparent rounded-full"
                title="Remove image"
              >
                <IoIosCloseCircleOutline className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
      {errors && <p className="text-red-700 text-xs mt-1">{errors.message}</p>}
    </div>
  );
}

export default InputFile;
