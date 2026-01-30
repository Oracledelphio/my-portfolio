import React, { useState } from "react";
import "../styles/gallery.css";

interface ProjectPanel {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  tech: string[];
}

const projectPanels: ProjectPanel[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    title: "Mallampati Classification",
    subtitle: "Medical AI - May 2025 - Aug 2025",
    description:
      "Developed an ensemble VGG16-based model with image augmentation, achieving 93% accuracy in predicting intubation difficulty. Research submitted for CVIP 2025 conference in collaboration with anesthesiologists at AIMS.",
    period: "May 2025 - Aug 2025",
    tech: ["Python", "TensorFlow", "VGG16", "OpenCV", "Medical AI"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    title: "AdamSafe Optimizer",
    subtitle: "Deep Learning - Jan 2025 - Aug 2025",
    description:
      "Identified stability issues in existing optimizers and created a custom algorithm that improved model training consistency and accuracy, outperforming the widely used Adam optimizer.",
    period: "Jan 2025 - Aug 2025",
    tech: ["Python", "PyTorch", "NumPy", "Deep Learning"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    title: "E-Commerce Platform",
    subtitle: "Web Development - Sep 2024 - Nov 2024",
    description:
      "Designed and deployed a production-ready e-commerce platform using modern web stack (Django, Next.js, GraphQL, and CI/CD pipelines). Delivered secure authentication, product filtering, and seamless checkout.",
    period: "Sep 2024 - Nov 2024",
    tech: ["Django", "Next.js", "GraphQL", "PostgreSQL", "AWS"],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    title: "Traboda Platform",
    subtitle: "Web Optimization - Apr 2025 - Present",
    description:
      "Enhanced scalable web architectures by implementing performance optimizations that reduced page load times by 35% and expanded user base by 22%, attracting 12,000+ new users through improved platform accessibility.",
    period: "Apr 2025 - Present",
    tech: ["React", "Next.js", "Performance", "Scalability"],
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handlePanelClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const selectedProject = projectPanels.find((p) => p.id === selectedId);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 lg:px-12 overflow-hidden bg-white"
    >
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-[#5A4036] mb-6">
            PROJECTS
          </h2>
          <div className="w-32 h-2 bg-[#F2A6A6] rounded-full mx-auto" />
        </div>

        {/* Gallery Carousel */}
        <div
          className="gallery-wrapper"
          style={{ height: "auto", minHeight: "600px", paddingBottom: "60px" }}
        >
          <div className="gallery-container">
            {projectPanels.map((panel) => (
              <div
                key={panel.id}
                className={`gallery-panel ${selectedId === panel.id ? "selected" : ""} ${
                  selectedId !== null && selectedId !== panel.id
                    ? "compressed"
                    : ""
                }`}
                onClick={() => handlePanelClick(panel.id)}
              >
                <div className="panel-image-wrapper">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="panel-image"
                  />
                </div>
                <div className="panel-details">
                  <h3 className="panel-title">{panel.title}</h3>
                  <p className="panel-subtitle">{panel.subtitle}</p>
                  <p className="panel-description">{panel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details Panel */}
        {selectedProject && (
          <div className="mt-12 bg-[#F6EFE8] rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-black text-[#5A4036] mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-sm font-mono text-[#5A4036]/60 mb-4">
              {selectedProject.period}
            </p>
            <p className="text-lg text-[#5A4036]/80 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Tech Stack */}
            <div>
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
          </div>
        )}
      </div>
    </section>
  );
}
