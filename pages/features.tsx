import Features from '@/components/Features/Features'
import HeroSection from '@/components/Features/HeroSection'
import Testimonials from '@/components/Homepage/Testimonials'
import Head from 'next/head'
import React from 'react'

const features = () => {
  return (
    <div>
        <Head><title>Features</title></Head>
      <HeroSection/>
      <Features/>
      <Testimonials/>
      
    </div>
  )
}

export default features
