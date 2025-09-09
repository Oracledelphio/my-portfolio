import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SkillsCarousel() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Java",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "C++",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Dart",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Flutter",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      title: "Backend & Cloud",
      skills: [
        {
          name: "Django",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        {
          name: "PyTorch",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        },
        {
          name: "TensorFlow",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "NumPy",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        },
        {
          name: "Pandas",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        },
        {
          name: "Jupyter",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        },
        {
          name: "OpenCV",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
        },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Linux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Postman",
          logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skillCategories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, skillCategories.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % skillCategories.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wide">
              TECHNICAL EXPERTISE
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mastery across modern technologies and frameworks
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            className="glass glass-hover rounded-full p-4 text-white hover:text-emerald-300 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.h3
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"
            >
              {skillCategories[currentIndex].title}
            </motion.h3>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            className="glass glass-hover rounded-full p-4 text-white hover:text-emerald-300 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Skills Grid - Individual Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {skillCategories[currentIndex].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  z: 50,
                  transition: { duration: 0.2 },
                }}
                className="group transform-gpu perspective-1000"
              >
                <div className="glass glass-hover rounded-2xl p-6 h-32 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-500/5 group-hover:from-emerald-400/20 group-hover:to-teal-500/20 rounded-2xl transition-all duration-500"
                  />

                  {/* Skill Logo */}
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.3,
                    }}
                    className="relative z-10 mb-3 group-hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                      style={{
                        filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))",
                      }}
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <div className="relative z-10 text-center">
                    <p className="text-white font-semibold text-sm group-hover:text-emerald-300 transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [20, -20, 20],
                          x: [0, Math.sin(i) * 10, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut",
                        }}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                        style={{
                          top: `${30 + i * 20}%`,
                          left: `${20 + i * 30}%`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Indicators */}
        <div className="flex justify-center mt-12 gap-4">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-12 h-4" : "w-4 h-4 hover:w-6"
              }`}
            >
              {index === currentIndex ? (
                <motion.div
                  layoutId="activeIndicator"
                  className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : (
                <div className="w-full h-full bg-gray-600 hover:bg-gray-500 rounded-full transition-colors duration-300" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Status Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="glass rounded-full px-8 py-3 inline-block">
            <div className="flex items-center gap-4">
              <div className="text-emerald-400 font-semibold">
                {currentIndex + 1} / {skillCategories.length}
              </div>
              <div className="w-1 h-6 bg-gray-600"></div>
              <div
                className={`text-sm ${
                  isAutoPlaying ? "text-emerald-400" : "text-orange-400"
                }`}
              >
                {isAutoPlaying ? "Auto-cycling" : "Manual navigation"}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
