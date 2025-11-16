import React, { useState, useEffect } from 'react';
import { Folder, FolderOpen, FileCode, ChevronRight, ExternalLink, Github } from 'lucide-react';

const projectStructure = {
  name: 'projects',
  type: 'folder',
  children: [
    {
      name: 'ai-ml',
      type: 'folder',
      children: [
        {
          name: 'mallampati-classification',
          type: 'project',
          title: 'Mallampati Classification for Intubation',
          period: 'May 2025 - Aug 2025',
          description: 'Developed an ensemble VGG16-based model with image augmentation, achieving 93% accuracy in predicting intubation difficulty. Research submitted for CVIP 2025 conference in collaboration with anesthesiologists at AIMS.',
          tech: ['Python', 'TensorFlow', 'VGG16', 'OpenCV', 'Medical AI'],
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
        },
        {
          name: 'adamsafe-optimizer',
          type: 'project',
          title: 'AdamSafe - Novel Deep Learning Optimizer',
          period: 'Jan 2025 - Aug 2025',
          description: 'Identified stability issues in existing optimizers and created a custom algorithm that improved model training consistency and accuracy, outperforming the widely used Adam optimizer.',
          tech: ['Python', 'PyTorch', 'NumPy', 'Deep Learning'],
          image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
        }
      ]
    },
    {
      name: 'web-development',
      type: 'folder',
      children: [
        {
          name: 'ecommerce-platform',
          type: 'project',
          title: 'Modern E-Commerce Platform',
          period: 'Sep 2024 - Nov 2024',
          description: 'Designed and deployed a production-ready e-commerce platform using modern web stack (Django, Next.js, GraphQL, and CI/CD pipelines). Delivered secure authentication, product filtering, and seamless checkout.',
          tech: ['Django', 'Next.js', 'GraphQL', 'PostgreSQL', 'AWS'],
          image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
        },
        {
          name: 'traboda-optimizations',
          type: 'project',
          title: 'Traboda CyberLabs Platform Enhancement',
          period: 'Apr 2025 - Present',
          description: 'Enhanced scalable web architectures by implementing performance optimizations that reduced page load times by 35% and expanded user base by 22%, attracting 12,000+ new users through improved platform accessibility.',
          tech: ['React', 'Next.js', 'Performance', 'Scalability'],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        }
      ]
    }
  ]
};

export default function Projects() {
  const [expandedFolders, setExpandedFolders] = useState(['projects']);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const toggleFolder = (path) => {
    setExpandedFolders(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const renderTree = (node, path = '') => {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    const isExpanded = expandedFolders.includes(currentPath);

    if (node.type === 'folder') {
      return (
        <div key={currentPath} className="ml-4">
          <button
            onClick={() => toggleFolder(currentPath)}
            className="flex items-center gap-2 py-2 px-3 hover:bg-[#F6EFE8] rounded-lg transition-colors w-full text-left group"
          >
            <ChevronRight 
              className={`w-4 h-4 text-[#8B6D5C] transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            />
            {isExpanded ? (
              <FolderOpen className="w-5 h-5 text-[#F2A6A6]" />
            ) : (
              <Folder className="w-5 h-5 text-[#8B6D5C]" />
            )}
            <span className="font-mono text-[#5A4036] font-semibold">{node.name}/</span>
          </button>
          {isExpanded && (
            <div className="border-l-2 border-[#8B6D5C]/20 ml-3">
              {node.children.map(child => renderTree(child, currentPath))}
            </div>
          )}
        </div>
      );
    }

    if (node.type === 'project') {
      return (
        <button
          key={currentPath}
          onClick={() => setSelectedProject(node)}
          className={`flex items-center gap-2 py-2 px-3 ml-4 hover:bg-[#F2A6A6]/10 rounded-lg transition-all w-full text-left group ${
            selectedProject?.name === node.name ? 'bg-[#F2A6A6]/20' : ''
          }`}
        >
          <FileCode className="w-5 h-5 text-[#F2A6A6]" />
          <span className="font-mono text-[#5A4036]">{node.name}</span>
        </button>
      );
    }
  };

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-12 overflow-hidden bg-white">
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Title */}
        <div 
          className="mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <h2 className="text-5xl lg:text-7xl font-black text-[#5A4036] mb-6">
            PROJECTS
          </h2>
          <div className="w-32 h-2 bg-[#F2A6A6] rounded-full" />
        </div>

        {/* File Explorer Layout */}
        <div 
          className="grid lg:grid-cols-12 gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms'
          }}
        >
          {/* Left - File Explorer */}
          <div className="lg:col-span-4">
            <div className="bg-[#2D2D2D] rounded-2xl shadow-2xl overflow-hidden border border-[#3D3D3D] sticky top-24">
              {/* Explorer Header */}
              <div className="bg-[#1E1E1E] px-4 py-3 border-b border-[#3D3D3D]">
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4 text-[#8B949E]" />
                  <span className="text-sm text-[#8B949E] font-mono uppercase tracking-wider">Explorer</span>
                </div>
              </div>

              {/* File Tree */}
              <div className="p-4 max-h-[600px] overflow-y-auto">
                {renderTree(projectStructure)}
              </div>

              {/* Helper Text */}
              <div className="px-4 py-3 bg-[#1E1E1E] border-t border-[#3D3D3D]">
                <p className="text-xs text-[#8B949E] font-mono">
                  💡 Click folders to expand, files to view
                </p>
              </div>
            </div>
          </div>

          {/* Right - Project Details */}
          <div className="lg:col-span-8">
            {selectedProject ? (
              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-sm font-mono text-white/80 mb-2">{selectedProject.period}</div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="bg-[#F6EFE8] rounded-2xl p-8 shadow-lg">
                  <p className="text-lg text-[#5A4036]/80 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#5A4036] uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white text-[#5A4036] text-sm font-semibold rounded-lg border border-[#8B6D5C]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-[#5A4036] text-white px-6 py-3 rounded-full font-bold hover:bg-[#8B6D5C] transition-all hover:scale-105">
                      <Github className="w-5 h-5" />
                      VIEW CODE
                    </button>
                    <button className="flex items-center gap-2 border-2 border-[#5A4036] text-[#5A4036] px-6 py-3 rounded-full font-bold hover:bg-[#5A4036] hover:text-white transition-all">
                      <ExternalLink className="w-5 h-5" />
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[500px]">
                <div className="text-center space-y-4">
                  <FileCode className="w-16 h-16 text-[#9E948C] mx-auto" />
                  <p className="text-xl text-[#9E948C] font-semibold">
                    Select a project from the explorer
                  </p>
                  <p className="text-sm text-[#9E948C]">
                    Click on any .project file to view details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
