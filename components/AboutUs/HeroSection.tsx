import React from "react";
import Navbar from "../Universal/Navbar";
import CustomHeroSection from "../Universal/CustomHeroSection";

const HeroSection = () => {
  const title = "Your trusted medical platform";
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
  return (
    <div className="bg-[#F5FAFF]  h-[400px] z-50">
      <Navbar />
      <CustomHeroSection title={title} content={content} />
    </div>
  );
};

export default HeroSection;
