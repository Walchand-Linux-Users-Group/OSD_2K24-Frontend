"use client";
import { useRef, useState } from "react";
import { User, Mail, Phone, Book } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Gooey from "@/components/sunnysundown/Gooey";
import Swal from "sweetalert2";
import IconCloud from "@/components/ui/icon-cloud";
import { BiChevronDown } from "react-icons/bi";

const IconCludMine = () => {
    return (
        <motion.div className="w-full lg:w-1/2 h-full flex justify-center items-center p-6 lg:p-12">
            <IconCloud
                iconSlugs={[
                    "opensourceinitiative",
                    "ubuntu",
                    "archlinux",
                    "linuxmint",
                    "fedora",
                    "debian",
                    "redhat",
                    "centos",
                    "kubernetes",
                    "amazonaws",
                    "terraform",
                    "nginx",
                    "docker",
                    "git",
                    "jira",
                    "github",
                    "gitlab",
                    "visualstudiocode",
                    "sonarqube",
                    "jenkins",
                    "jfrog",
                    "eks",
                ]}
            />
        </motion.div>
    );
};

const Dropdown = ({
    label,
    selectedItem,
    options,
    handleItemClick,
}: {
    label: string;
    selectedItem: string;
    options: string[];
    handleItemClick: (item: string) => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative z-50 w-full">
            <div
                className="relative cursor-pointer bg-transparent border border-white rounded-md pl-10 pr-3 py-3 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7F50] transition duration-150 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiChevronDown className="h-5 w-5 text-gray-600" />
                </div>
                <span
                    className={`block w-full text-gray-700 bg-transparent placeholder-gray-500 ${
                        selectedItem === "Select Year" ? "text-gray-500" : ""
                    }`}
                >
                    {selectedItem}
                </span>
            </div>
            {isOpen && (
                <div className="absolute z-50 mt-1 w-full bg-black/10 backdrop-blur-sm rounded-md shadow-lg max-h-32 overflow-auto">
                    <div className="py-1">
                        {options.map((item, index) => (
                            <div
                                key={index}
                                className="block px-4 py-2 text-sm text-gray-900 cursor-pointer hover:bg-black/20"
                                onClick={() => {
                                    handleItemClick(item);
                                    setIsOpen(false);
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const Register = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { amount: 0.2 });
    const [yearOfStudy, setYearOfStudy] = useState("Select Year");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        collegeName: "",
        yearOfStudy: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleYearClick = (selectedYear: string) => {
        setYearOfStudy(selectedYear);
        setFormData((prevData) => ({
            ...prevData,
            yearOfStudy: selectedYear,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Create a FormData object to handle multipart form data
        const formDataToSubmit = new FormData();
        for (const key in formData) {
            formDataToSubmit.append(
                key,
                formData[key as keyof typeof formData]
            );
        }

        try {
            const response = await fetch(
                "https://osd-backend-4icu.onrender.com/user/registration",
                {
                    method: "POST",
                    body: formDataToSubmit, // Directly use the FormData object
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            Swal.fire({
                title: "Success!",
                text: "Registration successful!",
                icon: "success",
                confirmButtonColor: "#FF7F50",
                background: "white",
                color: "black",
            });
        } catch (error: any) {
            Swal.fire({
                title: "Error!",
                text: error.message || "An error occurred",
                icon: "error",
                confirmButtonColor: "#FF7F50",
                background: "white",
                color: "black",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-16 px-4 sm:px-8 lg:px-10 relative overflow-hidden bg-gradient-to-b from-[#faf8f6] via-orange-100 to-[#faf8f6]">
            <motion.div
                ref={containerRef}
                className="w-full relative max-w-7xl mx-auto bg-black/5 backdrop-blur-lg rounded-2xl shadow-2xl z-10 overflow-hidden"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="lg:flex py-2">
                    <IconCludMine />
                    <motion.div className="w-full lg:w-1/2 p-6 py-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white">
                        <div className="mx-auto">
                            <motion.h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                                Register Now
                            </motion.h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {[
                                    {
                                        name: "name",
                                        label: "Full Name",
                                        icon: User,
                                        type: "text",
                                    },
                                    {
                                        name: "email",
                                        label: "Email address",
                                        icon: Mail,
                                        type: "email",
                                    },
                                    {
                                        name: "phone",
                                        label: "Phone Number",
                                        icon: Phone,
                                        type: "tel",
                                    },
                                    {
                                        name: "collegeName",
                                        label: "College Name",
                                        icon: Book,
                                        type: "text",
                                    },
                                ].map((field) => (
                                    <motion.div key={field.name}>
                                        <label
                                            htmlFor={field.name}
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            {field.label}
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <field.icon className="h-5 w-5 text-gray-600" />
                                            </div>
                                            <input
                                                id={field.name}
                                                name={field.name}
                                                type={field.type}
                                                required
                                                className="block w-full pl-10 pr-3 py-3 border border-white rounded-md leading-5 text-gray-700 bg-transparent placeholder-gray-500 focus:outline-none md:text-lg transition duration-150 ease-in-out"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </motion.div>
                                ))}

                                <motion.div className="z-10 relative">
                                    <Dropdown
                                        label="Year of Study"
                                        selectedItem={yearOfStudy}
                                        options={[
                                            "First Year",
                                            "Second Year",
                                            "Third Year",
                                            "Fourth Year",
                                        ]}
                                        handleItemClick={handleYearClick}
                                    />
                                </motion.div>
                                <motion.div>
                                    <button
                                        className="w-full text-lg z-0 flex justify-center py-3 px-4 border border-transparent font-medium rounded-md text-white bg-orange-600 hover:bg-orange-600  transition duration-150 ease-in-out transform hover:scale-105"
                                        disabled={loading}
                                    >
                                        {loading ? "Loading..." : "Register"}
                                    </button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            {/* <Gooey /> */}
        </div>
    );
};

export default Register;
