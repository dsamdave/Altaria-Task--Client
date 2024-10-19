import FreeHealthCare from '@/components/Dashboard/FreeHealthCare/FreeHealthCare'
import Auth from '@/components/Universal/Auth'
import React from 'react'

const index = () => {
  return (
    <div className="p-5 bg-[#ECF0FF] h-full "
    style={{height: "100vh"}}>
        <FreeHealthCare/>
        <Auth />

    </div>
  )
}

export default index