type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "solid" | "outline";
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variant = "solid",
  onClick,
  className,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm transition ease-in-out delay-150 hover:scale-110";
  const variantStyles =
    variant === "solid"
      ? `${baseStyles} bg-primary text-white`
      : `${baseStyles} border border-black text-black bg-white`;
  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  return (
    <>
      {type ? (
        <button type={type} className={combinedStyles} onClick={onClick}>
          {children}
        </button>
      ) : (
        <button onClick={onClick} className={combinedStyles}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
