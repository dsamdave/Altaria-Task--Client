import ContactUs from '@/components/Contact/ContactUs'
import HeroSection from '@/components/Contact/HeroSection'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <div>
         <Head><title>Contact</title></Head>
      <HeroSection/>
      <ContactUs />
    </div>
  )
}

export default contact
