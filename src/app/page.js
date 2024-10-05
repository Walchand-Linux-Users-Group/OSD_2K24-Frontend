"use client";;
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Confetti from "@/components/ui/confetti";
import IconCloud from "@/components/ui/icon-cloud";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <h1>Home Page</h1>
    {/* <AnimatedBeam /> */}
    <Confetti />
    <IconCloud />
   </>
  );
}
