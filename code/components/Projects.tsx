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
    image: "/images/malampatti_bg.png",
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
    image: "/images/ecommerce_bg.png",
    title: "E-Commerce Platform",
    subtitle: "Web Development - Sep 2024 - Nov 2024",
    description:
      "Designed and deployed a production-ready e-commerce platform using modern web stack (Django, Next.js, GraphQL, and CI/CD pipelines). Delivered secure authentication, product filtering, and seamless checkout.",
    period: "Sep 2024 - Nov 2024",
    tech: ["Django", "Next.js", "GraphQL", "PostgreSQL", "AWS"],
  },
  {
    id: 4,
    image: "/images/traboda_bg.webp",
    title: "Traboda Platform",
    subtitle: "Web Optimization - Apr 2025 - Present",
    description:
      "Enhanced scalable web architectures by implementing performance optimizations that reduced page load times by 35% and expanded user base by 22%, attracting 12,000+ new users through improved platform accessibility.",
    period: "Apr 2025 - Present",
    tech: ["React", "Next.js", "Performance", "Scalability"],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
    title: "Big Data Retail Market Analysis & Prediction",
    subtitle: "Big Data Analytics - Sep 2025 - Dec 2025",
    description:
      "Built an end-to-end scalable retail analytics pipeline using Apache Spark and Hadoop to derive business insights from 4GB+ transactional data. Implemented customer segmentation (K-Means), churn prediction (Random Forest), personalized recommendations (ALS), and market basket analysis (FP-Growth). Deployed results via Azure Blob Storage and ADF, powering an interactive Next.js dashboard for data-driven decision-making.",
    period: "Sep 2025 - Dec 2025",
    tech: [
      "Apache Spark",
      "Hadoop HDFS",
      "Spark MLlib",
      "Azure Blob Storage",
      "Azure Data Factory",
      "Java",
      "Next.js",
      "Chart.js",
      "Big Data Analytics",
    ],
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handlePanelClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section
      id="projects"
      className="relative py-12 px-6 lg:px-12 overflow-hidden bg-white"
    >
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-4 text-center">
          <h2
            className="text-5xl lg:text-7xl font-bold text-[#5A4036] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            PROJECTS
          </h2>
          <div className="w-32 h-2 bg-[#F2A6A6] rounded-full mx-auto" />
        </div>

        {/* Gallery Carousel */}
        <div className="gallery-wrapper">
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
      </div>
    </section>
  );
}
