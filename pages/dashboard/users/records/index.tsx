import RecordModal from '@/components/Dashboard/Users/Records/RecordModal';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const index = () => {
    const [myRecord, setMyRecord] = useState(true);
    const router = useRouter();
  
    const handleMyRecord = () => {
      setMyRecord(!myRecord);
      router.back();
    };
  
    return (
      <div className="h-full pt-5">
        {myRecord && <RecordModal onClose={handleMyRecord} />}
      </div>
    );
  };

export default index