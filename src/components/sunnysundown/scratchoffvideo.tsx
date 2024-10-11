"use client";

import React, { useRef, useEffect, useState } from "react";

const ScratchOffVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isScratching, setIsScratching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match video size
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    // Fill the canvas with an overlay color
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Define the scratch effect
    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2, false);
      ctx.fill();
    };

    // Event handlers
    const handleMouseDown = (e: MouseEvent) => {
      setIsScratching(true);
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isScratching) return;
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseUp = () => {
      setIsScratching(false);
    };

    const handleTouchStart = (e: TouchEvent) => {
      setIsScratching(true);
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScratching) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    const handleTouchEnd = () => {
      setIsScratching(false);
    };

    // Add event listeners
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);

    // Clean up event listeners on component unmount
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isScratching]);

  return (
    <div style={{ position: "relative", width: "80vw", maxWidth: "800px" }}>
      <video ref={videoRef} autoPlay loop muted style={{ width: "100%" }}>
        <source
          src="https://www.youtube.com/watch?v=AFDYnd-XPa8"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          cursor: "crosshair",
        }}
      />
    </div>
  );
};

export default ScratchOffVideo;
