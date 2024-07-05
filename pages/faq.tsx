import FAQ from '@/components/FAQ/FAQ'
import HeroSection from '@/components/FAQ/HeroSection'
import Head from 'next/head'
import React from 'react'

const faq = () => {
  return (
    <div>
       <Head><title>Faq</title></Head>
      <HeroSection/>
      <FAQ/>
    </div>
  )
}

export default faq
