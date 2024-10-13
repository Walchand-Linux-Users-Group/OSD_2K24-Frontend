"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { SphereGeometry, MeshStandardMaterial } from 'three';

const Particle: React.FC<{ position: [number, number, number], size: number }> = ({ position, size }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const velocity = useRef(new THREE.Vector3(0, Math.random() * 0.1 + 0.1, 0)); // Initial velocity

  useFrame(() => {
    if (meshRef.current) {
      // Apply gravity
      velocity.current.y -= 0.01; // Gravity force
      meshRef.current.position.add(velocity.current);

      // Reset position if below a certain threshold
      if (meshRef.current.position.y < -5) {
        meshRef.current.position.y = 5; // Reset to top
        meshRef.current.position.x = (Math.random() - 0.5) * 10;
        meshRef.current.position.z = (Math.random() - 0.5) * 10;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={`hsl(${Math.random() * 360}, 100%, 50%)`} />
    </mesh>
  );
};

const Particles: React.FC = () => {
  const particleCount = 100;

  return (
    <>
      {Array.from({ length: particleCount }).map((_, i) => {
        const size = Math.random() * 0.2 + 0.1;
        return (
          <Particle
            key={i}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            size={size}
          />
        );
      })}
    </>
  );
};

const ParticlesBackground: React.FC = () => {
  return (
    <>
      <h1 style={{ color: '#fff' }}>Gravity Particles</h1>
      <Canvas style={{ background: '#000' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Particles />
      </Canvas>
    </>
  );
};

export default ParticlesBackground;
