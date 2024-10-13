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
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-orange-100 to-white p-4 sm:p-8">
      <motion.div
        className="
          border-[1px] border-gray-300 rounded-2xl
          shadow-xl
          m-2 sm:m-[25px] p-4 sm:p-[25px]
          drop-shadow-2xl
          bg-transparent bg-clip-padding backdrop-blur-lg bg-opacity-30
          overflow-hidden flex flex-col justify-center items-center relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Text and 3D model */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center mb-8 lg:mb-0 relative">
          {/* Text */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-8 flex flex-col justify-center items-center lg:items-start">
            <motion.p
              className="text-2xl mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Learn
            </motion.p>
            <motion.h1
              className="
                text-[100px] sm:text-[200px] lg:text-[300px]
                text-orange-600
                font-bold
                font-righteous
                mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              GIT
            </motion.h1>
            <motion.p
              className="text-lg mb-4 max-w-md px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              The most trusted version control. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate, blanditiis.
            </motion.p>
            {/* Register button */}
            <motion.div
              className="
                cursor-pointer
                h-[40px] w-[150px]
                p-2
                rounded-2xl
                border-black border-[1px]
                flex items-center justify-center
                text-black
                hover:bg-orange-600 hover:text-black
                transition-all
                duration-300
                font-light
                text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.div>
          </div>
          {/* 3D model */}
          <div
            className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]"
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
      </motion.div>
    </div>
  );
};

export default Git;
