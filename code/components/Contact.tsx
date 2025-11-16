import React, { useState, useEffect } from 'react';
import { Send, Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:ksonyrebello@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12 overflow-hidden bg-[#F6EFE8]">
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
            LET'S BUILD
            <br />
            SOMETHING GREAT
          </h2>
          <div className="w-32 h-2 bg-[#F2A6A6] rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info Cards */}
          <div 
            className="space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms'
            }}
          >
            {/* Main CTA Card */}
            <div className="bg-gradient-to-br from-[#5A4036] to-[#8B6D5C] rounded-3xl p-8 lg:p-12 shadow-2xl text-white">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#F2A6A6] animate-pulse mt-2" />
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider opacity-90">
                    Available for Opportunities
                  </span>
                </div>
              </div>
              <p className="text-2xl lg:text-3xl font-bold leading-relaxed mb-8">
                Open to full-time roles, internships, and freelance projects in{' '}
                <span className="text-[#F2A6A6]">AI/ML</span>,{' '}
                <span className="text-[#F2A6A6]">Full-Stack Development</span>, and{' '}
                <span className="text-[#F2A6A6]">Data Science</span>.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                  Remote
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                  Hybrid
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                  On-site
                </span>
              </div>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <a
                href="mailto:ksonyrebello@gmail.com"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group border-2 border-transparent hover:border-[#F2A6A6]"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F2A6A6]/10 flex items-center justify-center mb-4 group-hover:bg-[#F2A6A6] transition-all">
                  <Mail className="w-7 h-7 text-[#F2A6A6] group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs font-bold text-[#9E948C] uppercase tracking-wider mb-2">
                  Email
                </div>
                <div className="text-sm font-bold text-[#5A4036] group-hover:text-[#F2A6A6] transition-colors break-all">
                  ksonyrebello@gmail.com
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919061298404"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group border-2 border-transparent hover:border-[#8B6D5C]"
              >
                <div className="w-14 h-14 rounded-xl bg-[#8B6D5C]/10 flex items-center justify-center mb-4 group-hover:bg-[#8B6D5C] transition-all">
                  <Phone className="w-7 h-7 text-[#8B6D5C] group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs font-bold text-[#9E948C] uppercase tracking-wider mb-2">
                  Phone
                </div>
                <div className="text-sm font-bold text-[#5A4036] group-hover:text-[#8B6D5C] transition-colors">
                  +91 9061298404
                </div>
              </a>

              {/* Location */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#5A4036]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#5A4036]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#9E948C] uppercase tracking-wider mb-2">
                      Location
                    </div>
                    <div className="text-sm font-bold text-[#5A4036]">
                      Kochi, Kerala, India 682017
                    </div>
                    <div className="text-xs text-[#9E948C] mt-1">
                      Open to relocate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-sm font-bold text-[#5A4036] uppercase tracking-wider mb-4">
                Connect With Me
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Oracledelphio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#F6EFE8] rounded-full hover:bg-[#5A4036] hover:text-white transition-all group"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-bold">GitHub</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
                <a
                  href="https://linkedin.com/in/kurt-sony-rebello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#F6EFE8] rounded-full hover:bg-[#5A4036] hover:text-white transition-all group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-bold">LinkedIn</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div 
            className="sticky top-24"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 400ms'
            }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border-2 border-[#8B6D5C]/10">
              <h3 className="text-2xl font-black text-[#5A4036] mb-6 uppercase tracking-wider">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-[#9E948C] uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#F6EFE8] border-2 border-transparent rounded-xl px-5 py-6 text-base focus:border-[#F2A6A6] focus:bg-white transition-all placeholder:text-[#9E948C]/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#9E948C] uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#F6EFE8] border-2 border-transparent rounded-xl px-5 py-6 text-base focus:border-[#F2A6A6] focus:bg-white transition-all placeholder:text-[#9E948C]/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#9E948C] uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#F6EFE8] border-2 border-transparent rounded-xl px-5 py-4 text-base focus:border-[#F2A6A6] focus:bg-white transition-all resize-none placeholder:text-[#9E948C]/50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F2A6A6] to-[#F2A6A6]/90 text-white px-8 py-5 rounded-full font-bold text-base hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 group"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
