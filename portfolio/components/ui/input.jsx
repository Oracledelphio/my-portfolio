import React from "react";

export function Input(props) {
  return (
    <input
      {...props}
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        width: "100%",
      }}
    />
  );
}
