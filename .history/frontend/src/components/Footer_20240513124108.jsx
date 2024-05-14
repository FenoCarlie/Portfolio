import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa6";

function Footer() {
  const socialNets = [
    {
      icon: <FaLinkedin className="w-8 h-8 mb-4 text-yellowClaire" />,
      link: "www.linkedin.com/in/carlie-feno-516063240",
      name: "linkedin",
    },
    {
      icon: <FaGithub className="w-8 h-8 mb-4 text-yellowClaire" />,
      link: "https://github.com/FenoCarlie/",
      name: "github",
    },
    {
      icon: <FaFacebook className="w-8 h-8 mb-4 text-yellowClaire" />,
      link: "https://www.facebook.com/aidane.feno",
      name: "facebook",
    },
    {
      icon: <FaInstagram className="w-8 h-8 mb-4 text-yellowClaire" />,
      link: "https://www.instagram.com/carliefeno/",
      name: "instagram",
    },
  ];
  return (
    <div className="w-full bg-greyGlass">
      <div className="p-4 sm:px-10 lg:px-20 xl:px-30 flex items-center justify-between">
        <p className="text-grey1">
          This page was coded in React.js, CSS, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default Footer;