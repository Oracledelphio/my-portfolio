import React, { useState, useEffect } from 'react';
import { Briefcase, Download, MapPin, Calendar, Award, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Traboda CyberLabs',
    period: 'Apr 2025 - Present',
    location: 'Remote',
    highlights: [
      'Enhanced scalable web architectures implementing performance optimizations that reduced page load times by 35%',
      'Expanded user base by 22%, attracting 12,000+ new users through improved platform accessibility',
      'Leading platform redesign with a team of 10+ members'
    ],
    color: 'bg-[#F2A6A6]',
    current: true
  }
];

const education = [
  {
    degree: 'Bachelor of Technology',
    institution: 'Amrita Vishwa Vidyapeetham, Amritapuri',
    period: 'Jul 2023 - 2027',
    grade: 'CGPA: 9.51/10.0',
    color: 'bg-[#8B6D5C]'
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'The Choice School, Tripunithura',
    period: 'Jun 2020 - 2023',
    grade: '94% (Higher Secondary), 98% (High School)',
    color: 'bg-[#5A4036]'
  }
];

const achievements = [
  {
    title: 'HackPrinceton 2025',
    description: 'Selected participant - Chosen from highly competitive global applicant pool',
    icon: Award,
    year: '2025'
  },
  {
    title: 'CVIP 2025 Publication',
    description: 'Conference paper at IIT Ropar on Medical AI',
    icon: Award,
    year: '2025'
  },
  {
    title: 'P.T. Thomas Excellence Award',
    description: 'Outstanding academic performance at Rajagiri College',
    icon: Award,
    year: '2023'
  },
  {
    title: 'NSTSE Kerala State 3rd Prize',
    description: 'State-level science & technology examination',
    icon: Award,
    year: '2023'
  }
];

const certifications = [
  'Developing Large Language Models - Datacamp',
  'AWS Cloud Practitioner (CLF-C02) - Datacamp',
  'Full Stack Developer Certificate - Coursera',
  'AI Shiksha: Machine Learning - IIT Madras'
];

export default function Experience() {
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="experience" className="relative py-32 px-6 lg:px-12 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Title */}
        <div 
          className="mb-20 flex justify-between items-end"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div>
            <h2 className="text-5xl lg:text-7xl font-black text-[#5A4036] mb-6">
              EXPERIENCE
            </h2>
            <div className="w-32 h-2 bg-[#F2A6A6] rounded-full" />
          </div>
          <a 
            href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6918c855be823fdca1b8c661/1d8e9bacb_Kurt_Sony_Resume_Official.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#5A4036] text-white px-6 py-3 rounded-full font-bold hover:bg-[#8B6D5C] transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            DOWNLOAD CV
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Work Experience & Education */}
          <div 
            className="lg:col-span-2 space-y-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms'
            }}
          >
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-black text-[#5A4036] mb-6 uppercase tracking-wider flex items-center gap-3">
                <Briefcase className="w-6 h-6" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="bg-[#F6EFE8] rounded-2xl p-8 border-2 border-[#F2A6A6] shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-2xl font-black text-[#5A4036]">
                            {exp.role}
                          </h4>
                          {exp.current && (
                            <span className="px-3 py-1 bg-[#F2A6A6] text-white text-xs font-bold rounded-full">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <p className="text-lg font-bold text-[#8B6D5C]">
                          {exp.company}
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-full ${exp.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#9E948C]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${exp.color} mt-2 flex-shrink-0`} />
                          <p className="text-[#5A4036]/80 leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-black text-[#5A4036] mb-6 uppercase tracking-wider flex items-center gap-3">
                <GraduationCap className="w-6 h-6" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-[#F6EFE8] rounded-2xl p-8 border-2 border-[#8B6D5C]/20 shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-black text-[#5A4036] mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-lg font-bold text-[#8B6D5C]">
                          {edu.institution}
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-full ${edu.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-[#9E948C]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="px-3 py-1 bg-white rounded-full text-[#5A4036] font-bold">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile CV Button */}
            <a 
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6918c855be823fdca1b8c661/1d8e9bacb_Kurt_Sony_Resume_Official.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden w-full flex items-center justify-center gap-2 bg-[#5A4036] text-white px-6 py-4 rounded-full font-bold hover:bg-[#8B6D5C] transition-all"
            >
              <Download className="w-5 h-5" />
              DOWNLOAD CV
            </a>
          </div>

          {/* Right - Achievements & Certifications */}
          <div 
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 400ms'
            }}
          >
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-black text-[#5A4036] mb-6 uppercase tracking-wider">
                Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[#5A4036] to-[#8B6D5C] rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-lg leading-tight">{achievement.title}</h4>
                          <span className="text-sm opacity-80">{achievement.year}</span>
                        </div>
                        <p className="text-sm opacity-90 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-black text-[#5A4036] mb-6 uppercase tracking-wider">
                Certifications
              </h3>
              
              <div className="bg-[#F6EFE8] rounded-2xl p-6 shadow-lg">
                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F2A6A6] mt-2 flex-shrink-0" />
                      <p className="text-[#5A4036]/80 text-sm leading-relaxed">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
