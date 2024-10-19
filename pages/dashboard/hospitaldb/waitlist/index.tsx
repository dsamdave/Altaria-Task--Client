import WaitListUsers from '@/components/Dashboard/WaitListComps/WaitListUsers'
import Auth from '@/components/Universal/Auth'
import React from 'react'

const Index = () => {
  return (
    <div className="p-5 bg-[#ECF0FF] h-full"
    style={{height: "100vh"}}>
        <WaitListUsers/>
        <Auth />

    </div>
  )
}

export default Index