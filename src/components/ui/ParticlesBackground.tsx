"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

// Particle Component (Square Star)
const Particle: React.FC<{ position: [number, number, number]; size: number }> = ({ position, size }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const velocity = useRef(new Vector3(Math.random() * 0.01 - 0.005, Math.random() * 0.01 - 0.005, 0)); // Slower random velocity

  useFrame(() => {
    if (meshRef.current) {
      // Move the particle using velocity
      meshRef.current.position.add(velocity.current);

      // Bounce back if the particle reaches the boundary
      ["x", "y", "z"].forEach((axis) => {
        const pos = meshRef.current!.position[axis];
        if (pos > 5 || pos < -5) velocity.current[axis] *= -1; // Reverse direction
      });

      // Simulate twinkling effect by changing size slightly
      if (meshRef.current) {
        const scale = 1 + 0.1 * Math.sin(Date.now() * 0.002 + position[0] + position[1]);
        meshRef.current.scale.set(scale, scale, scale);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} /> {/* Square particle */}
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

// Particles Container
const Particles: React.FC = () => {
  const particleCount = 100; // More particles for a denser background

  return (
    <>
      {Array.from({ length: particleCount }).map((_, i) => {
        // Adjust size to vary between small and moderate particles
        const size = Math.random() < 0.7 
          ? Math.random() * 0.02 + 0.01  // 70% smaller particles
          : Math.random() * 0.06 + 0.01; // 30% larger particles

        const position: [number, number, number] = [
          (Math.random() - 0.5) * 10, // Random X position
          (Math.random() - 0.5) * 10, // Random Y position
          (Math.random() - 0.5) * 10, // Random Z position
        ];
        return <Particle key={i} position={position} size={size} />;
      })}
    </>
  );
};

// Main Component with Canvas
const ParticlesBackground: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Canvas style={{ height: '100%', width: '100%' }}>
        <ambientLight intensity={0.1} /> {/* Reduced intensity */}
        <pointLight position={[10, 10, 10]} intensity={0.3} /> {/* Reduced intensity */}
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;
