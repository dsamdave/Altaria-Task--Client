import Image from 'next/image'
import React from 'react'

const NoMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center '
    style={{height: "70vh"}}
    >

        <Image src={'/no-m.svg'} width={44} height={44} alt='No message icon' />
        <h1 className='text-xl text-center text-[#0F1222] font-bold mt-3'>There is no conversation yet</h1>
        <p className='text-base text-[#535875] font-normal w-[480px] text-center mt-2'>All your conversations and chats will appear here.</p>

    </div>
  )
}

export default NoMessage