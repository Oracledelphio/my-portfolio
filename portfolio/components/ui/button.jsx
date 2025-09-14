import React from "react";

export function Button({ children, ...props }) {
  const { asChild, ...rest } = props;
  return (
    <button
      {...rest}
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        background: "#fff",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
