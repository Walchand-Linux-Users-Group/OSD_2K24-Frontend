"use client";

import React, { useState, useCallback, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Git from "../pages/Git";
import Github from "../pages/Github";
import CICD from "../pages/CICD";
import Register from "../pages/Register";
import VidSection from "@/pages/VidSection";
import OSDmain from "@/pages/OSDmain";
import { HomeIcon, Info, Presentation, UserPlus } from "lucide-react";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      targetId: "home",
      icon: <HomeIcon className="w-4 h-4" />,
    },
    {
      name: "Sessions",
      targetId: "sessions",
      icon: <Presentation className="w-4 h-4" />,
    },
    {
      name: "About Us",
      targetId: "aboutus",
      icon: <Info className="w-4 h-4" />,
    },
  ];

  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = scrollY.get();
    if (currentScrollY < 50) {
      setVisible(false);
    } else {
      setVisible(currentScrollY < lastScrollY);
    }
    setLastScrollY(currentScrollY);
  }, [scrollY, lastScrollY]);

  useMotionValueEvent(scrollY, "change", handleScroll);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.targetId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const handleNavClick = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="bg-[#faf8f6] dark:bg-black dark:text-white text-black overflow-x-hidden overflow-y-auto">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4"
          )}
        >
          {navItems.map((navItem, idx) => (
            <button
              key={`nav-${idx}`}
              onClick={() => handleNavClick(navItem.targetId)}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
                activeSection === navItem.targetId &&
                  "text-orange-500 dark:text-orange-300"
              )}
            >
              <span className="block">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </button>
          ))}
          <button
            onClick={() => handleNavClick("register")}
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
          >
            <span className="sm:inline">Register</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px" />
          </button>
        </motion.div>
      </AnimatePresence>

      <div id="home">
        <OSDmain />
      </div>
      <VidSection />
      <div id="sessions">
        <Git />
        {/* <Github /> */}

        <CICD />
      </div>
      <div id="register">
        <Register />
      </div>
      <div
        id="aboutus"
        className="h-[80vh] w-full bg-gradient-to-b from-stone-900 to-zinc-600"
      >
        <div>About Us</div>
      </div>
    </div>
  );
}
