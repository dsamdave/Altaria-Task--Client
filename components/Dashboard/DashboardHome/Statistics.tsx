import Image from 'next/image'
import React from 'react'

const Statistics = () => {
    const statData = [
        {
            number: '45',
            type: 'New Patient',
            iconSrc: '/new-p.png'
        },
        {
            number: '23',
            type: 'Our Doctor',
            iconSrc: '/doc.png'
        },
        {
            number: '14',
            type: 'Operation',
            iconSrc: '/op.png'
        },
        {
            number: '$5728',
            type: 'Income',
            iconSrc: '/income.png'
        },
    ]
  return (
  <div>
      <div className='flex items-center justify-between'>
       {statData.map((data, index)=>(
         <div key={index} className='cursor-pointer shrink w-[220px] bg-white rounded-[15px] flex items-center justify-between p-4 shadow-2xl'>
         <p className='text-3xl text-[#1B1B29] font-bold'>
        {data.number} <br />
        <span className='text-sm text-[#1B1B29] font-normal'>{data.type}</span>
         </p>
         <Image src={`${data.iconSrc}`} width={60} height={60} alt='Icon db' />
     </div>
       ))}

    </div>
       <Image src={'/chart.png'} width={1512} height={407} alt='Chart' className='mt-10' />
  </div>
  )
}

export default Statistics