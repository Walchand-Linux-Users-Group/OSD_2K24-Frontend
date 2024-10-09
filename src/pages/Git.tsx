"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

function Model() {
  const { scene } = useGLTF("/models/git/scene.gltf") as GLTFResult;
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // Adjust speed as needed
    }
  });

  return <primitive ref={ref} object={scene} scale={1.5} />;
}

const Git: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 overflow-hidden relative flex flex-col items-center justify-center p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl md:text-8xl font-bold text-orange-500 mb-4 z-10"
      >
        GIT
      </motion.h1>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-lg p-6 shadow-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold mb-2">Key Concepts</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Repositories</li>
              <li>Commits</li>
              <li>Branches</li>
              <li>Merging</li>
            </ul>
          </div>
        </motion.div>

        <div className="col-span-1 md:col-span-1 relative h-[400px] md:h-[500px]">
          <Canvas className="absolute inset-0">
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <Model />
            </Suspense>
          </Canvas>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-4"
        >
          <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-lg p-6 shadow-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold mb-2">Popular Commands</h3>
            <ul className="list-disc list-inside text-sm">
              <li>git init</li>
              <li>git add</li>
              <li>git commit</li>
              <li>git push</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-sm text-gray-600 max-w-2xl text-center mt-8 z-10"
      >
        Git is a distributed version control system that revolutionized software
        development. It allows developers to track changes, collaborate
        efficiently, and manage complex projects with ease.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 z-10"
      >
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
          Let&apos;s Learn
          <ArrowDownCircle className="ml-2" />
        </button>
      </motion.div>
    </div>
  );
};

export default Git;
