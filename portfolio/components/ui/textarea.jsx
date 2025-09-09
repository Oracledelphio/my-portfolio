import React from "react";

export function Textarea(props) {
  return (
    <textarea
      {...props}
      style={{
        padding: "12px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.2)",
        width: "100%",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(147,197,167,0.15)",
        color: "#222",
        fontSize: "1rem",
        outline: "none",
        transition: "box-shadow 0.3s",
      }}
    />
  );
}
