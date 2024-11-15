import FreeHealthCare from '@/components/Dashboard/Admin/FreeHealthCare/FreeHealthCare'
import Auth from '@/components/Universal/Auth'
import React, { useState } from 'react'
import NoFreeHealthQues from './NoFreeHealthQues'
import { useApiQuery } from '@/lib/useApi'
import Spinner from '@/components/Universal/Spinner'
import { IUser } from '@/utilities/typings'

const Index = () => {

  const [currentPage, setCurrentPage] = useState(1);


  const { data, error, isLoading } = useApiQuery<IFreeQuesResponse>(
    ["free-health-ques-list", currentPage],
    `/questions?page=${currentPage}`,  
  );

  console.log({data});

  if(error){
    return <NoFreeHealthQues />
  }

  return (
    <div className="p-5 bg-[#ECF0FF] h-full "
    style={{height: "100vh"}}>

      {
        data?.questions && data?.questions.length < 1 ? (

          <NoFreeHealthQues />
        ) : (

          <FreeHealthCare 
          questions={data?.questions}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={data?.totalItems}
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

interface ICondition {
  conditionName: string;
  conditionTime: string;
  optionalNote: string;
  currentlyHaveThisCondition: boolean;
}

export interface ISomeoneElse {
  firstName: string;
  lastName: string;
  relationship: string;
  dateOfBirth: string;
}

export interface IQuestion {
  id: string;
  allergies: string;
  answers: string[];
  condition: ICondition;
  createdAt: string;
  updatedAt: string;
  medications: string;
  previouslyDiagnosed: string;
  question: string;
  someoneElse?: ISomeoneElse;
  user: IUser
}

export interface IFreeQuesResponse {
  message: string;
  page: number;
  totalItems: number;
  questions: IQuestion[];
}
