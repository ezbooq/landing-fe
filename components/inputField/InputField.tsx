"use client";

type InputFieldProps = {
  label?: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  placeholder?: string;
  value?: string;
  name?: string;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  register,
  placeholder = "",
  value,
  name,
  errorMessage,
  className = "",
  disabled = false,
  required = false,
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="mb-1 text-sm font-medium text-black">
          {label}{required && <span className="text-red-500">*</span>}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          {...register(name)}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={`px-4 py-2 border rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-primary ${
            errorMessage ? "border-red-500 " : "border-black"
          }`}
          rows={6} // Default rows for textarea
        />
      ) : (
        <input
          {...register(name)}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={`px-4 py-2 border rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-primary ${
            errorMessage ? "border-red-500 " : "border-black"
          }`}
        />
      )}
      {errorMessage && (
        <span className="mt-1 text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
