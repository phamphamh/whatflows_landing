
import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className = ""
}) => {
  const baseStyles = "h-9 text-base font-semibold rounded-xl cursor-pointer min-w-[89px]";

  const variantStyles = {
    primary: "text-white bg-black",
    outline: "text-black bg-white border border-black border-solid"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
