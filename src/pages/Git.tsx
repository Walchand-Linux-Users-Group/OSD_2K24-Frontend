"use client";

import React, { Suspense, useRef, useState } from "react";
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

function Model({ hovered }: { hovered: boolean }) {
  const { scene } = useGLTF("/models/git/scene.gltf") as GLTFResult;
  const ref = useRef<THREE.Group>(null);
  const scale = useRef(new THREE.Vector3(1, 1, 1)); // Current scale
  const targetScale = new THREE.Vector3(1.5, 1.5, 1.5); // Scale on hover

  useFrame(() => {
    if (ref.current) {
      // Smoothly interpolate between current scale and target scale
      scale.current.lerp(
        hovered ? targetScale : new THREE.Vector3(1, 1, 1),
        0.1
      );
      ref.current.scale.copy(scale.current); // Apply the scaled value
      ref.current.rotation.y += hovered ? 0.05 : 0.03; // Fast rotation when hovered
    }
  });

  return <primitive ref={ref} object={scene} />;
}
/*

Framer Motion Effects 
  Motion.<element>
                opacilty location 
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
*/

const Git: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden flex justify-center items-center m-5 p-5  ">
      {/* text */}
      <div>
        <p className=" text-2xl">Learn</p>
        <div className=" text-8xl text-orange-600 ">GIT</div>
        <div>
          The most trusted version control Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate, blanditiis.
        </div>
        <div>
          Lets learn GIT{" "}
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

      {/* 3d model */}
      <div
        className="col-span-1 md:col-span-1 relative h-[400px] md:h-[500px]"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Canvas className="absolute inset-0">
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
  );
};

export default Git;
