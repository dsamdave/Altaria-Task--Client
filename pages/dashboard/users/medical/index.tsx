import MedicalConsultationModal from '@/components/Dashboard/Users/Medical/MedicalConsultationModal';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const index = () => {
    const [medBooking, setMedBooking] = useState(true);
    const router = useRouter();

    const handleMedBooking = ()=>{
        setMedBooking(!medBooking);
        router.back()
    }

    
  return (
    <div className="h-full pt-5">
{medBooking && <MedicalConsultationModal onClose={handleMedBooking}/>}
    </div>
  )
}

export default index