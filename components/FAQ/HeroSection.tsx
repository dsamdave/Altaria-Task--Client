import React from 'react'
import CustomHeroSection from '../Universal/CustomHeroSection';
import Navbar from '../Universal/Navbar';

const HeroSection = () => {
    const title = "Frequently Asked Questions";
    const content =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
    return (
      <div className="bg-[#F5FAFF]  h-[400px] z-50">
        <Navbar />
        <CustomHeroSection title={title} content={content} />
      </div>
    );
}

export default HeroSection
