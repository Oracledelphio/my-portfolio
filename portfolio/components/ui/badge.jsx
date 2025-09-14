import React from "react";

export function Badge({ children, ...props }) {
  return (
    <span
      {...props}
      style={{
        padding: "4px 8px",
        borderRadius: "12px",
        background: "#eee",
        color: "#333",
        fontSize: "12px",
      }}
    >
      {children}
    </span>
  );
}
