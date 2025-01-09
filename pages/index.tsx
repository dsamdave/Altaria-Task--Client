
import HowItWorks from "@/components/HomeComps/HowItWorks";
import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {


  const events = [
    {
      id: 1,
      name: "Music Concert",
      address: "123 Main Street, San Francisco, CA",
      latitude: 37.7749,
      longitude: -122.4194,
      description: "A live music concert featuring local bands.",
    },
    {
      id: 2,
      name: "Art Exhibition",
      address: "456 Market Street, San Francisco, CA",
      latitude: 37.7849,
      longitude: -122.4094,
      description: "An exhibition showcasing modern art.",
    },
    {
      id: 3,
      name: "Tech Meetup",
      address: "789 Mission Street, San Francisco, CA",
      latitude: 37.7649,
      longitude: -122.4294,
      description: "A meetup for tech enthusiasts.",
    },
  ];


  return (
  <div className="main-wrapper">
    <Head><title>Homepage</title></Head>


    <div>
      
     
    </div>
    
    <HowItWorks />
 
  </div>
  );
}



