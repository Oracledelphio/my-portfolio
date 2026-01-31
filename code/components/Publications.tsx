"use client";

import React, { useState, useEffect, useRef } from "react";
import { FileText, Award, ExternalLink, BookOpen } from "lucide-react";

export default function Publications() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("publications");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // MOUSE PARALLAX for background image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", () =>
        setMousePosition({ x: 0, y: 0 }),
      );
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="relative py-24 px-6 lg:px-12 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* 
        FULL-SECTION VIBRANT BACKGROUND IMAGE
        - Fills entire section
        - Vibrant, saturated colors
        - Reacts to mouse movements
      */}

      {/* Layer 1: Main Lighthouse Background - Deep parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `
            translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px) 
            scale(1.15)
          `,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/lighthouse.png)",
            backgroundPosition: "center center",
            // VIBRANT: Enhanced brightness, contrast, and saturation
            filter: "brightness(1.1) contrast(1.25) saturate(1.5)",
          }}
        />
      </div>

      {/* Layer 2: Floating Light Orbs - React to mouse */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FFB84D]/25 rounded-full blur-[100px]"
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
          transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#F2A6A6]/20 rounded-full blur-[120px]"
        style={{
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* 
        DARK FILM OVERLAY
        - Gradual darkening from right to left
        - Ensures text readability on left side
      */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"
        style={{
          transform: `translateX(${mousePosition.x * -10}px)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Additional atmospheric depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* CONTENT CONTAINER */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Title */}
        <div
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 800ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-2xl">
            RESEARCH
          </h2>
          <div className="w-32 h-2 bg-[#F2A6A6] rounded-full shadow-lg" />
        </div>

        {/* LEFT-ALIGNED PUBLICATION CARD - GLASSY EFFECT */}
        <div
          className="relative max-w-3xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms",
          }}
        >
          <div
            className="bg-white/15 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/20"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
            }}
          >
            <div className="grid lg:grid-cols-6">
              {/* Left Accent Bar - Glassy */}
              <div className="hidden lg:block bg-gradient-to-b from-[#F2A6A6]/90 to-[#8B6D5C]/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-white relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
                  }}
                />
                <div className="transform -rotate-90 whitespace-nowrap relative z-10">
                  <div
                    className="text-4xl font-black drop-shadow-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    2025
                  </div>
                </div>
              </div>

              {/* Main Content - Glassy white text */}
              <div className="lg:col-span-5 p-8 lg:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-[#F2A6A6]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full shadow-xl">
                    <Award className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Conference Paper
                    </span>
                  </div>
                  <div className="text-white/90 font-semibold text-xs drop-shadow-lg">
                    CVIP 2025 • IIT Ropar
                  </div>
                </div>

                {/* Title - White text with shadow */}
                <h3
                  className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight drop-shadow-2xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Automation of Mallampati Classification to Reduce Mortality
                  Rates During Intubation
                </h3>

                {/* Authors */}
                <p className="text-base text-white/80 mb-6 italic drop-shadow-lg">
                  K. Sony, et al.
                </p>

                {/* Abstract */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full bg-[#F2A6A6] rounded-full shadow-lg" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 drop-shadow-lg">
                        Abstract
                      </h4>
                      <p className="text-white/90 leading-relaxed text-sm drop-shadow-lg">
                        This research presents an innovative deep learning
                        approach to automate Mallampati classification, a
                        critical pre-intubation assessment tool. By leveraging
                        computer vision and advanced neural networks, we
                        developed a system that significantly improves risk
                        assessment accuracy, potentially reducing
                        intubation-related complications and mortality rates in
                        clinical settings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Contributions */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="border-l-4 border-[#F2A6A6] pl-3 hover:border-l-8 transition-all bg-black/20 backdrop-blur-sm rounded-r-lg py-2">
                    <div className="text-xl font-black text-white mb-1 drop-shadow-lg">
                      95%+
                    </div>
                    <div className="text-xs text-white/80 uppercase tracking-wider">
                      Accuracy
                    </div>
                  </div>
                  <div className="border-l-4 border-[#8B6D5C] pl-3 hover:border-l-8 transition-all bg-black/20 backdrop-blur-sm rounded-r-lg py-2">
                    <div className="text-xl font-black text-white mb-1 drop-shadow-lg">
                      Real-time
                    </div>
                    <div className="text-xs text-white/80 uppercase tracking-wider">
                      Processing
                    </div>
                  </div>
                  <div className="border-l-4 border-white pl-3 hover:border-l-8 transition-all bg-black/20 backdrop-blur-sm rounded-r-lg py-2">
                    <div className="text-xl font-black text-white mb-1 drop-shadow-lg">
                      Clinical
                    </div>
                    <div className="text-xs text-white/80 uppercase tracking-wider">
                      Application
                    </div>
                  </div>
                </div>

                {/* Tech Tags - Glassy */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Computer Vision",
                    "Medical AI",
                    "Deep Learning",
                    "TensorFlow",
                    "Healthcare",
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30 hover:bg-[#F2A6A6]/80 hover:scale-105 transition-all cursor-default shadow-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA - Glassy buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="bg-white/90 backdrop-blur-sm text-[#5A4036] px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition-all flex items-center gap-2 hover:scale-105 hover:shadow-2xl">
                    <BookOpen className="w-4 h-4" />
                    READ FULL PAPER
                  </button>
                  <button className="border-2 border-white/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2 shadow-lg">
                    <ExternalLink className="w-4 h-4" />
                    VIEW ON CVIP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Indicator - Glassy */}
          <div
            className="mt-12 text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "all 800ms cubic-bezier(0.16, 1, 0.3, 1) 600ms",
            }}
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl border border-white/30">
              <FileText className="w-4 h-4 text-[#F2A6A6]" />
              <p className="text-white font-semibold text-sm drop-shadow-lg">
                More publications in progress — Stay tuned for upcoming research
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Cursor Glow */}
      <div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 184, 77, 0.5) 0%, transparent 70%)",
          left: `calc(50% + ${mousePosition.x * 200}px)`,
          top: `calc(50% + ${mousePosition.y * 200}px)`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          filter: "blur(60px)",
        }}
      />
    </section>
  );
}
