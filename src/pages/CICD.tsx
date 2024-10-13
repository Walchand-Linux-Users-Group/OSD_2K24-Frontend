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
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import SonarQubeIcon from "@/assets/techlogos/sonarqube.png";
import Image from "next/image";

// Define technology icons and names
const techs = [
    { name: "Jenkins", Icon: JenkinsIcon },
    { name: "JFrog", Icon: JFrogIcon },
    { name: "Docker", Icon: DockerIcon },
    { name: "Terraform", Icon: TerraformIcon },
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
        <div className="min-h-screen flex flex-col justify- items-center p-8 my-12">
            <div className="w-full flex flex-col  bg-gradient-to-b from-white via-blue-50 to-white p-8 rounded-[20px] shadow-xl max-w-7xl">
                <h1 className="text-2xl mb-2 text-center">Learn</h1>

                <div className="rounded-xl w-fit flex flex-col md:flex-row justify-center items-center p-8 md:p-12">
                    <div className="relative flex flex-col items-center w-full">
                        {techs.map((tech, index) => (
                            <TechItem
                                key={index}
                                Icon={tech.Icon}
                                name={tech.name}
                                showLine={index < techs.length - 1}
                            />
                        ))}
                    </div>
                    <div className="mt-12 space-y-12">
                        <motion.div
                            className="backdrop-blur-lg bg-white/30 border border-gray-300 rounded-2xl shadow-xl overflow-hidden"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <div className="p-6">
                                <div className="mb-6">
                                    <NeonGradientCard
                                        className="max-w-sm mx-auto"
                                        neonColors={{
                                            firstColor: "#29b1ff",
                                            secondColor: "#00FFF1",
                                        }}
                                    >
                                        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#29b1ff] from-35% to-[#00FFF1] bg-clip-text text-center text-5xl sm:text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                                            Session 02
                                        </span>
                                    </NeonGradientCard>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Dive into the workings of continuous
                                    integration and continuous deployment, and
                                    how they streamline the development process.
                                </p>
                                <ul className="text-center text-gray-700">
                                    <li className="mb-2">
                                        Overview of CI/CD concepts
                                    </li>
                                    <li className="mb-2">
                                        Automating tests and deployments
                                    </li>
                                    <li>Integrating DevOps tools</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            className="backdrop-blur-lg bg-white/30 border border-gray-300 rounded-2xl shadow-xl overflow-hidden"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <div className="p-6">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                                    Advanced CI/CD Tools
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Learn about advanced tools used in CI/CD
                                    pipelines for monitoring, logging, and
                                    scaling your software development workflow.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Learn about advanced tools used in CI/CD
                                    pipelines for monitoring, logging, and
                                    scaling your software development workflow.
                                </p>
                            </div>
                        </motion.div>
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
                    className="p-8 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex flex-col space-y-2 items-center justify-center w-[200px] h-[200px] cursor-pointer z-10"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                >
                    <Image src={Icon} alt={name} width={100} height={100} />
                    <p className="text-lg text-center w-full text-gray-900 font-semibold">
                        {name}
                    </p>
                </motion.div>

                {showLine && (
                    <motion.div
                        className="bg-orange-600 w-1 h-16 block"
                        style={{ originY: 0 }}
                        variants={lineVariants}
                    />
                )}
            </motion.div>
        </motion.div>
    );
};

export default CICD;
