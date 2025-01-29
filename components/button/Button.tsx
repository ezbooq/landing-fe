import { ImSpinner2 } from "react-icons/im";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "solid" | "outline";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "solid",
  onClick,
  className = "",
  disabled = false,
  loading = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:scale-105 md:hover:scale-110 flex items-center justify-center";

  const variantStyles =
    variant === "solid"
      ? `bg-primary text-white ${
          disabled
            ? "opacity-70 cursor-not-allowed hover:scale-100 md:hover:scale-100"
            : "hover:bg-primary-dark"
        }`
      : `border border-black text-black bg-white ${
          disabled
            ? "opacity-50 cursor-not-allowed hover:scale-100 md:hover:scale-100"
            : ""
        }`;

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="flex items-center">
          <ImSpinner2
            className={`animate-spin h-5 w-5 mr-2 ${
              variant === "solid" ? "text-white" : "text-black"
            }`}
          />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
