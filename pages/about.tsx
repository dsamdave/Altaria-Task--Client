import About from '@/components/AboutUs/About'
import HeroSection from '@/components/AboutUs/HeroSection'
import WhyChooseUs from '@/components/Homepage/WhyChooseUs'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <div>
      <Head><title>About Us</title></Head>
      <HeroSection/>
      <WhyChooseUs/>
      <About/>
    </div>
  )
}

export default about
