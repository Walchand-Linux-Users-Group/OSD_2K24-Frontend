"use client";  // Marking this as a Client Component

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import TimeLine from "../components/ui/TimeLine"; // Adjust the relative path based on the folder structure

const AboutUS = () => {
  const imageRefs = useRef<HTMLDivElement[]>([]);

  // Array of image paths
  const images = [
    "/wlug1.svg",
    "/wlug1.svg"
  ];

  
  

  return (

    <>
    <h1 className="mt-10 text-4xl font-bold text-center">About us</h1>
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full w-full relative">

      <div className="flex-1 lg:h-full h-auto flex justify-center items-center lg:mt-0 mt-10">
  {/* Overlapping images (absolute on mobile) */}
    
    <img src="/wlug1.svg" className=""/>
  
</div>


        {/* Text Content Section */}
        <div className="flex-1 lg:mt-10 mt-20 lg:mr-10 flex flex-col justify-start text-center lg:text-left px-5 lg:px-10">
          <h1 className="text-gray-700 text-2xl lg:text-3xl font-bold text-center tracking-wide leading-snug">
            Walchand Linux Users' Group
          </h1>

          <p className="text-gray-700 mt-4 mb-10 text-sm lg:text-base text-justify">
            We are a Club of Linux and Open Source Enthusiasts established in 2003 from Walchand College of Engineering, Sangli who actively takes part in training students with limited knowledge of Open Source to fully fledged Open Source developers. We conduct various activities throughout the year to promote Open Source technologies including talks, discussions, bootcamps, and competitions.
          </p>

          <h3 className="text-center font-bold text-gray-600 text-2xl">Our Events</h3>

          {/* <h2 className="text-black text-2xl lg:text-3xl">Our Events</h2> */}

          {/* Timeline */}
          {/* <div className="flex justify-center lg:justify-start"> */}
            {/* <Timeline className="w-full" /> */}
          {/* </div> */}
          <TimeLine/>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUS;
