import React from "react";
import { motion } from "framer-motion";
import { AnimatedBeamDemo } from "@/components/ui/animated-beams";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import githubImg from "../../public/github.png";

export default function Component() {
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
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-purple-100 to-white p-8">
      <div className="border-[1px] border-gray-300 rounded-2xl shadow-xl m-6 p-6 drop-shadow-2xl bg-transparent bg-clip-padding backdrop-blur-lg bg-opacity-30 overflow-hidden flex flex-col justify-center items-center relative">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, cum?
                </p>
                <div className="rounded-lg overflow-hidden">
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
                  Explore advanced collaboration techniques and best practices
                  for efficient teamwork in software development.
                </p>
                <ul className="text-center text-gray-700">
                  <li className="mb-2">Session 01 - Git & GitHub</li>
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
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cards */}
    </div>
  );
}
