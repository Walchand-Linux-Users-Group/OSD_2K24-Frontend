"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import { FileJson2 } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; color?: string }
>(({ className, children, color }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
      style={{ backgroundColor: color || "white" }}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);

  const centerIconRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative grid w-full max-w-[500px] grid-cols-3 grid-rows-3 gap-4 items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      {/* Arrange circles in a grid with the central JSON icon */}
      <Circle ref={div1Ref} color="#3f3f46">
        {" "}
        {/* zinc-800 */}
        <Icons.user />
      </Circle>
      <Circle ref={div2Ref} color="#3f3f46">
        <Icons.user />
      </Circle>
      <Circle ref={div3Ref} color="#3f3f46">
        <Icons.user />
      </Circle>
      <Circle ref={div4Ref} color="#3f3f46">
        <Icons.user />
      </Circle>

      {/* Central Circle for FileJson2 Icon */}
      <Circle ref={centerIconRef} color="#ff5e00">
        {" "}
        {/* Orange color for JSON */}
        <FileJson2 size={24} color="white" />
      </Circle>

      <Circle ref={div5Ref} color="#3f3f46">
        <Icons.user />
      </Circle>
      <Circle ref={div6Ref} color="#3f3f46">
        <Icons.user />
      </Circle>
      <Circle ref={div7Ref} color="#3f3f46">
        <Icons.user />
      </Circle>
      <Circle ref={div8Ref} color="#3f3f46">
        <Icons.user />
      </Circle>

      {/* Animated Beams to connect user icons to the central JSON icon */}
      {/* (Beams remain as in the original code) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={centerIconRef}
        startYOffset={10}
        endYOffset={0}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={centerIconRef}
        startYOffset={-10}
        endYOffset={0}
        curvature={20}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={centerIconRef}
        startYOffset={10}
        endYOffset={0}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={centerIconRef}
        startYOffset={-10}
        endYOffset={0}
        curvature={20}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={centerIconRef}
        startYOffset={10}
        endYOffset={0}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={centerIconRef}
        startYOffset={-10}
        endYOffset={0}
        curvature={20}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={centerIconRef}
        startYOffset={10}
        endYOffset={0}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={centerIconRef}
        startYOffset={-10}
        endYOffset={0}
        curvature={20}
        reverse
      />
    </div>
  );
}

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff" // Change stroke to white
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
