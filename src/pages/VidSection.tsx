import Gooey from "@/components/sunnysundown/Gooey";
import React from "react";

const VidSection = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      {/* Gooey component in the top right corner */}
      <div className="absolute top-10 right-80">
        <Gooey />
      </div>

      {/* Video container */}
      <div className="w-[90vw] lg:w-[70vw] aspect-video border-2 border-orange-500 rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-800 via-gray-700 to-gray-900 z-50">
        {/* Video element with border directly on the video */}
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/video/OSD_2024.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gooey component in the bottom left corner */}
      <div className="absolute bottom-250 left-0 mb-4 ml-4">
        <Gooey />
      </div>
    </div>
  );
};

export default VidSection;
