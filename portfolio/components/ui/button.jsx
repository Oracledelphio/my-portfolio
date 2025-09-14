import React from "react";

export function Button({
  children,
  color = "green",
  className = "",
  ...props
}) {
  // Supported colors: green, blue, yellow, red
  const colorClass =
    {
      green: "button-green",
      blue: "button-blue",
      yellow: "button-yellow",
      red: "button-red",
    }[color] || "button-green";

  return (
    <button
      {...props}
      className={`button-glass ${colorClass} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
