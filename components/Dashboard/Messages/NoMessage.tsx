import Image from 'next/image'
import React from 'react'

const NoMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen mt-5'>

        <Image src={'/no-m.svg'} width={44} height={44} alt='No message icon' />
        <h1 className='text-xl text-center text-[#0F1222] font-bold mt-3'>There is no conversation yet</h1>
        <p className='text-base text-[#535875] font-normal w-[480px] text-center mt-2'>Multifactor authentication is an optional but highly recommended security feature that adds an extra layer.</p>

    </div>
  )
}

export default NoMessage