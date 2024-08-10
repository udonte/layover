import React from "react";

const Button = ({
  type = "button",
  size = "md",
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center focus:outline-none transition rounded-3xl";

  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-8 py-2 text-base",
    lg: "px-12 py-4 text-lg",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]}  ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
