"use client";

import React, { useState, useEffect } from "react";

type LayoutProps = {
  children: React.ReactNode;
  currentPageName?: string;
};
import { Menu, X } from "lucide-react";

export default function Layout({
  children,
  currentPageName = "",
}: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');

        :root {
          --bg-creme: #F6EFE8;
          --accent-pastel-red: #F2A6A6;
          --brown-muted: #8B6D5C;
          --brown-deep: #5A4036;
          --muted-gray: #9E948C;
          --glass-00: rgba(255,255,255,0.6);
        }

        * {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg-creme);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        .curved-line {
          position: absolute;
          stroke: #5A4036;
          stroke-width: 2;
          fill: none;
          opacity: 0.08;
          pointer-events: none;
        }
      `}</style>

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F6EFE8]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl lg:text-2xl font-bold text-[#5A4036] hover:opacity-70 transition-opacity tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            KURT SONY
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#5A4036] hover:text-[#F2A6A6] font-medium transition-colors uppercase text-sm tracking-wider"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-[#5A4036] hover:text-[#F2A6A6] font-medium transition-colors uppercase text-sm tracking-wider"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("publications")}
              className="text-[#5A4036] hover:text-[#F2A6A6] font-medium transition-colors uppercase text-sm tracking-wider"
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-[#5A4036] hover:text-[#F2A6A6] font-medium transition-colors uppercase text-sm tracking-wider"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#F2A6A6] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#F2A6A6]/90 transition-all hover:scale-105"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#5A4036] hover:text-[#F2A6A6] transition-colors"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#F6EFE8] border-t border-[#8B6D5C]/10">
            <nav className="px-6 py-6 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#5A4036] hover:text-[#F2A6A6] font-medium transition-colors uppercase text-sm tracking-wider text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-[#5A4036] hover:text-[#F2A6A6] font-medium transition-colors uppercase text-sm tracking-wider text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("publications")}
                className="text-[#5A4036] hover:text-[#F2A6A6] font-medium transition-colors uppercase text-sm tracking-wider text-left"
              >
                Publications
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-[#5A4036] hover:text-[#F2A6A6] font-medium transition-colors uppercase text-sm tracking-wider text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#F2A6A6] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#F2A6A6]/90 transition-all text-center"
              >
                CONTACT
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
}
