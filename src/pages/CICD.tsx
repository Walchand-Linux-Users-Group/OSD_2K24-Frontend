"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Server, Terminal } from "lucide-react";
import {
    FaJenkins,
    FaAws,
    FaCube,
    FaCode,
    FaDocker,
    FaGit,
} from "react-icons/fa";

// Define technology icons and names
const techs = [
    { name: "Git", Icon: FaGit },
    { name: "GitHub", Icon: Github },
    { name: "Jenkins", Icon: FaJenkins },
    { name: "JFrog", Icon: FaCube },
    { name: "Docker", Icon: FaDocker },
    { name: "Terraform", Icon: FaCode },
    { name: "Amazon EKS", Icon: FaAws },
    { name: "SonarQube", Icon: Server },
];

// Container animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

// Item animation (icons)
const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80 },
    },
};

// Connecting line animation
const lineVariants = {
    hidden: { width: 0 },
    visible: {
        width: "100%",
        transition: { duration: 0.5, ease: "easeInOut" },
    },
};

const CICD = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-12">
                CI/CD Pipeline
            </h1>

            <div className="bg-gray-800 rounded-xl shadow-xl max-w-7xl w-full flex justify-center items-center p-8 md:p-12">
                <motion.div
                    className="relative flex justify-between items-center w-full max-w-5xl flex-wrap gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {techs.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center space-y-2"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="p-5 bg-gray-700 rounded-full shadow-md flex items-center justify-center"
                                whileHover={{ scale: 1.15, rotate: 20 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                            >
                                <tech.Icon className="h-10 w-10 text-blue-400" />
                            </motion.div>

                            {index < techs.length - 1 && (
                                <motion.div
                                    className="absolute top-1/2 left-full h-2 bg-blue-400"
                                    style={{ width: "80px" }}
                                    variants={lineVariants}
                                />
                            )}

                            <p className="text-lg text-gray-300 font-semibold">
                                {tech.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default CICD;
