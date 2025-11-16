import React, { useState, useEffect } from 'react';

const quotes = [
  { text: "Innovation distinguishes leaders from followers", author: "Steve Jobs" },
  { text: "The best way to predict the future is to create it", author: "Peter Drucker" },
  { text: "Code is poetry", author: "WordPress" },
  { text: "Stay hungry, stay foolish", author: "Steve Jobs" },
  { text: "Design is intelligence made visible", author: "Alina Wheeler" }
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete(), 600);
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Quote rotation
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(quoteInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F6EFE8] transition-opacity duration-[600ms]"
      style={{ opacity: progress === 100 ? 0 : 1 }}
    >
      <div className="text-center px-8 max-w-3xl w-full">
        {/* Quote Display */}
        <div className="mb-20 relative h-56 flex items-center justify-center">
          {quotes.map((quote, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 px-4 ${
                idx === currentQuote
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            >
              <p 
                className="text-3xl md:text-4xl lg:text-5xl text-[#5A4036] mb-6 italic leading-relaxed"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                "{quote.text}"
              </p>
              <p className="text-base md:text-lg text-[#8B6D5C] tracking-wide">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-lg mx-auto">
          <div className="h-2 bg-[#9E948C] bg-opacity-20 rounded-full overflow-hidden shadow-sm">
            <div
              className="h-full bg-gradient-to-r from-[#F2A6A6] to-[#8B6D5C] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-[#9E948C] mt-6 tracking-wider font-medium">
            {progress}%
          </p>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
