import React, { useState, useEffect } from 'react';
import { FileText, Award, ExternalLink, BookOpen } from 'lucide-react';

export default function Publications() {
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

    const element = document.getElementById('publications');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="publications" className="relative py-32 px-6 lg:px-12 overflow-hidden bg-[#F6EFE8]">
      <div className="max-w-[1400px] mx-auto relative z-10">
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
            RESEARCH
          </h2>
          <div className="w-32 h-2 bg-[#F2A6A6] rounded-full" />
        </div>

        {/* Main Publication Card - Magazine Style */}
        <div 
          className="relative max-w-5xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms'
          }}
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#5A4036]/10">
            <div className="grid lg:grid-cols-5">
              {/* Left Accent Bar */}
              <div className="hidden lg:block bg-gradient-to-b from-[#F2A6A6] to-[#8B6D5C] p-8 flex flex-col items-center justify-center text-white">
                <div className="transform -rotate-90 whitespace-nowrap">
                  <div className="text-6xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    2025
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-4 p-12 lg:p-16">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-[#F2A6A6] text-white px-4 py-2 rounded-full">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Conference Paper</span>
                  </div>
                  <div className="text-[#8B6D5C] font-semibold text-sm">
                    CVIP 2025 • IIT Ropar
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-4xl lg:text-5xl font-black text-[#5A4036] mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Automation of Mallampati Classification to Reduce Mortality Rates During Intubation
                </h3>

                {/* Authors */}
                <p className="text-lg text-[#9E948C] mb-8 italic">
                  K. Sony, et al.
                </p>

                {/* Abstract */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full bg-[#F2A6A6] rounded-full" />
                    <div>
                      <h4 className="text-sm font-bold text-[#5A4036] uppercase tracking-wider mb-2">Abstract</h4>
                      <p className="text-[#5A4036]/80 leading-relaxed">
                        This research presents an innovative deep learning approach to automate Mallampati 
                        classification, a critical pre-intubation assessment tool. By leveraging computer vision 
                        and advanced neural networks, we developed a system that significantly improves risk 
                        assessment accuracy, potentially reducing intubation-related complications and mortality 
                        rates in clinical settings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Contributions */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="border-l-4 border-[#F2A6A6] pl-4">
                    <div className="text-2xl font-black text-[#5A4036] mb-2">95%+</div>
                    <div className="text-sm text-[#9E948C] uppercase tracking-wider">Accuracy</div>
                  </div>
                  <div className="border-l-4 border-[#8B6D5C] pl-4">
                    <div className="text-2xl font-black text-[#5A4036] mb-2">Real-time</div>
                    <div className="text-sm text-[#9E948C] uppercase tracking-wider">Processing</div>
                  </div>
                  <div className="border-l-4 border-[#5A4036] pl-4">
                    <div className="text-2xl font-black text-[#5A4036] mb-2">Clinical</div>
                    <div className="text-sm text-[#9E948C] uppercase tracking-wider">Application</div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Computer Vision', 'Medical AI', 'Deep Learning', 'TensorFlow', 'Healthcare'].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F6EFE8] text-[#5A4036] text-sm font-semibold rounded-full border border-[#8B6D5C]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#5A4036] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8B6D5C] transition-all flex items-center gap-2 hover:scale-105">
                    <BookOpen className="w-5 h-5" />
                    READ FULL PAPER
                  </button>
                  <button className="border-2 border-[#5A4036] text-[#5A4036] px-8 py-4 rounded-full font-bold hover:bg-[#5A4036] hover:text-white transition-all flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    VIEW ON CVIP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Indicator */}
          <div 
            className="mt-16 text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 600ms'
            }}
          >
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg border border-[#8B6D5C]/10">
              <FileText className="w-5 h-5 text-[#F2A6A6]" />
              <p className="text-[#5A4036] font-semibold">
                More publications in progress — Stay tuned for upcoming research
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
