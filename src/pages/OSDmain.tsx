"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import wlugLogo from "../assets/wlug/wlug_white_logo_page-0001.jpg";
import grainImage from "../assets/grain.jpg";
import Icon from "@/components/Icon";
import HeroOrbit from "@/components/HeroOrbit";

import BlurIn from "@/components/ui/blur-in";

const OSDmain = () => {
  const handleAboutClick = () => {
    console.log("Want to know about us button clicked!");
    const aboutUsSection = document.getElementById("aboutus");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegisterClick = () => {
    console.log("Register button clicked!");
    const registerSection = document.getElementById("register");
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="h-full w-full 
        bg-gradient-to-b from-gray-900 to-zinc-800
        relative z-0 overflow-hidden
        py-32 md:py-48 lg:py-60"
    >
      <div className="bg-elements absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/* Rings */}
        <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-orange-300/5 shadow-[0_0_80px_inset] shadow-orange-300/5"></div>
        <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-orange-300/5 shadow-[0_0_80px_inset] shadow-orange-300/5"></div>
        <div className="absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-orange-300/5 shadow-[0_0_80px_inset] shadow-orange-300/5"></div>
        <div className="absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-orange-300/5 shadow-[0_0_80px_inset] shadow-orange-300/5"></div>
        {/* Stars Sparkles */}

        <HeroOrbit size={800} rotation={-72}>
          <Icon name="star" size={100}></Icon>
          <Icon name="sparkle" size={25}></Icon>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <Icon name="star" size={50}></Icon>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={95}>
          <Icon name="star" size={35}></Icon>
        </HeroOrbit>
        {/* ///sparkle */}
        <HeroOrbit size={430} rotation={-14}>
          <Icon name="sparkle" size={25}></Icon>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <Icon name="sparkle" size={15}></Icon>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <Icon name="sparkle" size={40}></Icon>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={154}>
          <Icon name="sparkle" size={25}></Icon>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-154}>
          <Icon name="sparkle" size={20}></Icon>
        </HeroOrbit>
        {/* circles */}
        <HeroOrbit size={710} rotation={85}>
          <div className="sparkle size-2 bg-orange-300/20 rounded-full "></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="sparkle size-2 bg-orange-300/20 rounded-full "></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="sparkle size-2 bg-orange-300/20 rounded-full "></div>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-120}>
          <div className="sparkle size-2 bg-orange-300/20 rounded-full "></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={wlugLogo}
              alt="WLUG Logo"
              className=" h-[120px] w-[190px] rounded-2xl shadow-lg "
            />
          </motion.div>
          <motion.div>
            <BlurIn
              word="Celebrates"
              className=" text-xl tracking-wide text-gray-300 p-2 m-2"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center "
          >
            {/* <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="font-righteous text-6xl lg:text-9xl text-orange-500 font-bold mt-2"
            >
              OPEN SOURCE DAY
            </motion.div> */}
          </motion.div>
          <BlurIn
            word="Open Source Day"
            className="font-righteous font-bold text-6xl lg:text-9xl text-orange-500 mt-2"
          />
          <BlurIn
            word="For the love of open source ❤️"
            className=" font-md p-2 mt-2 text-xl tracking-wide text-gray-300"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-8 gap-5 z-10">
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAboutClick}
            className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 h-12 w-48 rounded-xl z-10 focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label="Learn more about us"
          >
            <span className="font-semibold">🐧</span>
            <span className="text-white">Want to know about us?</span>
          </motion.button>

          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRegisterClick}
            className="inline-flex items-center justify-center gap-2 border border-white px-6 h-12 w-48 rounded-xl bg-white text-black font-semibold focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label="Register for the event"
            style={{ zIndex: 10 }}
          >
            <span>👾</span>
            <span className="font-semibold">REGISTER</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default OSDmain;
