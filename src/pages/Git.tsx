"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { GLTF } from "three-stdlib";
import { BorderBeamDemo } from "@/components/ui/lightcard";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

function Model({ hovered }: { hovered: boolean }) {
  const { scene } = useGLTF("/models/git/scene.gltf") as GLTFResult;
  const ref = useRef<THREE.Group>(null);
  const scale = useRef(new THREE.Vector3(2, 2, 2));
  const targetScale = new THREE.Vector3(2.5, 2.5, 2.5);

  useFrame(() => {
    if (ref.current) {
      scale.current.lerp(
        hovered ? targetScale : new THREE.Vector3(2, 2, 2),
        0.1
      );
      ref.current.scale.copy(scale.current);
      ref.current.rotation.y += hovered ? 0.05 : 0.03;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

const Git: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col lg:flex-row justify-center items-center p-5  m-5">
      {/* Text and 3D model */}
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-center mb-8 lg:mb-0 relative">
        {/* Text */}
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
          <p className="text-2xl mb-2">Learn</p>
          <h1 className="text-6xl lg:text-8xl text-orange-600 font-bold mb-4">
            GIT
          </h1>
          <p className="text-lg mb-4 max-w-md">
            The most trusted version control. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cupiditate, blanditiis.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <span className="mr-2">Let's learn GIT</span>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="cursor-pointer"
            >
              <ArrowDownCircle size={24} />
            </motion.div>
          </div>
        </div>

        {/* 3D model */}
        <div
          className="relative h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]"
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <Model hovered={hovered} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Cards */}
      <div className=" absolute top-4 right-4 lg:top-8 lg:right-8 flex flex-col space-y-4 max-w-xs">
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">GIT Basics</h2>
          <p className="text-sm">
            Learn the fundamentals of version control with Git. Master commits,
            branches, and merges.
          </p>
        </div>
        <div className=" bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Advanced GIT</h2>
          <p className="text-sm">
            Dive deep into Git's advanced features. Explore rebasing,
            cherry-picking, and more.
          </p>
        </div>
      </div>

      {/* Session info */}
      <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8">
        <BorderBeamDemo />
      </div>
    </div>
  );
};

export default Git;
