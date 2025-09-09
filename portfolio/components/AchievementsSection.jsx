import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Trophy,
  Star,
  Medal,
  Zap,
  Crown,
  Target,
  Sparkles,
} from "lucide-react";

export default function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState(0);

  const achievements = [
    {
      icon: Award,
      title: "P. T. Thomas Educational Excellence Award",
      subtitle: "Academic Excellence",
      description:
        "Recognition for outstanding academic performance and leadership qualities",
      year: "2023",
      level: "Gold",
      xp: 2500,
      badge: "🏆",
      color: "from-yellow-400 to-orange-400",
      glowColor: "shadow-yellow-400/30",
    },
    {
      icon: Trophy,
      title: "NSTSE Kerala State 3rd Prize",
      subtitle: "STEM Competition",
      description:
        "State-level recognition for excellence in STEM problem-solving and scientific aptitude",
      year: "2022",
      level: "Platinum",
      xp: 3000,
      badge: "🥉",
      color: "from-emerald-400 to-teal-500",
      glowColor: "shadow-emerald-400/30",
    },
  ];

  const levelColors = {
    Gold: "from-yellow-400 to-yellow-600",
    Platinum: "from-emerald-400 to-teal-500",
  };

  return (
    <section id="achievements" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Gamified Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="glass rounded-2xl p-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <Crown className="w-8 h-8 text-yellow-400" />
                <div>
                  <div className="text-yellow-400 font-bold text-lg">
                    Achievement Unlocked!
                  </div>
                  <div className="text-gray-300 text-sm">Total XP: 5,500</div>
                </div>
                <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
              </div>

              {/* XP Bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="mt-3 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full relative"
              >
                <div className="absolute inset-0 bg-white/20 rounded-full"></div>
              </motion.div>
              <div className="text-xs text-gray-400 mt-1">
                Level 15 • Excellence Tier
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl font-bold text-white mb-6">
            Achievements & Awards
          </h2>
          <p className="text-xl text-gray-300">
            Unlocked through academic excellence and leadership
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              className={`glass glass-hover rounded-3xl p-8 relative overflow-hidden group cursor-pointer ${achievement.glowColor}`}
              onClick={() => setSelectedAchievement(index)}
            >
              {/* Gaming-style Background Effects */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-15 transition-all duration-500`}
              ></div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 text-4xl opacity-20"
              >
                {achievement.badge}
              </motion.div>

              {/* Level Badge */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${
                    levelColors[achievement.level]
                  } text-white text-sm font-bold flex items-center gap-2`}
                >
                  <Target className="w-4 h-4" />
                  {achievement.level}
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-bold">
                    +{achievement.xp} XP
                  </div>
                  <div className="text-gray-400 text-sm">
                    {achievement.year}
                  </div>
                </div>
              </div>

              {/* Icon and Category */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`glass rounded-2xl p-4 bg-gradient-to-r ${achievement.color} bg-opacity-20 relative`}
                >
                  <achievement.icon className="w-8 h-8 text-white" />

                  {/* Sparkle Effects */}
                  <motion.div
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                  />
                </motion.div>
                <div>
                  <h3 className="text-emerald-400 font-semibold text-sm tracking-wide">
                    {achievement.subtitle}
                  </h3>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                {achievement.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>

              {/* Progress Indicators */}
              <div className="mt-6 flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: i < 4 ? [1, 1.3, 1] : [0.5, 0.5, 0.5],
                      opacity: i < 4 ? 1 : 0.3,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1 + index * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className={`w-2 h-2 rounded-full ${
                      i < 4 ? "bg-emerald-400" : "bg-gray-600"
                    }`}
                  />
                ))}
                <span className="ml-2 text-xs text-gray-400">Mastery: 80%</span>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${achievement.glowColor} blur-xl`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div whileHover={{ scale: 1.1 }} className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Medal className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">2</div>
              <div className="text-gray-400 text-sm">Total Awards</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">5,500</div>
              <div className="text-gray-400 text-sm">Total XP</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">15</div>
              <div className="text-gray-400 text-sm">Current Level</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">Elite</div>
              <div className="text-gray-400 text-sm">Rank Status</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
