"use client";

interface InputFieldProps {
  label?: string;
  type?: string; // "text", "textarea", etc.
  placeholder?: string;
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder = "",
  value,
  name,
  onChange,
  onBlur,
  errorMessage,
  className = "",
  disabled = false,
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="mb-1 text-sm font-medium text-black"
        >
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`px-4 py-2 border rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-primary ${
            errorMessage ? "border-red-500 " : "border-black"
          }`}
          rows={6} // Default rows for textarea
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
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