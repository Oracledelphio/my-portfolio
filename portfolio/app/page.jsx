"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import ThreeIntro from "../components/ThreeIntro";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import AchievementsSection from "../components/AchievementsSection";
import SkillsCarousel from "../components/SkillsCarousel";
import ContactSection from "../components/ContactSection";

export default function Portfolio() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Preload critical resources
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll tracking for active section
  useEffect(() => {
    if (showIntro) return;

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "projects",
        "experience",
        "achievements",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showIntro]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-12 text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-6 border-4 border-emerald-400 border-t-transparent rounded-full"
          ></motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Loading Portfolio
          </h2>
          <p className="text-emerald-300">
            Preparing an immersive experience...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute -bottom-40 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      <AnimatePresence>
        {showIntro && <ThreeIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {!showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* Fixed Navigation - Properly Centered */}
            <motion.nav
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="fixed top-6 left-0 right-0 z-50 flex justify-center"
            >
              <div className="glass rounded-full px-8 py-4 shadow-lg shadow-emerald-500/10 mx-4 max-w-4xl">
                <div className="flex items-center justify-center gap-2 md:gap-6 overflow-x-auto scrollbar-hide">
                  {[
                    { id: "hero", label: "Home" },
                    { id: "about", label: "About" },
                    { id: "projects", label: "Projects" },
                    { id: "experience", label: "Experience" },
                    { id: "achievements", label: "Awards" },
                    { id: "skills", label: "Skills" },
                    { id: "contact", label: "Contact" },
                  ].map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`relative px-3 md:px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                        activeSection === section.id
                          ? "text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25"
                          : "text-gray-300 hover:text-emerald-300 hover:bg-white/5"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {section.label}
                      {activeSection === section.id && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.nav>

            {/* Main Content */}
            <main className="relative">
              <div id="hero">
                <HeroSection />
              </div>
              <div id="about">
                <AboutSection />
              </div>
              <div id="projects">
                <ProjectsSection />
              </div>
              <div id="experience">
                <ExperienceSection />
              </div>
              <div id="achievements">
                <AchievementsSection />
              </div>
              <div id="skills">
                <SkillsCarousel />
              </div>
              <div id="contact">
                <ContactSection />
              </div>
            </main>

            {/* Enhanced Floating Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/4 right-10 w-4 h-4 bg-emerald-400/30 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  x: [0, -80, 0],
                  y: [0, 60, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-1/3 left-10 w-3 h-3 bg-teal-400/30 rounded-full blur-sm"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Custom Styles */}
      <style jsx global>{`
        .text-emerald-300 {
          color: #6ee7b7;
        }
        .text-emerald-400 {
          color: #34d399;
        }
        .text-emerald-500 {
          color: #10b981;
        }
        .text-teal-300 {
          color: #5eead4;
        }
        .text-teal-400 {
          color: #2dd4bf;
        }
        .text-teal-500 {
          color: #14b8a6;
        }
        .text-cyan-400 {
          color: #22d3ee;
        }
        .border-emerald-400 {
          border-color: #34d399;
        }
        .bg-emerald-500 {
          background-color: #10b981;
        }
        .from-emerald-400 {
          --tw-gradient-from: #34d399;
        }
        .to-teal-500 {
          --tw-gradient-to: #14b8a6;
        }
        .from-emerald-500 {
          --tw-gradient-from: #10b981;
        }
        .to-teal-600 {
          --tw-gradient-to: #0d9488;
        }
        .from-teal-400 {
          --tw-gradient-from: #2dd4bf;
        }
        .to-emerald-500 {
          --tw-gradient-to: #10b981;
        }
        .shadow-emerald-500\/10 {
          box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.1),
            0 4px 6px -2px rgba(16, 185, 129, 0.05);
        }
        .shadow-emerald-500\/25 {
          box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.25),
            0 4px 6px -2px rgba(16, 185, 129, 0.1);
        }

        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
        }

        body {
          font-family: "Inter", sans-serif;
        }

        /* Custom scrollbar-hide utility */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
}
