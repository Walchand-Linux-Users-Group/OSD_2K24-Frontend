import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Gooey from "@/components/sunnysundown/Gooey";
import { useInView } from "react-intersection-observer";

const VidSection = () => {
  const controls = useAnimation(); // Animation controls
  const { ref, inView } = useInView({ threshold: 0.2 }); // Trigger when 20% of the section is in view

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20, duration: 0.8 },
    },
  };

  const gooeyVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start the animation when the section is in view
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="h-screen w-full flex items-center justify-center relative"
    >
      {/* Gooey component in the top right corner */}
      <motion.div
        className="absolute top-10 right-80"
        variants={gooeyVariants}
        initial="hidden"
        animate={controls} // Control animations with scroll
      >
        <Gooey />
      </motion.div>

      {/* Video container with fade-in and slide-up animation */}
      <motion.div
        className="w-[90vw] lg:w-[70vw] aspect-video border-2 border-orange-500 rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-800 via-gray-700 to-gray-900 z-50"
        variants={containerVariants}
        initial="hidden"
        animate={controls} // Control animations with scroll
      >
        {/* Video element */}
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/video/OSD_2024.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Gooey component in the bottom left corner */}
      <motion.div
        className="absolute bottom-250 left-0 mb-4 ml-4"
        variants={gooeyVariants}
        initial="hidden"
        animate={controls} // Control animations with scroll
      >
        <Gooey />
      </motion.div>
    </div>
  );
};

export default VidSection;
