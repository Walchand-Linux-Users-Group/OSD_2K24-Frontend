import React from "react";
import wlugLogo from "../assets/wlug/wlug_white_logo_page-0001.jpg";
import Image from "next/image";
import grainImage from "../assets/grain.jpg";
import Icon from "@/components/Icon";
import HeroOrbit from "@/components/HeroOrbit";

const OSDmain = () => {
  // Handler for the first button
  const handleAboutClick = () => {
    console.log("Want to know about us button clicked!");
  };

  // Handler for the second button
  const handleRegisterClick = () => {
    console.log("Register button clicked!");
  };

  return (
    <div
      className="h-full w-full 
        bg-gradient-to-b from-gray-900 to-zinc-600
        relative z-0 overflow-hidden
        py-32 md:py-48 lg:py-60"
    >
      <div className=" absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
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
          <Image
            src={wlugLogo}
            alt="WLUG Logo"
            className="w-[100px] h-[100px]"
          />
          <div className="mt-4 bg-gray-400 border border-gray-300 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 shadow-lg shadow-green-300 w-2.5 h-2.5 rounded-full"></div>
            <div className="text-sm font-medium text-gray-800">
              Presents the auspicious event
            </div>
          </div>

          <div className="text-center mt-4">
            <h1 className="font-righteous text-xl tracking-wide text-gray-300">
              For the love of open source
            </h1>
            <div className="font-righteous text-6xl text-orange-500 font-bold mt-2">
              OPEN SOURCE DAY
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
          velit!
        </p>

        <div className="flex flex-col items-center mt-8 gap-5 z-10">
          <button
            onClick={handleAboutClick}
            className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 h-12 w-48 rounded-xl z-10 focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label="Learn more about us"
          >
            <span className="font-semibold">🐧</span>
            <span className="text-white">Want to know about us?</span>
          </button>
          <button
            onClick={handleRegisterClick}
            className="inline-flex items-center justify-center gap-2 border border-white px-6 h-12 w-48 rounded-xl bg-white text-black font-semibold focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label="Register for the event"
            style={{ zIndex: 10 }} // Ensure this button is above other elements
          >
            <span>👾</span>
            <span className="font-semibold">REGISTER</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OSDmain;