import AboutHeader from '@/components/AboutPageComps/AboutHeader'
import BrandsComp from '@/components/AboutPageComps/BrandsComp'
import AboutSectionOne from '@/components/AboutPageComps/SectionOne'
import AboutSectionThree from '@/components/AboutPageComps/SectionThree'
import AboutSectionTwo from '@/components/AboutPageComps/SectionTwo'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div className='color-theme-blue main-wrapper'>

      <AboutHeader />
      
      <AboutSectionOne />

      <AboutSectionTwo />

      <AboutSectionThree />

      <BrandsComp />

    </div>
  )
}

export default AboutUsPage