import { FieldError, Path, UseFormRegister } from "react-hook-form"

interface RadioInputProps<T extends Record<string, any>> {
    label: string,
    name: Path<T>,
    register: UseFormRegister<T>,
    errors?: FieldError,
    required?: boolean
}

function RadioInput<T extends Record<string, any>>({ label, name, register, errors, required }: RadioInputProps<T>) {

    return (
        <div className="flex flex-col gap-2 p-3 border border-onyx/20 rounded-lg hover:border-onyx/50 transition-colors bg-snow/50">
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-onyx">
                    {label} {required && <span className="text-red-700">*</span>}
                </label>

                <div className="flex items-center gap-x-4">
                    {/* Yes Option */}
                    <label className="flex items-center gap-x-2 cursor-pointer group">
                        <input
                            type="radio"
                            value="true"
                            {...register(name)}
                            className="custom-radio"
                        />
                        <span className="text-sm text-body group-hover:text-onyx transition-colors">Yes</span>
                    </label>

                    {/* No Option */}
                    <label className="flex items-center gap-x-2 cursor-pointer group">
                        <input
                            type="radio"
                            value="false"
                            {...register(name)}
                            className="custom-radio"
                        />
                        <span className="text-sm text-body group-hover:text-onyx transition-colors">No</span>
                    </label>
                </div>
            </div>

            {errors && (
                <p className="text-red-700 text-xs mt-1">
                    {errors.message}
                </p>
            )}
        </div>
    )
}

export default RadioInput