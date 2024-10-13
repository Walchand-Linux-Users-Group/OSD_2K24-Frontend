"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GitIcon from "@/assets/techlogos/git.png";
import GithubIcon from "@/assets/techlogos/github.png";
import JenkinsIcon from "@/assets/techlogos/jenkins.png";
import JFrogIcon from "@/assets/techlogos/jfrog.svg";
import DockerIcon from "@/assets/techlogos/docker.png";
import TerraformIcon from "@/assets/techlogos/terraform.png";
import EKSIcon from "@/assets/techlogos/amazoneks.png";
import SonarQubeIcon from "@/assets/techlogos/sonarqube.png";
import Image from "next/image";

// Define technology icons and names
const techs = [
    { name: "Jenkins", Icon: JenkinsIcon },
    { name: "JFrog", Icon: JFrogIcon },
    { name: "Docker", Icon: DockerIcon },
    { name: "Terraform", Icon: TerraformIcon },
    { name: "Amazon EKS", Icon: EKSIcon },
    { name: "SonarQube", Icon: SonarQubeIcon },
];

// Item animation (icons)
const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80 },
    },
};

// Line animation (vertical)
const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
        scaleY: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
    },
};
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
    hover: {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
    },
};

const CICD = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-8 my-12">
            <div className="w-full flex flex-col bg-gradient-to-b from-white via-blue-50 to-white rounded-[20px] shadow-xl max-w-7xl py-8 p-2">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Learn CI/CD</h1>

                <div className="rounded-xl w-full flex flex-col lg:flex-row justify-center items-center p-8 md:p-12">
                    <div className="relative flex flex-col items-center w-full lg:w-1/3 mb-12 lg:mb-0">
                        {techs.map((tech, index) => (
                            <TechItem
                                key={index}
                                Icon={tech.Icon}
                                name={tech.name}
                                showLine={index < techs.length - 1}
                            />
                        ))}
                    </div>
                    <div className="space-y-12">
                        <SessionCard />
                        <FundamentalsCard />
                        <AdvancedTopicsCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

interface TechItemProps {
    Icon: string;
    name: string;
    showLine: boolean;
}
// Component for individual tech items with animations
const TechItem = ({ Icon, name, showLine }: TechItemProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center space-y-2"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div className="flex flex-col items-center justify-center space-y-1">
                <motion.div
                    className="p-4 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex flex-col space-y-2 items-center justify-center w-[170px] h-[170px] cursor-pointer z-10"
                    whileHover={{ scale: 1.1, rotate: 40 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                >
                    <Image src={Icon} alt={name} width={80} height={80} />
                    <p className="text-sm text-center w-full text-gray-900 font-semibold">
                        {name}
                    </p>
                </motion.div>

                {showLine && (
                    <motion.div
                        className="bg-orange-600 w-1 h-8 block"
                        style={{ originY: 0 }}
                        variants={lineVariants}
                    />
                )}
            </motion.div>
        </motion.div>
    );
};

const SessionCard = () => (
    <motion.div
        className="backdrop-blur-lg max-w-[400px] min-w-[270px] bg-white/30 border border-gray-300 rounded-2xl shadow-xl overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
    >
        <div className="p-6">
            <div className="mb-6">
                <div className="bg-gradient-to-r from-[#29b1ff] to-[#00FFF1] rounded-lg p-1">
                    <div className="bg-white rounded-md p-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#29b1ff] to-[#00FFF1] text-center">
                            Session 02
                        </h2>
                    </div>
                </div>
            </div>
            <p className="text-gray-600 mb-6">
                Dive into the world of Continuous Integration and Continuous Delivery (CI/CD), exploring its importance, benefits, and key principles.
            </p>
            <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Introduction to CI/CD concepts
                </li>
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Importance and benefits of CI/CD
                </li>
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Key principles of CI and CD
                </li>
            </ul>
        </div>
    </motion.div>
);

const FundamentalsCard = () => (
    <motion.div
        className="backdrop-blur-lg max-w-[400px] min-w-[270px] bg-white/30 border border-gray-300 rounded-2xl shadow-xl overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
    >
        <div className="p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                CI/CD Fundamentals
            </h2>
            <p className="text-gray-600 mb-6">
                Understand the core concepts of Continuous Integration and Continuous Delivery, and their differences.
            </p>
            <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Continuous Integration (CI) definition and principles
                </li>
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Continuous Delivery (CD) definition and principles
                </li>
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Differences between Continuous Delivery and Continuous Deployment
                </li>
            </ul>
        </div>
    </motion.div>
);

const AdvancedTopicsCard = () => (
    <motion.div
        className="backdrop-blur-lg max-w-[400px] min-w-[270px] bg-white/30 border border-gray-300 rounded-2xl shadow-xl overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
    >
        <div className="p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Advanced CI/CD Topics
            </h2>
            <p className="text-gray-600 mb-6">
                Explore advanced concepts in CI/CD, including tools, architecture, and practical implementation.
            </p>
            <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tools for CI/CD: Git, GitHub, Jenkins, JFrog, Docker, Terraform, Amazon EKS, SonarQube
                </li>
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    CI/CD Architecture and pipeline building
                </li>
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    CI/CD for Microservices Architecture (Optional)
                </li>
            </ul>
        </div>
    </motion.div>
);

export default CICD;