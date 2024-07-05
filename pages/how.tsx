import HeroSection from '@/components/HowItWorks/HeroSection'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import Head from 'next/head'
import React from 'react'

const how = () => {
  return (
    <div>
         <Head><title>How It Works</title></Head>
        <HeroSection/>
        <HowItWorks/>
      
    </div>
  )
}

export default how
