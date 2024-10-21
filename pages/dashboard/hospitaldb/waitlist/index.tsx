import WaitListUsers from '@/components/Dashboard/WaitListComps/WaitListUsers'
import Auth from '@/components/Universal/Auth'
import React, { useEffect, useState } from 'react'
import NoWaitList from './NoWaitList'
import { useApiQuery } from '@/lib/useApi'
import Spinner from '@/components/Universal/Spinner'

export interface WaitlistUser {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

interface WaitlistResponse {
  count: number;
  message: string;
  page: number;
  totalItems: number;
  waitlist: WaitlistUser[] | undefined
}



const Index = () => {

  const [user, setUsers] = useState([])
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useApiQuery<WaitlistResponse>(
    ['waitlist', currentPage],
    `/coming-soon?page=${currentPage}`,  
  );



  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log({data})

  if(error){
    return (
      <NoWaitList />
    )
  }


  return (
    <div className="p-5 bg-[#ECF0FF] h-full"
    style={{height: "100vh"}}>
      {
        data?.waitlist && data?.waitlist.length < 1 ? (
          <NoWaitList />
        ) : (
          <WaitListUsers
          waitlistUsers={data?.waitlist}
          totalItems={data?.totalItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />
          
        )
      }
        <Auth />

        {
          isLoading && <Spinner />
        }

    </div>
  )
}

export default Index