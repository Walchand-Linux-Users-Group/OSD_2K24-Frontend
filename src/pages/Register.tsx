"use client";
import { useRef, useState } from "react";
import { User, Mail, Phone, Book } from "lucide-react";
import { motion, useInView } from "framer-motion";

import IconCloud from "@/components/ui/icon-cloud";
import { BiChevronDown } from "react-icons/bi";

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
    <div className="z-50">
      <div
        className=" cursor-pointer bg-transparent border border-white rounded-md pl-10 pr-3 py-3 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7F50] transition duration-150 ease-in-out"
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
        <div className="absolute z-50 mt-1 w-full bg-black/10 backdrop-blur-sm rounded-md shadow-lg">
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const handleYearClick = (selectedYear: string) => {
    setYearOfStudy(selectedYear);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 lg:px-10">
      <motion.div
        ref={containerRef}
        className="w-full relative max-w-7xl mx-auto bg-black/10 backdrop-blur-lg rounded-2xl shadow-2xl z-10 overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="lg:flex py-2">
          <motion.div
            className="w-full lg:w-1/2 h-full flex justify-center items-center p-6 lg:p-12"
            variants={itemVariants}
          >
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
          <motion.div
            className="w-full lg:w-1/2 p-6 lg:p-12 border-t lg:border-t-0 lg:border-l border-white"
            variants={itemVariants}
          >
            <div className="mx-auto">
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 mb-6"
                variants={itemVariants}
              >
                Register Now
              </motion.h2>
              <form className="space-y-6">
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
                  <motion.div key={field.name} variants={itemVariants}>
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
                      />
                    </div>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="z-10 relative ">
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

                <motion.div variants={itemVariants}>
                  <button className="w-full z-0 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF7F50] hover:bg-[#FF6347] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7F50] transition duration-150 ease-in-out transform hover:scale-105">
                    Register
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
