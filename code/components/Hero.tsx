import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Sample images with varying aspect ratios for cursor trail
const trailImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=350&h=250&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=350&fit=crop",
];

const hiddenMessage = "INNOVATION • CREATIVITY • EXCELLENCE";

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const messageRef = useRef(null);

  const [trailElements, setTrailElements] = useState<any[]>([]);
  const [messageOpacity, setMessageOpacity] = useState(0);

  const lastMoveTime = useRef(0);
  const lastPosition = useRef({ x: 0, y: 0 });
  const imageCounter = useRef(0);
  const spawnCounter = useRef(0);

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

    // Cursor velocity tracking + image spawning
    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastMoveTime.current;

      if (deltaTime < 16) return; // Throttle to ~60fps

      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
      const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / deltaTime;

      lastPosition.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = currentTime;

      // Velocity-based spawning
      // Higher velocity = more frequent spawns
      const spawnThreshold = 0.3; // Adjust sensitivity

      if (velocity > spawnThreshold) {
        spawnCounter.current += velocity;

        // Spawn image when counter exceeds threshold
        if (spawnCounter.current > 2) {
          spawnCounter.current = 0;
          spawnImage(e.clientX, e.clientY, velocity);
        }
      }

      // Gradually reveal hidden message based on total activity
      const newOpacity = Math.min(messageOpacity + velocity * 0.002, 1);
      setMessageOpacity(newOpacity);
    };

    const spawnImage = (x, y, velocity) => {
      const id = Date.now() + Math.random();
      const imageUrl = trailImages[imageCounter.current % trailImages.length];
      imageCounter.current++;

      // Choose an aspect ratio to vary sizes (wider / taller / square)
      const ratios = [4 / 3, 3 / 4, 1, 16 / 9, 9 / 16];
      const ratio = ratios[Math.floor(Math.random() * ratios.length)];

      // Base width varies with velocity (faster movement -> slightly bigger spawn)
      const baseWidth = 120 + Math.min(220, Math.round(velocity * 120)); // 120 - 340 px
      const width = Math.round(baseWidth + (Math.random() - 0.5) * 60);
      const height = Math.max(60, Math.round(width / ratio));

      const randomRotation = (Math.random() - 0.5) * 30; // -15 to 15 degrees

      // Lifetime tied to size so larger images linger a bit longer
      const lifetime = 2200 + Math.round(Math.random() * 1000); // 2200 - 3200ms

      const newElement = {
        id,
        url: imageUrl,
        x,
        y,
        rotation: randomRotation,
        width,
        height,
        lifetime,
      };

      setTrailElements((prev) => [...prev, newElement]);

      // Auto-remove after animation (match lifetime)
      setTimeout(() => {
        setTrailElements((prev) => prev.filter((el) => el.id !== id));
      }, lifetime);
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

      {/* Cursor Trail Container */}
      <div
        ref={cursorTrailRef}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      >
        {trailElements.map((element) => (
          <div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}px`,
              top: `${element.y}px`,
              // expose rotation to CSS animation via custom property
              ["--rotation" as any]: `${element.rotation}deg`,
              transform: `translate(-50%, -50%) rotate(${element.rotation}deg)`,
              animation: `trailFade ${element.lifetime}ms ease-out forwards`,
              willChange: "transform, opacity",
            }}
          >
            <img
              src={element.url}
              alt=""
              className="object-cover rounded-lg shadow-xl"
              style={{
                width: `${element.width}px`,
                height: `${element.height}px`,
                pointerEvents: "none",
              }}
            />
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

      {/* CSS Animation for trail fade */}
      <style jsx>{`
        @keyframes trailFade {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scale(0.8);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%)
              rotate(calc(var(--rotation) + 10deg)) scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
