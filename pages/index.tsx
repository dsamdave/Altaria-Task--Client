import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Universal/Navbar";
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
  <div className="">
    <Head><title>Homepage</title></Head>
    {/* <Navbar/> */}
    <HeroSection />
    <BlessedPatients />
    <WhyChooseUs />
    <BestPlatform/>
    <PlatformFeatures/>
    <Testimonials/>
  </div>
  );
}
