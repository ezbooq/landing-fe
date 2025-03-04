"use client";

type SelectFieldProps = {
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  name: string;
  placeholder?: string;
  options: { value: string; label: string; image?: string }[];
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
};

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  register,
  name,
  placeholder,
  options,
  errorMessage,
  className = "",
  disabled = false,
  required = false
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="mb-1 text-sm font-medium text-black">
          {label}{required && <span className="text-red-500">*</span>}
        </label>
      )}
      {/* <div className="relative"> */}
      <select
        {...register(name)}
        id={name}
        disabled={disabled}
        className={`pl-3 pr-5 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
          errorMessage ? "border-red-500 " : "border-black"
        }`}
      >
        {placeholder ? (
          <option value="">{placeholder}</option>
        ) : (
          <option>Select {label}</option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* </div> */}
      {errorMessage && (
        <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default SelectField;
