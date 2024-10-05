"use client";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Confetti from "@/components/ui/confetti";
import IconCloud from "@/components/ui/icon-cloud";
import ParentComponent from "@/components/ui/ParentComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>home page</h1>
      <br/>
      <br/>
      <br/>
      <ParentComponent />
    
    {/* <Confetti /> */}
    {/* <IconCloud /> */}
    </>
  );
}

