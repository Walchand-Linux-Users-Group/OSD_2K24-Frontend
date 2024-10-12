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
    { name: "Git", Icon: GitIcon },
    { name: "GitHub", Icon: GithubIcon },
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

const CICD = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-8 py-12">
            <h1 className="text-4xl text-center md:text-5xl font-extrabold text-gray-900">
                CI/CD Pipeline
            </h1>

            <div className="rounded-xl w-fit flex justify-center items-center p-8 md:p-12">
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
                    whileHover={{ scale: 1.15, rotate: 20 }}
                    transition={{
                        duration: 0.4,
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
