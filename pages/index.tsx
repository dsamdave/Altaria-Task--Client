
import HowItWorks from "@/components/HomeComps/HowItWorks";

import TestimonialsComp from "@/components/HomeComps/TestimonialsComp";
import { url } from "inspector";
import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {



  return (
  <div className="main-wrapper">
    <Head><title>Homepage</title></Head>
    
    <HowItWorks />
 
  </div>
  );
}



