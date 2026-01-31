"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const hiddenMessage = "INNOVATION • CREATIVITY • EXCELLENCE";

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const rippleContainerRef = useRef(null);
  const messageRef = useRef(null);

  const [ripples, setRipples] = useState<any[]>([]);
  const [messageOpacity, setMessageOpacity] = useState(0);

  const lastMoveTime = useRef(0);
  const lastPosition = useRef({ x: 0, y: 0 });
  const rippleCounter = useRef(0);

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

    // Cursor movement handler
    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastMoveTime.current;

      if (deltaTime < 120) return; // Throttle ripple spawn to every 120ms for smoother feel

      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
      const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / deltaTime;

      lastPosition.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = currentTime;

      // Spawn ripple on cursor movement with higher velocity threshold
      if (velocity > 0.3) {
        spawnRipple(e.clientX, e.clientY, velocity);
      }

      // Gradually reveal hidden message
      const newOpacity = Math.min(messageOpacity + velocity * 0.002, 1);
      setMessageOpacity(newOpacity);
    };

    const spawnRipple = (x, y, velocity) => {
      rippleCounter.current++;
      const id = `ripple-${Date.now()}-${rippleCounter.current}`;
      const duration = 1800 + Math.random() * 400; // Ripple duration 1.8-2.2s for smooth flow
      const delay = Math.random() * 50; // Slight random delay for organic feel

      const newRipple = {
        id,
        x,
        y,
        duration,
        delay,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((el) => el.id !== id));
      }, duration);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [messageOpacity]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
    >
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

      {/* Water Ripples Container */}
      <div
        ref={rippleContainerRef}
        className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
      >
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              transform: "translate(-50%, -50%)",
              animation: `waterRipple ${ripple.duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              animationDelay: `${ripple.delay}ms`,
              willChange: "transform, opacity",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: "6px",
                height: "6px",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 30%, rgba(200,220,255,0.1) 60%, rgba(255,255,255,0) 100%)",
                boxShadow:
                  "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(200, 220, 255, 0.2), inset -1px -1px 3px rgba(0, 0, 0, 0.05)",
                filter: "blur(0.5px)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Hidden Message Reveal */}
      <div
        ref={messageRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
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

      {/* CSS Animation for water ripple effect */}
      <style jsx>{`
        @keyframes waterRipple {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
          }
          15% {
            opacity: 0.9;
          }
          40% {
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(80);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
