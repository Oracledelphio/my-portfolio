import React from "react";

export function Badge({ children, color = "green", className = "", ...props }) {
  // Supported colors: green, blue, yellow, red
  const colorClass =
    {
      green: "badge-green",
      blue: "badge-blue",
      yellow: "badge-yellow",
      red: "badge-red",
    }[color] || "badge-green";

  return (
    <span
      {...props}
      className={`badge-glass ${colorClass} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
