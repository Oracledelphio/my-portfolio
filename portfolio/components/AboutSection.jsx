import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Layers, Zap, Target, Users, Award } from "lucide-react";

export default function AboutSection() {
  const drivers = [
    {
      icon: Zap,
      title: "Driving Innovation",
      description:
        "Pushing boundaries with cutting-edge solutions in AI and full-stack development.",
    },
    {
      icon: Target,
      title: "Creating Impact",
      description:
        "Delivering research-grade solutions with tangible, real-world applications.",
    },
    {
      icon: Users,
      title: "Fostering Collaboration",
      description:
        "Thriving in cross-disciplinary teams to build comprehensive products.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:col-span-3"
          >
            <div className="flex items-center gap-4 mb-6">
              <BrainCircuit className="w-10 h-10 text-emerald-400" />
              <h3 className="text-3xl font-bold text-white">
                Bridging AI with Full-Stack Mastery
              </h3>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              As an AI and Data Science professional, my passion lies at the
              intersection of deep learning theory and practical, scalable
              application. I specialize in transforming complex, research-grade
              concepts into robust platforms that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive in fast-paced, collaborative environments where I can
              contribute to every stage of the product lifecycle—from ideation
              and design to deployment and scaling. My goal is to build
              technology that is not only innovative but also impactful and
              intuitive for the end-user.
            </p>
          </motion.div>

          {/* Drivers Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            {drivers.map((driver, index) => (
              <motion.div
                key={driver.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass glass-hover rounded-2xl p-6 group flex items-start gap-4"
              >
                <div className="mt-1 w-12 h-12 flex-shrink-0 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <driver.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-lg">
                    {driver.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{driver.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
