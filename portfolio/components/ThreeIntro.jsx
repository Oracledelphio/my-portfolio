import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

export default function ThreeIntro({ onComplete }) {
  const mountRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x93c5a7,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Create liquid glass shapes
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x93c5a7,
      transparent: true,
      opacity: 0.3,
      shininess: 100,
    });

    const shapes = [];
    for (let i = 0; i < 5; i++) {
      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      );
      scene.add(shape);
      shapes.push(shape);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x93c5a7, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x93c5a7, 1, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    camera.position.z = 5;

    // Animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.002;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01 * (index + 1);
        shape.rotation.y += 0.01 * (index + 1);
        shape.position.y = Math.sin(Date.now() * 0.001 + index) * 0.5;
      });

      renderer.render(scene, camera);
    };

    animate();
    setIsLoading(false);

    // Auto complete after 3 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (
        currentMount &&
        renderer.domElement &&
        currentMount.contains(renderer.domElement)
      ) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div ref={mountRef} className="absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <div className="glass rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome</h1>
          <p className="text-pistachio-300">Initializing experience...</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
