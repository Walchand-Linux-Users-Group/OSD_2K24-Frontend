import IconCloud from "@/components/ui/icon-cloud";
import React from "react";

const Register = () => {
  return (
    <div className="h-screen w-full">
      <div className="h-full w-full flex justify-center items-center">
        <IconCloud
          iconSlugs={[
            "typescript",
            "javascript",
            "react",
            "html5",
            "css3",
            "ubuntu",
            "archlinux",
            "linuxmint",
            "fedora",
            "debian",
            "redhat",
            "centos",
            "nodedotjs",
            "express",
            "nextdotjs",
            "kubernetes",  // Kubernetes
            "amazonaws",   // AWS
            "terraform",   // Terraform
            "nginx",
            "docker",      // Docker
            "git",         // Git
            "jira",
            "github",      // GitHub
            "gitlab",
            "visualstudiocode",
            "sonarqube",   // SonarQube
            "jenkins",     // Jenkins
            "jfrog",       // JFrog
            "eks"          // Amazon EKS (ensure this slug is correct or supported)
          ]}
        />
      </div>
    </div>
  );
};

export default Register;
