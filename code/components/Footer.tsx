import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5A4036] text-white py-16 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black mb-4">KURT SONY</h3>
            <p className="text-white/70 leading-relaxed">
              Data Scientist & AI Engineer specializing in Computer Vision and Deep Learning.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider mb-6 text-white/50">
              Pages
            </h4>
            <nav className="space-y-3">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-white/80 hover:text-[#F2A6A6] transition-colors font-semibold"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-[#F2A6A6] transition-colors font-semibold"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-[#F2A6A6] transition-colors font-semibold"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-[#F2A6A6] transition-colors font-semibold"
              >
                Publications
              </button>
            </nav>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider mb-6 text-white/50">
              Follow On
            </h4>
            <nav className="space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-[#F2A6A6] transition-colors font-semibold"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-[#F2A6A6] transition-colors font-semibold"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-[#F2A6A6] transition-colors font-semibold"
              >
                Twitter
              </a>
              <a
                href="mailto:contact@example.com"
                className="block text-white/80 hover:text-[#F2A6A6] transition-colors font-semibold"
              >
                Email
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider mb-6 text-white/50">
              Contact
            </h4>
            <p className="text-white/80 mb-3 font-semibold">
              contact@example.com
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Available for opportunities in AI/ML, Computer Vision, and Data Science.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Kurt Sony Rebello. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-white/50 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">
              Privacy Policy
            </button>
            <button className="text-white/50 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
