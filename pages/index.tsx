import { Inter } from "next/font/google";
import HeroSection from "@/components/Homepage/HeroSection";
import BlessedPatients from "@/components/Homepage/BlessedPatients";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";
import BestPlatform from "@/components/Homepage/BestPlatform";
import PlatformFeatures from "@/components/Homepage/PlatformFeatures";
import Testimonials from "@/components/Homepage/Testimonials";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div>
    <Head><title>Homepage</title></Head>
   
    <HeroSection />
    <BlessedPatients />
    <WhyChooseUs />
    {/* <BestPlatform/> */}
    {/* <PlatformFeatures/> */}
    <Testimonials/>
  </div>
  );
}
