import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectNotification({
  project,
  onClose,
  isExpanded,
  onToggleExpanded,
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -100, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-4 right-4 z-50 glass rounded-2xl p-6 max-w-sm transition-all duration-300 ${
          isExpanded ? "max-w-2xl" : ""
        }`}
        style={{
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(147, 197, 167, 0.3)",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-r from-pistachio-400 to-olive-400 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">
                {project.title}
              </h3>
              <p className="text-pistachio-300 text-sm">{project.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleExpanded}
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-white font-medium">{project.tagline}</p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.image_url && (
                  <div className="glass rounded-lg overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech_stack
              ?.slice(0, isExpanded ? -1 : 3)
              .map((tech, index) => (
                <Badge
                  key={index}
                  className="glass text-pistachio-200 border-pistachio-400/30 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            {!isExpanded && project.tech_stack?.length > 3 && (
              <Badge className="glass text-gray-400 border-gray-500/30 text-xs">
                +{project.tech_stack.length - 3} more
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            {project.demo_url && (
              <Button
                size="sm"
                className="glass glass-hover text-white border-pistachio-400/30 flex-1"
                asChild
              >
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}

            {project.github_url && (
              <Button
                size="sm"
                variant="outline"
                className="glass glass-hover text-white border-gray-500/30 flex-1"
                asChild
              >
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* iOS-style indicator */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-1 bg-white/30 rounded-full"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
