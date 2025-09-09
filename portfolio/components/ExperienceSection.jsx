import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";

export default function ExperienceSection() {
  const achievements = [
    {
      icon: Zap,
      metric: "25%",
      description: "Faster Response Times",
      detail: "Through web system optimization",
    },
    {
      icon: Users,
      metric: "1000+",
      description: "Users Impacted",
      detail: "CTF platform UI/UX redesign",
    },
    {
      icon: TrendingUp,
      metric: "100%",
      description: "Project Success Rate",
      detail: "In an agile, fast-paced environment",
    },
  ];

  const contributions = [
    "Led a comprehensive UI/UX redesign of a renowned CTF platform, enhancing usability for thousands of cybersecurity enthusiasts.",
    "Engineered and implemented optimizations that boosted web system performance, achieving 25% faster response times.",
    "Actively collaborated in agile development cycles, driving design discussions and contributing to a culture of innovation.",
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300">
            Translating skills into impactful solutions in a professional
            environment.
          </p>
        </div>

        {/* Unified Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden group shadow-2xl"
        >
          {/* Background Glow */}
          <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="glass rounded-2xl p-4"
              >
                <Building2 className="w-10 h-10 text-emerald-400" />
              </motion.div>
              <div className="flex-1">
                <p className="text-emerald-300 font-semibold text-lg mb-2">
                  Full Stack Developer Intern
                </p>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Traboda CyberLabs
                </h3>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2023 - Jan 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Kochi, Kerala (Remote)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content: Contributions */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-white mb-6">
                Key Contributions
              </h4>
              <div className="space-y-4">
                {contributions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="w-5 h-5 mt-1 text-emerald-400 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer: Impact Metrics */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">
                Impact Metrics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.metric}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass glass-hover rounded-2xl p-6 group/metric"
                  >
                    <div className="flex items-center gap-4">
                      <div className="glass rounded-xl p-3 bg-emerald-500/10">
                        <achievement.icon className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-white">
                          {achievement.metric}
                        </div>
                        <div className="text-emerald-400 font-semibold text-sm">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
