import { useRef } from "react";
import AnimatedBeam from "@/components/ui/animated-beam";
// Import images


const ParentComponent = () => {
  const containerRef = useRef(null);
  
  // Refs for the corner elements
  const leftRefs = [useRef(null), useRef(null), useRef(null)];
  const rightRefs = [useRef(null), useRef(null), useRef(null)];
  const centerRef = useRef(null);

  // Define spacing from the center
  const spacing = 100; // Increased spacing for better separation
  const verticalOffset = 20; // Additional offset to move the nodes a bit lower
  const centerTop = "60%"; // Center component vertical alignment

  // Curvature values for each beam
  const leftCurvatures = [40, 50, 60]; // Different curvature for left beams
  const rightCurvatures = [80, 70, 60]; // Different curvature for right beams

  // Images for each node
  // const nodeImages = [image1, image2, image3, image4, image5, image6];

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", height: "600px" }}>
      {/* Animated Beams */}
      {leftRefs.map((fromRef, index) => (
        <AnimatedBeam
          key={`left-${index}`}
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={centerRef}
          curvature={leftCurvatures[index]} // Unique curvature for each left beam
        />
      ))}
      {rightRefs.map((fromRef, index) => (
        <AnimatedBeam
          key={`right-${index}`}
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={centerRef}
          curvature={rightCurvatures[index]} // Unique curvature for each right beam
          reverse={true} // Reverse beams for right side
        />
      ))}

      {/* Left Components */}
      {leftRefs.map((ref, index) => (
        <div 
          key={index} 
          ref={ref} 
          style={{ 
            position: "absolute", 
            left: 50, 
            top: `calc(${centerTop} - ${spacing}px * ${index + 1} + ${verticalOffset}px)`, // Adjust position with spacing and offset
            width: "60px", // Set a width for the component
            height: "60px", // Set a height for the component
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)" // Add shadow for depth
          }}
        >
          <img 
            src='./image.png'
            alt={`Node ${index + 1}`} 
            style={{ 
              width: "100%", 
              height: "100%", 
              borderRadius: "50%", 
              objectFit: "cover" // Ensures the image covers the div while maintaining aspect ratio
            }} 
          />
        </div>
      ))}
      
      {/* Center Component */}
      <div 
        ref={centerRef} 
        style={{ 
          position: "absolute", 
          left: "50%", 
          top: "50%", 
          transform: "translate(-50%, -50%)", 
          borderRadius: "50%", // Make it circular
          width: "80px", // Set a width for the center component
          height: "80px", // Set a height for the center component
          backgroundColor: "#fff", // White background
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)", // Add shadow for depth
        }}
      >
        {/* Center Component */}
      </div>
      
      {/* Right Components */}
      {rightRefs.map((ref, index) => (
        <div 
          key={index} 
          ref={ref} 
          style={{ 
            position: "absolute", 
            left: "calc(100% - 150px)", // Adjust based on the width of your components
            top: `calc(${centerTop} - ${spacing}px * ${index + 1} + ${verticalOffset}px)`, // Adjust position with spacing and offset
            width: "60px", // Set a width for the component
            height: "60px", // Set a height for the component
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)" // Add shadow for depth
          }}
        >
          <img 
            src="./image.png" // Adjust index for right nodes
            alt={`Node ${index + leftRefs.length + 1}`} 
            style={{ 
              width: "100%", 
              height: "100%", 
              borderRadius: "50%", 
              objectFit: "cover" // Ensures the image covers the div while maintaining aspect ratio
            }} 
          />
        </div>
      ))}
    </div>
  );
};

export default ParentComponent;
