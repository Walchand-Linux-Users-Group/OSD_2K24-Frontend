"use client";  // Marking this as a Client Component

import React, { useEffect, useState } from "react";
import TimeLine from "../components/ui/TimeLine"; // Adjust the relative path based on the folder structure
import Layout from "../components/ui/bgLayout";

const AboutUS = () => {
  // Array of image paths
  const images = [
    "/wlug3.svg",
    "/wlug2.svg",
    "/wlug1.svg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index
  const [fadeClass, setFadeClass] = useState("opacity-100"); // State for fade class

  useEffect(() => {
    const totalImages = images.length;

    // Function to change the image
    const changeImage = () => {
      setFadeClass("opacity-0"); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages); // Change image
        setFadeClass("opacity-100"); // Start fading in
      }, 1000); // Match the timeout with the fade duration
    };

    // Set interval for changing images
    const interval = setInterval(changeImage, 15000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]); // Depend on the length of images to avoid stale closure

  return (
    <>
    <Layout>
      <h1 className="mt-10 text-4xl font-bold text-center">About us</h1>
      <div className="min-h-screen w-full relative overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full w-full relative">
          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center h-full lg:h-auto">
            {/* Current image with fade effect */}
            <img
              src={images[currentImageIndex]}
              className={`w-[512px] h-[512px] lg:w-[512px] lg:h-[512px] object-contain transition-opacity duration-500 ${fadeClass}`}
              alt="Walchand Linux Users' Group"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex-1 lg:mt-10 mt-0 lg:mr-10 flex flex-col justify-start text-center lg:text-left px-5 lg:px-10">
            <h1 className="text-gray-700 text-2xl lg:text-3xl font-bold text-center tracking-wide leading-snug">
              Walchand Linux Users' Group
            </h1>

            <p className="text-gray-700 mt-4 mb-10 text-sm lg:text-base text-justify">
              We are a Club of Linux and Open Source Enthusiasts established in 2003 from Walchand College of Engineering, Sangli who actively takes part in training students with limited knowledge of Open Source to fully fledged Open Source developers. We conduct various activities throughout the year to promote Open Source technologies including talks, discussions, bootcamps, and competitions.
            </p>

            <h3 className="text-center font-bold text-gray-600 text-2xl">Our Events</h3>

            <TimeLine />
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default AboutUS;
