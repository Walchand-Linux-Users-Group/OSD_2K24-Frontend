"use client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { GLTF } from "three-stdlib";
import { BorderBeamDemo } from "@/components/ui/lightcard";
import { AnimatedBeamDemo } from "@/components/ui/animated-beams";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import githubImg from "../../public/github.png";

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
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 },
        },
    };

    return (
        <div className="bg-white w-[90%] mx-auto shadow-xl border-[1px] rounded-[20px] space-y-12 my-16 ">
            <motion.div
                className="
           bg-gradient-to-b from-white via-orange-100 to-white
           p-4 py-16
          bg-transparent bg-clip-padding backdrop-blur-lg bg-opacity-30
          overflow-hidden flex flex-col justify-center items-center relative border-b rounded-t-[20px]"
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
                            The most trusted version control. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Cupiditate,
                            blanditiis.
                        </motion.p>
                        {/* Register button */}
                        <motion.div
                            className="
                cursor-pointer
                h-[20px] w-[150px]
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
                                <PerspectiveCamera
                                    makeDefault
                                    position={[0, 0, 5]}
                                />
                                <ambientLight intensity={1} />
                                <directionalLight position={[10, 10, 10]} />
                                <pointLight
                                    position={[10, 10, 10]}
                                    intensity={1}
                                />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                />
                                <Model hovered={hovered} />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </motion.div>
            <div
                className="bg-gradient-to-b from-white via-purple-100 to-white p-4
          bg-transparent bg-clip-padding backdrop-blur-lg bg-opacity-30
          overflow-hidden flex flex-col justify-center items-center relative py-16 rounded-b-[20px]"
            >
                <div className="mx-auto max-w-7xl">
                    <motion.h1
                        className="mb-12 text-center text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Collaborate with Developers Worldwide
                    </motion.h1>
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1: Collaborate */}
                        <motion.div
                            className="backdrop-blur-lg bg-white/30 border border-gray-300 rounded-2xl shadow-xl overflow-hidden"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <div className="p-6">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                                    Collaborate
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Illum, cum?
                                </p>
                                <div className="rounded-lg overflow-hidden flex justify-center items-center">
                                    <AnimatedBeamDemo />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Session 01 */}
                        <motion.div
                            className="backdrop-blur-lg bg-white/30 border border-gray-300 rounded-2xl shadow-xl overflow-hidden"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <div className="p-6">
                                <div className="mb-6">
                                    <NeonGradientCard className="max-w-sm mx-auto">
                                        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-5xl sm:text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                                            Session 01
                                        </span>
                                    </NeonGradientCard>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Explore advanced collaboration techniques
                                    and best practices for efficient teamwork in
                                    software development.
                                </p>
                                <ul className="text-center text-gray-700">
                                    <li className="mb-2">
                                        Session 01 - Git & GitHub
                                    </li>
                                    <li className="mb-2">Date - xxx</li>
                                    <li>Time - xxx</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Card 3: Learn GitHub */}
                        <motion.div
                            className="backdrop-blur-lg bg-white/30 border border-gray-300 rounded-2xl shadow-xl overflow-hidden"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <div className="p-6">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                                    Learn{" "}
                                    <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#77bdff] to-[#c300ff]">
                                        GitHub
                                    </span>
                                </h2>
                                <div className="mt-6">
                                    <Image
                                        src={githubImg}
                                        alt="GitHub collaboration illustration"
                                        width={300}
                                        height={300}
                                        layout="responsive"
                                        className="rounded-lg object-cover "
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Git;
