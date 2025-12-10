import React from "react";
import "../../styles/Button.css"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#edc531] text-black hover:bg-[#d4b02b]",
    secondary: "bg-[#a47e1b] text-white hover:bg-[#8a6c15]",
    outline: "outline-btn border-1 border-[#a47e1b] text-[#000000] hover:bg-[#a47e1b]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  // Ensure secondary variant always shows white text even if extra classes are passed
  const inlineStyle = variant === "secondary" ? { color: "#ffffff" } : undefined;

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      style={inlineStyle}
      {...props}
    />
  );
}
