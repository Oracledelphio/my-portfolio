import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Programming keywords and binary codes for matrix effect
const matrixChars = "01";
const programmingKeywords = [
  "const",
  "let",
  "var",
  "function",
  "class",
  "async",
  "await",
  "return",
  "import",
  "export",
  "interface",
  "type",
  "extends",
  "implements",
  "null",
  "undefined",
  "true",
  "false",
  "for",
  "while",
  "if",
  "else",
  "try",
  "catch",
  "throw",
  "new",
  "this",
  "super",
  "static",
  "public",
  "private",
];

const hiddenMessage = "INNOVATION • CREATIVITY • EXCELLENCE";

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const matrixContainerRef = useRef(null);
  const messageRef = useRef(null);

  const [matrixElements, setMatrixElements] = useState<any[]>([]);
  const [messageOpacity, setMessageOpacity] = useState(0);

  const lastMoveTime = useRef(0);
  const lastPosition = useRef({ x: 0, y: 0 });
  const elementCounter = useRef(0);

  useEffect(() => {
    // GSAP Timeline for Hero Load Animation
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      imageRef.current,
      { scale: 1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2.5, ease: "power4.out" },
    );

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      0.3,
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    let rafId;

    // Generate random binary or keyword
    const generateMatrixText = () => {
      if (Math.random() > 0.4) {
        // 60% chance of binary code
        let binary = "";
        for (let i = 0; i < Math.floor(Math.random() * 8) + 4; i++) {
          binary += matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
        return binary;
      } else {
        // 40% chance of programming keyword
        return programmingKeywords[
          Math.floor(Math.random() * programmingKeywords.length)
        ];
      }
    };

    // Cursor movement handler
    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastMoveTime.current;

      if (deltaTime < 16) return; // Throttle to ~60fps

      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
      const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / deltaTime;

      lastPosition.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = currentTime;

      // Spawn matrix elements on cursor movement
      if (velocity > 0.1) {
        for (let i = 0; i < Math.max(1, Math.floor(velocity)); i++) {
          spawnMatrixElement(e.clientX, e.clientY);
        }
      }

      // Gradually reveal hidden message
      const newOpacity = Math.min(messageOpacity + velocity * 0.002, 1);
      setMessageOpacity(newOpacity);
    };

    const spawnMatrixElement = (x, y) => {
      elementCounter.current++;
      const id = `matrix-${Date.now()}-${elementCounter.current}`;
      const text = generateMatrixText();
      const duration = 2000 + Math.random() * 1500; // 2 - 3.5s

      const colorOptions = ["#1a1a1a", "#00C853"];
      const randomColor =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];

      const newElement = {
        id,
        text,
        x: x + (Math.random() - 0.5) * 80,
        y: y + (Math.random() - 0.5) * 60,
        duration,
        delay: Math.random() * 150,
        color: randomColor,
        fontSize: 16 + Math.random() * 10,
      };

      setMatrixElements((prev) => [...prev, newElement]);

      // Remove after animation
      setTimeout(() => {
        setMatrixElements((prev) => prev.filter((el) => el.id !== id));
      }, duration + 200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [messageOpacity]);

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Full-width Hero Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0, willChange: "transform, opacity" }}
      >
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6918c855be823fdca1b8c661/8f6957b65_RedGrayTypographyPortfolioCoverA4Landscape1.png"
          alt="Kurt Sony Rebello"
          className="w-full h-full object-cover"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"
          style={{ opacity: 0, willChange: "opacity" }}
        />
      </div>

      {/* Matrix Code Trail Container */}
      <div
        ref={matrixContainerRef}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      >
        {matrixElements.map((element) => (
          <div
            key={element.id}
            className="absolute font-mono font-bold"
            style={{
              left: `${element.x}px`,
              top: `${element.y}px`,
              color: element.color,
              fontSize: `${element.fontSize}px`,
              textShadow: `0 0 8px ${element.color}80, 0 0 16px ${element.color}40`,
              animation: `matrixFall ${element.duration}ms ease-in forwards`,
              animationDelay: `${element.delay}ms`,
              willChange: "transform, opacity",
              letterSpacing: "1px",
              fontWeight: "600",
            }}
          >
            {element.text}
          </div>
        ))}
      </div>

      {/* Hidden Message Reveal */}
      <div
        ref={messageRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        style={{
          opacity: messageOpacity,
          transition: "opacity 0.3s ease-out",
        }}
      >
        <div className="text-center px-6">
          <h2
            className="text-4xl lg:text-6xl font-black text-white"
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(242,166,166,0.5)",
              letterSpacing: "0.15em",
            }}
          >
            {hiddenMessage}
          </h2>
        </div>
      </div>

      {/* CSS Animation for matrix fall effect */}
      <style jsx>{`
        @keyframes matrixFall {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) translateY(0);
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(80px);
          }
        }
      `}</style>
    </section>
  );
}
