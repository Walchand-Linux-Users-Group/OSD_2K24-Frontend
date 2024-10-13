"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
// import BgLayout from "@/pages/"


interface TimelineEntry {
  title: string;
  imageUrl: string; // Added imageUrl to the interface
  altText: string; // Added altText to provide alternative text for each event
}

const events: TimelineEntry[] = [
  { 
    title: 'LinuxDiary', 
    imageUrl: '/ld.jpeg', 
    altText: 'August' 
  },
  { 
    title: 'Open Source Day', 
    imageUrl: '/OSD.png', 
    altText: 'October' 
  },
  { 
    title: 'Metamorphosis', 
    imageUrl: '/Meta.jpeg', 
    altText: 'March' 
  },
  { 
    title: 'Technotweet', 
    imageUrl: '/Techno.jpeg', 
    altText: 'May' 
  },
];

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-10"> {/* Reduced padding bottom */}
       
          <div
            key={0}
            className="relative flex items-center pt-5 md:pt-10" 
          >
            {/* Left Column */}
            <div className="flex flex-col items-end w-1/2 pr-2"> {/* Adjusted padding right */}
              <h3 className="text-sm mb-1 text-right font-bold text-neutral-500 dark:text-neutral-500">
                {"LinuxDiary"}
              </h3>
            </div>

            {/* Timeline Image */}
            <div className="w-1/4 flex justify-center">
              <img
                src={"/ld.jpeg"}
                alt={"LD"}
                className="h-12 w-12 rounded-full z-10" // Reduced size of the image
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-start w-1/2 pl-2"> {/* Adjusted padding left */}
              <p className="text-xs text-left text-gray-500">
                {"August"}
              </p>
            </div>

            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-t from-transparent to-gray-200 z-0"> {/* Reduced width of line */}
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[1px] bg-gradient-to-t from-purple-500 via-orange-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>

          <div
            key={1}
            className="relative flex items-center pt-5 md:pt-10" 
          >
            {/* Left Column */}
            <div className="flex flex-col items-end w-1/2 pr-2"> {/* Adjusted padding right */}
            <p className="text-xs text-left text-gray-500">
                {"October"}
              </p>
            </div>

            {/* Timeline Image */}
            <div className="w-1/4 flex justify-center">
              <img
                src={"/OSD.png"}
                alt={"Meta"}
                className="h-12 w-12 rounded-full z-10" // Reduced size of the image
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-start w-1/2 pl-2"> {/* Adjusted padding left */}
             

              <h3 className="text-sm mb-1 text-right font-bold text-neutral-500 dark:text-neutral-500">
                {"Open Source Day"}
              </h3>
            </div>

            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-t from-transparent to-gray-200 z-0"> {/* Reduced width of line */}
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[1px] bg-gradient-to-t from-purple-500 via-orange-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>

          <div
            key={2}
            className="relative flex items-center pt-5 md:pt-10" 
          >
            {/* Left Column */}
            <div className="flex flex-col items-end w-1/2 pr-2"> {/* Adjusted padding right */}
              <h3 className="text-sm mb-1 text-right font-bold text-neutral-500 dark:text-neutral-500">
                {"Metamorphosis	"}
              </h3>
            </div>

            {/* Timeline Image */}
            <div className="w-1/4 flex justify-center">
              <img
                src={"/Meta.jpeg"}
                alt={"Meta"}
                className="h-12 w-12 rounded-full z-10" // Reduced size of the image
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-start w-1/2 pl-2"> {/* Adjusted padding left */}
              <p className="text-xs text-left text-gray-500">
                {"February"}
              </p>
            </div>

            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-t from-transparent to-gray-200 z-0"> {/* Reduced width of line */}
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[1px] bg-gradient-to-t from-purple-500 via-orange-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>


          <div
            key={1}
            className="relative flex items-center pt-5 md:pt-10" 
          >
            {/* Left Column */}
            <div className="flex flex-col items-end w-1/2 pr-2"> {/* Adjusted padding right */}
            <p className="text-xs text-left text-gray-500">
                {"April"}
              </p>
            </div>

            {/* Timeline Image */}
            <div className="w-1/4 flex justify-center">
              <img
                src={"/Techno.jpeg"}
                alt={"Meta"}
                className="h-12 w-12 rounded-full z-10" // Reduced size of the image
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-start w-1/2 pl-2"> {/* Adjusted padding left */}
             

              <h3 className="text-sm mb-1 text-right font-bold text-neutral-500 dark:text-neutral-500">
                {"Technotweet"}
              </h3>
            </div>

            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-t from-transparent to-gray-200 z-0"> {/* Reduced width of line */}
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[1px] bg-gradient-to-t from-purple-500 via-orange-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>


      </div>
    </div>
  );
};

// Ensure you have the correct export statement at the bottom of your file
export default Timeline; // This ensures proper export for your component
