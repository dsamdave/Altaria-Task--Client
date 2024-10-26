import React from "react";
import Navbar from "../Universal/Navbar";
import CustomHeroSection from "../Universal/CustomHeroSection";

const HeroSection = () => {
  const title = "Your trusted medical platform";
  const content =
    "Get expert healthcare advice from the comfort of your home with ExpactDoc. Your health, our priority—anytime, anywhere";
  return (
    <div className="bg-[#F5FAFF]  h-[400px] z-50">
      <Navbar />
      <CustomHeroSection title={title} content={content} />
    </div>
  );
};

export default HeroSection;
