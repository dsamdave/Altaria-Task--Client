import Patients from '@/components/Dashboard/Patients/Patients'
import Auth from '@/components/Universal/Auth'
import React from 'react'

const index = () => {
  return (
    <div className="p-5 bg-[#ECF0FF] h-full"
    style={{height: "100vh"}}>
        <Patients/>
        <Auth />

    </div>
  )
}

export default index