import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/entities/Project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, Smartphone, Laptop } from "lucide-react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [notificationProject, setNotificationProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await Project.list();
    setProjects(data);
  };

  const showAsNotification = (project) => {
    setNotificationProject(project);
    setTimeout(() => setNotificationProject(null), 5000); // Auto hide after 5 seconds
  };

  const showAsModal = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <section id="projects" className="py-20 px-4">
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
                PORTFOLIO SHOWCASE
              </div>
            </motion.div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions across AI, full-stack development,
              and research
            </p>
          </div>

          {/* Creative Project Layout */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {index % 2 === 0 ? (
                  // Left Side - Laptop Style
                  <div className="max-w-3xl">
                    <motion.div
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      className="relative cursor-pointer group"
                      onClick={() => showAsModal(project)}
                    >
                      {/* Laptop Frame */}
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-4 shadow-2xl">
                        {/* Laptop Top Bar */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>

                        {/* Content */}
                        <div className="glass rounded-xl p-8 min-h-80">
                          <div className="flex items-center gap-3 mb-4">
                            <Laptop className="w-6 h-6 text-emerald-400" />
                            <Badge className="bg-emerald-400/20 text-emerald-300 border-emerald-400/30">
                              {project.category}
                            </Badge>
                          </div>

                          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            {project.tagline}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech_stack
                              ?.slice(0, 5)
                              .map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="text-sm px-4 py-1 glass rounded-full text-emerald-200"
                                >
                                  {tech}
                                </span>
                              ))}
                          </div>

                          <div className="flex gap-4">
                            {project.demo_url && (
                              <Button
                                size="lg"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Demo
                              </Button>
                            )}
                            {project.github_url && (
                              <Button
                                size="lg"
                                variant="outline"
                                className="border-gray-500 text-gray-300"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Laptop Base */}
                      <div className="bg-gradient-to-br from-gray-700 to-gray-800 h-4 rounded-b-2xl relative">
                        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-b-2xl"></div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  // Right Side - Phone Style
                  <div className="max-w-md">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                      className="relative cursor-pointer group"
                      onClick={() => showAsNotification(project)}
                    >
                      {/* Phone Frame */}
                      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-3 shadow-2xl">
                        {/* Phone Notch */}
                        <div className="bg-black rounded-2xl h-8 flex items-center justify-center mb-2">
                          <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
                        </div>

                        {/* Notification Content */}
                        <div className="glass rounded-2xl p-4 relative overflow-hidden">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                              <Smartphone className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-emerald-400 font-semibold text-sm">
                                New Project
                              </div>
                              <div className="text-gray-300 text-xs">
                                Tap to view details
                              </div>
                            </div>
                          </div>

                          <h3 className="text-white font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                            {project.tagline}
                          </p>

                          <Badge className="bg-teal-400/20 text-teal-300 border-teal-400/30 text-xs">
                            {project.category}
                          </Badge>

                          {/* iOS-style indicator */}
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                            <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                          </div>
                        </div>

                        {/* Phone Bottom */}
                        <div className="h-2 bg-black rounded-b-2xl"></div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* iPhone Notification Popup */}
      <AnimatePresence>
        {notificationProject && (
          <motion.div
            initial={{ opacity: 0, y: -100, x: 300 }}
            animate={{ opacity: 1, y: 20, x: 0 }}
            exit={{ opacity: 0, y: -100, x: 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-4 z-50 max-w-sm"
          >
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-gray-700/50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Portfolio Update
                    </div>
                    <div className="text-gray-400 text-sm">Now</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setNotificationProject(null)}
                  className="text-gray-400 hover:text-white h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <h3 className="text-white font-bold mb-2">
                {notificationProject.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {notificationProject.tagline}
              </p>

              <div className="flex gap-2 mb-4">
                {notificationProject.tech_stack
                  ?.slice(0, 3)
                  .map((tech, idx) => (
                    <Badge
                      key={idx}
                      className="bg-emerald-400/20 text-emerald-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => showAsModal(notificationProject)}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  View Details
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setNotificationProject(null)}
                  className="border-gray-600 text-gray-300"
                >
                  Dismiss
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <Badge className="bg-emerald-400/20 text-emerald-300 border-emerald-400/30">
                  {selectedProject.category}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-xl text-emerald-300 mb-6">
                {selectedProject.tagline}
              </p>

              {selectedProject.description && (
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
              )}

              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tech_stack?.map((tech, idx) => (
                  <Badge
                    key={idx}
                    className="bg-teal-400/20 text-teal-300 border-teal-400/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                {selectedProject.demo_url && (
                  <Button
                    asChild
                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    <a
                      href={selectedProject.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {selectedProject.github_url && (
                  <Button
                    variant="outline"
                    asChild
                    className="border-gray-500 text-gray-300"
                  >
                    <a
                      href={selectedProject.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
