"use client"; // Since this component interacts with the browser (mouse events), it should be a client component.

import { useEffect, useState } from "react";

export default function OrangeBall() {
  const [ballPosition, setBallPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  return (
    <div
      style={{
        top: `${ballPosition.y}px`, // Center the ball vertically
        left: `${ballPosition.x}px`, // Center the ball horizontally
        height: "300px", // Ball size
        width: "300px", // Ball size
        borderRadius: "50%",
        background: "linear-gradient(to top right, #ff2d03, #ff5c0b)",
        filter: "blur(30px)",
        zIndex: -1, // Ensure it stays behind the content
        pointerEvents: "none", // Allows interaction with other elements
      }}
    />
  );
}
