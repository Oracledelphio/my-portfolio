import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 relative">
        {/* Left Side - Name and Description */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Professional Name */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm font-medium text-emerald-400 tracking-widest uppercase"
            >
              AI & Data Science Professional
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: "300",
                textShadow: "0 0 40px rgba(16, 185, 129, 0.3)",
              }}
            >
              Kurt Sony
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent font-normal">
                Rebello
              </span>
            </motion.h1>
          </div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Building{" "}
              <span className="text-emerald-400 font-semibold">
                Scalable Solutions
              </span>{" "}
              Across
              <span className="text-teal-400 font-semibold">
                {" "}
                Deep Learning
              </span>
              ,
              <span className="text-cyan-400 font-semibold">
                {" "}
                Full-Stack Development
              </span>
              , and{" "}
              <span className="text-emerald-400 font-semibold">
                Cloud Systems
              </span>
            </p>

            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              <p className="text-gray-300">
                Available for innovative projects and collaborations
              </p>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={scrollToContact}
              variant="outline"
              className="px-8 py-4 border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Collaborate
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Picture & Artistic Elements */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Profile Picture Circle */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              type: "spring",
              stiffness: 200,
            }}
            className="relative z-20"
          >
            <div className="w-96 h-96 rounded-full glass p-4 relative overflow-hidden group">
              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </motion.div>

              {/* Profile Image Placeholder */}
              <div className="relative z-10 w-full h-full rounded-full flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/resume-pic.jpg"
                  alt="Kurt Sony Rebello"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center top" }} // Adjust as needed
                />

                {/* Floating Particles inside circle */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.sin(i) * 10, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                    className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                    style={{
                      top: `${20 + Math.sin(i * 60) * 30}%`,
                      left: `${20 + Math.cos(i * 60) * 30}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating Geometric Shapes Around PFP */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-10 w-20 h-20 border-2 border-emerald-400/40 rotate-45 glass z-10"
          />

          <motion.div
            animate={{
              rotate: [0, 360],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 -right-10 w-24 h-24 bg-gradient-to-br from-teal-400/30 to-emerald-500/30 rounded-full glass z-10"
          />

          <motion.div
            animate={{
              x: [-15, 15, -15],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 -right-12 w-12 h-24 bg-gradient-to-t from-cyan-400/30 to-transparent glass z-10"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />

          {/* Orbiting Elements Around Profile */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-emerald-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-emerald-400/50"></div>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-teal-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-teal-400/50"></div>
              <div className="absolute left-0 top-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute right-0 top-1/2 w-4 h-4 bg-emerald-300 rounded-full transform -translate-y-1/2 shadow-lg shadow-emerald-300/50"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="text-emerald-400 text-sm font-medium group-hover:text-emerald-300 transition-colors">
            Scroll to explore
          </div>
          <ChevronDown className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
