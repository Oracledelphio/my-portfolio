import React, { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Full-width Hero Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(1.1)",
          transition: "all 1500ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6918c855be823fdca1b8c661/8f6957b65_RedGrayTypographyPortfolioCoverA4Landscape1.png"
          alt="Kurt Sony Rebello"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for better contrast with navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
      </div>
    </section>
  );
}
