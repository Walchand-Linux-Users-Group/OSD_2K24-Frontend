"use client";  // Marking this as a Client Component

import React, { useEffect, useState } from "react";
import TimeLine from "../components/ui/TimeLine"; 

const AboutUS = () => {
  // Array of image paths
  const images = [
    "/wlug3.svg",
    "/wlug2.svg",
    "/wlug1.svg",
    "/wlug4.svg"
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
    const interval = setInterval(changeImage, 8000); // Change image every 15 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]); // Depend on the length of images to avoid stale closure

  return (
    <>
      {/* <BgLayout> */}
        <h1 className="mt-10 text-4xl mb-10 font-bold text-center">About us</h1>
        <div className="min-h-screen w-full relative  overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-5 h-full w-full relative">
            {/* Image Section with Glassmorphism and Border */}
            <div className="flex-1 flex justify-center rounded-3xl items-center h-full lg:h-auto lg:ml-10 mx-5 backdrop-blur-md bg-white bg-opacity-20 border-2 border-orange-500 border-opacity-40 shadow-lg"> 
              {/* Current image with fade effect */}
              <img
                src={images[currentImageIndex]}
                className={`w-full h-full max-w-[628px] object-contain transition-opacity lg:p-0 p-5 duration-500 ${fadeClass}`} // Use max-width for consistency
                alt="Walchand Linux Users' Group"
              />
            </div>

            {/* Text Content Section with Glassmorphism and Border */}
            <div className="flex-1 flex bg-white bg-opacity-20 backdrop-blur-md border-2 border-orange-500 border-opacity-40 shadow-lg rounded-3xl flex-col justify-start text-center lg:text-left px-5 lg:mr-10 lg:mt-0 mt-10 mx-5">
              <h1 className="text-gray-700 pt-10 text-2xl lg:text-3xl font-bold text-center tracking-wide leading-snug">
                Walchand Linux Users' Group
              </h1>

              <p className="text-gray-700 mt-4 mb-10 lg:mx-10 text-sm lg:text-base text-justify">
                We are a Club of Linux and Open Source Enthusiasts established in 2003 from Walchand College of Engineering, Sangli who actively takes part in training students with limited knowledge of Open Source to fully fledged Open Source developers. We conduct various activities throughout the year to promote Open Source technologies including talks, discussions, bootcamps, and competitions.
              </p>

              <h3 className="text-center font-bold text-gray-600 text-2xl">Our Events</h3>

              <TimeLine />
            </div>
          </div>
        </div>
      {/* </BgLayout> */}
    </>
  );
};

export default AboutUS;
