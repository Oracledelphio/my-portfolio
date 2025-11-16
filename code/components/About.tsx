import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

const techStack = [
  'C++', 'Java', 'Python', 'Dart', 'JavaScript', 'HTML', 'CSS',
  'React', 'Next.js', 'Flutter', 'PyTorch', 'NumPy', 'Pandas',
  'MySQL', 'PostgreSQL', 'AWS Cloud', 'Git/GitHub', 'Linux',
  'TensorFlow', 'OpenCV', 'Django', 'GraphQL'
];

export default function About() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', text: 'Welcome to Kurt\'s Tech Stack Terminal' },
    { type: 'system', text: 'Type "ls" to list all technologies' },
  ]);
  const [showPrompt, setShowPrompt] = useState(true);
  const inputRef = useRef(null);
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    
    const newOutput = [
      ...terminalOutput,
      { type: 'input', text: `$ ${terminalInput}` }
    ];

    if (command === 'ls') {
      newOutput.push({ type: 'output', text: techStack.join('  •  ') });
    } else if (command === 'clear') {
      setTerminalOutput([
        { type: 'system', text: 'Welcome to Kurt\'s Tech Stack Terminal' },
        { type: 'system', text: 'Type "ls" to list all technologies' },
      ]);
      setTerminalInput('');
      return;
    } else if (command === '') {
      // Do nothing for empty command
    } else {
      newOutput.push({ type: 'error', text: `Command not found: ${command}. Try "ls"` });
    }

    setTerminalOutput(newOutput);
    setTerminalInput('');
  };

  return (
    <section id="about" className="relative py-32 px-6 lg:px-12 overflow-hidden bg-[#F6EFE8]">
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
            ABOUT ME
          </h2>
          <div className="w-32 h-2 bg-[#F2A6A6] rounded-full" />
        </div>

        {/* Minimalist Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Bio */}
          <div 
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms'
            }}
          >
            <div className="space-y-6">
              <p className="text-2xl lg:text-3xl text-[#5A4036] leading-relaxed font-light">
                AI & Data Science professional with strong foundations in{' '}
                <span className="font-bold text-[#F2A6A6]">full-stack development</span>,{' '}
                <span className="font-bold text-[#F2A6A6]">deep learning</span> and{' '}
                <span className="font-bold text-[#F2A6A6]">Flutter</span>.
              </p>
              
              <p className="text-lg text-[#9E948C] leading-relaxed">
                Passionate about crafting seamless, user-friendly interfaces powered by AI-driven intelligence. 
                Dedicated to building scalable web solutions that blend technical depth with meaningful, impactful user experiences.
              </p>
            </div>

            {/* Achievements - Minimal Cards */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="border-l-4 border-[#F2A6A6] pl-6 py-4">
                <div className="text-3xl font-black text-[#5A4036] mb-2">CVIP 2025</div>
                <div className="text-sm text-[#9E948C] uppercase tracking-wider">Published Paper</div>
              </div>
              
              <div className="border-l-4 border-[#8B6D5C] pl-6 py-4">
                <div className="text-3xl font-black text-[#5A4036] mb-2">9.51/10</div>
                <div className="text-sm text-[#9E948C] uppercase tracking-wider">CGPA</div>
              </div>

              <div className="border-l-4 border-[#5A4036] pl-6 py-4">
                <div className="text-3xl font-black text-[#5A4036] mb-2">HackPrinceton</div>
                <div className="text-sm text-[#9E948C] uppercase tracking-wider">2025 Participant</div>
              </div>

              <div className="border-l-4 border-[#F2A6A6] pl-6 py-4">
                <div className="text-3xl font-black text-[#5A4036] mb-2">Traboda</div>
                <div className="text-sm text-[#9E948C] uppercase tracking-wider">Current Intern</div>
              </div>
            </div>
          </div>

          {/* Right side - Interactive Terminal */}
          <div 
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1) 400ms'
            }}
          >
            <div className="bg-[#2D2D2D] rounded-2xl shadow-2xl overflow-hidden border border-[#3D3D3D]">
              {/* Terminal Header */}
              <div className="bg-[#1E1E1E] px-4 py-3 flex items-center gap-2 border-b border-[#3D3D3D]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="w-4 h-4 text-[#8B949E]" />
                  <span className="text-sm text-[#8B949E] font-mono">terminal</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div 
                className="p-6 font-mono text-sm h-[400px] overflow-y-auto"
                onClick={() => inputRef.current?.focus()}
              >
                {terminalOutput.map((line, idx) => (
                  <div key={idx} className="mb-2">
                    {line.type === 'system' && (
                      <div className="text-[#8B949E]"># {line.text}</div>
                    )}
                    {line.type === 'input' && (
                      <div className="text-[#27C93F]">{line.text}</div>
                    )}
                    {line.type === 'output' && (
                      <div className="text-[#E6EDF3] mt-2 mb-3 leading-relaxed">
                        {line.text}
                      </div>
                    )}
                    {line.type === 'error' && (
                      <div className="text-[#FF5F56]">{line.text}</div>
                    )}
                  </div>
                ))}

                {/* Input Line */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center">
                  <span className="text-[#27C93F] mr-2">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent text-[#E6EDF3] outline-none border-none"
                    placeholder="type 'ls' to see tech stack..."
                    autoFocus
                  />
                  {showPrompt && (
                    <span className="text-[#E6EDF3] animate-pulse">▊</span>
                  )}
                </form>
              </div>
            </div>

            {/* Helper Text */}
            <div className="mt-4 text-center">
              <p className="text-sm text-[#9E948C] italic">
                💡 Interactive terminal — try typing commands
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
