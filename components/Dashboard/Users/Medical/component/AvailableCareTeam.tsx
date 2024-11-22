import Image from "next/image";
import React from "react";


interface AvailableCareTeamProp{
  onAskFreeHealth: ()=>void;
}

const AvailableCareTeam:React.FC<AvailableCareTeamProp> = ({onAskFreeHealth}) => {
    const topData =[
        {
            title: ' Private Care Service',
            description: ' Consult instantly to doctors or via live chat/voice/video call from doctors available now.',
            lastText: 'Starting from NGN4500 per visit'
        },
        {
            title: 'Ask a Free Health Question',
            description: 'Get the answers from top doctor in 140 precialties.',
            lastText: 'Starting from NGN4500 per visit',
            action: onAskFreeHealth
        },
    ]

    const availData =[
      {
        imgSrc: '/appo.png',
        doctorsName: 'Dr. Margaret Wells',
        specialization: 'Allergy & Immunology',
        address: 'Temple Hills, MD 20748',
        rating: '4.8',
        hospital: 'BMH'
      },
      {
        imgSrc: '/appo.png',
        doctorsName: 'Dr. Margaret Wells',
        specialization: 'Allergy & Immunology',
        address: 'Temple Hills, MD 20748',
        rating: '4.8',
        hospital: 'BMH'
      },
    ]
  return (
    <div className="mt-8">
      <div className="w-full sm:w-[327px]">
      {topData.map((data, index)=>(
          <div key={index} className="flex items-center justify-between mb-4" onClick={data.action}>
          <div>
            <h1 className="text-base text-[#1E1F20] font-bold">
             {data.title}
            </h1>
            <p className="text-xs text-[#1E1F20] font-normal">
             {data.description}
            </p>
            <p className="text-xs text-[#9393AA] font-normal">
             {data.lastText}
            </p>
          </div>
          <Image src={"/r-arr.svg"} width={24} height={24} alt="arrow icon" />
        </div>
      ))}

      <div className="mt-10">
        <h1 className="text-base text-[#1E1F20] font-bold">Available Care Team</h1>

      {availData.map((data, index)=>(
          <div key={index} className="flex items-start shadow-sm p-4 rounded-lg mb-4">
          <Image src={data.imgSrc} width={72} height={84} alt="doctors img" />
        
         <div>
           <p className="font-semibold">{data.doctorsName}s</p>
           <p className="text-[#9393AA] text-sm">{data.specialization}</p>
           <p className="text-[#9393AA] text-sm flex items-center gap-1">  <Image src={'/star-r.png'} width={14} height={14} alt="doctors img" /> <span className="text-[#1E1F20]">{data.rating}</span> {data.hospital}</p>
           <p className="text-xs text-[#1E1F20] font-normal">{data.address}</p>
           <div className="flex items-center justify-center gap-3 mt-2">
             <Image src={'/av1.svg'} width={32} height={32} alt="Call icon" />
             <Image src={'/av2.svg'} width={32} height={32} alt="Call icon" />
             <Image src={'/av3.svg'} width={32} height={32} alt="Call icon" /> 
 
           </div>
         </div>
       </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default AvailableCareTeam;
