import React from "react";

interface ButtonProps {
  /**
   * label of the button
   */
  text: string;
  /**
   * border radius of button
   */
  borderRadius?: keyof typeof buttonSizeMap;
  /**
   * disable button
   */
  disable?: boolean;
  /**
   * full width of the button
   */
  fullWidth?: boolean;
  /**
   * size of the button
   */
  size: keyof typeof buttonSizeMap;
  /**
   * optional click event
   */
  onClick?: () => void;
  /**
   * type of button
   */
  variant: keyof typeof buttonTypeMap;
}

const Button = ({
  borderRadius = "xs",
  disable = false,
  fullWidth = false,
  text,
  size = "md",
  onClick,
  variant,
}: ButtonProps) => {
  const clickHandler = () => {
    if (!onClick) return;
    onClick();
  };
  return (
    <button
      className={`${disable ? "bg-neutrals-200" : buttonTypeMap[variant]}  ${
        buttonSizeMap[size].wrap
      } 
      ${buttonSizeMap[borderRadius].borderRadius} 
        ${fullWidth && "w-full"}
      flex outline-hidden relative items-center justify-center border p-2 rounded border-0 ${
        variant === "default" ? "text-black" : "text-white"
      }`}
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
};

export default Button;
export { Button };

const buttonTypeMap = {
  default: "bg-neutrals-100 hover:bg-neutrals-200",
  danger: "bg-red-400 hover:bg-red-500",
  primary: "bg-primary-400 hover:bg-primary-600",
  secondary: "bg-secondary-400 hover:bg-secondary-500",
  success: "bg-green-300 hover:bg-green-500",
};

const buttonSizeMap = {
  xs: {
    wrap: "min-w-button-xs",
    borderRadius: "rounded-none",
  },
  sm: {
    wrap: "min-w-button-sm",
    borderRadius: "rounded-sm",
  },
  md: {
    wrap: "min-w-button-md",
    borderRadius: "rounded-md",
  },
  lg: {
    wrap: "min-w-button-lg",
    borderRadius: "rounded-lg",
  },
  xl: {
    wrap: "min-w-button-xl",
    borderRadius: "rounded-xl",
  },
};
