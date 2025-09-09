"use client";
import "./globals.css";
import React from "react";

export default function Layout({ children, currentPageName }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");
          :root {
            --pistachio: #93c5a7;
            --olive: #6b8e5a;
            --coffee: #8b4513;
            --glass-bg: rgba(255, 255, 255, 0.1);
            --glass-border: rgba(255, 255, 255, 0.2);
          }
          * {
            scrollbar-width: thin;
            scrollbar-color: var(--pistachio) transparent;
          }
          *::-webkit-scrollbar {
            width: 6px;
          }
          *::-webkit-scrollbar-track {
            background: transparent;
          }
          *::-webkit-scrollbar-thumb {
            background: var(--pistachio);
            border-radius: 3px;
          }
          .cursive-font {
            font-family: "Dancing Script", cursive;
          }
          .glass {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
          }
          .glass-hover {
            transition: all 0.3s ease;
          }
          .glass-hover:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(147, 197, 167, 0.2);
          }
          .glow {
            box-shadow: 0 0 20px rgba(147, 197, 167, 0.3);
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
