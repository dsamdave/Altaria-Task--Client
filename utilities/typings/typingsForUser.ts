

export interface IApiResponse {
    message: string | undefined
  }
export interface IAppointmentPayload {
  category?: string | undefined
  patientName?: string | undefined 
  appointMentType?: string | undefined 
  appointMentNature?: string | undefined 
  reason?: string | undefined
  insuranceProvider?: string | undefined
  policyNumber?: string | undefined
  groupNumber?: string | undefined
  date?: string | undefined
  time?: string | undefined

  forSomeOne?: boolean | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  dOB?: string | undefined
  phone?: string | undefined
  gender?: string | undefined
  images?: string[] | [] | undefined
  }



  interface SomeOneDetails {
    dOB: string;
    firstName: string;
    gender: string;
    lastName: string;
    patientName: string;
    phone: string;
  }
  
  interface PatientInfo {
    medications: Record<string, any>;
    appointments: Array<any>;
    conditions: Array<any>;
    treatmentHistory: Array<any>;
    labResults: Array<any>;
    [key: string]: any;
  }
  
  interface User {
    avatar: string;
    country: string;
    firstName: string;
    id: string;
    lastName: string;
    latitude: number;
    longitude: number;
    patientID: string;
    patientInfo: PatientInfo;
    phoneNumber: string;
    role: string;
    state: string;
  }
  
  export interface IBookingResponse {
    appointMentNature: string;
    appointMentType: string;
    category: string;
    createdAt: string;
    date: string;
    forSomeOne: boolean;
    id: string;
    patientID: string;
    patientType: string;
    reason: string;
    someOneDetails: SomeOneDetails;
    status: string;
    time: string;
    updatedAt: string;
    user: User;
    meetingLink: string;
  }


  export interface IUser {
    id: string;
    patientID: string;
    phoneNumber: string;
    email: string;
    password: string;
  
    role: string;
    firstName: string
    lastName: string
    middleName: string
  
    country: string
    state: string
    avatar: string
  
    latitude: number;
    longitude: number;
  
  
    patientInfo: {
  
      appointments: any;
  
      basicInformation: {
        // fullName: string
        dateOfBirth: string
        gender: string
        languages: string[]
        contactInfo: {
          email: string
          zipCode: string
          phoneNumber: string
          address: string
        }
        emergencyContact: {
          name: string
          zipCode: string
          contactEmergencyPhoneNumber: string
          relationship: string
        }
      }
    
      healthMetrics: {
        basic: {
          height: string
          weight: string
          bodyMass: string
          bloodGroup: string
    
        }
    
        advancedIfo: {
          bloodPressure: string
          totalCholesterol: string
          LDL: string
          HDL: string
          triglycerides: string
          cholesterolHDLRatio: string
          glucose: string
    
        }
      }
    
      conditions: {
        name: string
        dateAdded: string
        diagnozedBy: string
        description: string
      }[]
  
      treatmentHistory: {
        name: string
        dateAdded: string
        diagnozedBy: string
        description: string
      }[]
  
      medications: {
        generalMedication: {
          name: string
          dosage: string
  
        }[]
        advancedMedication: {
          name: string
          dosage: string
  
        }[]
      }
  
      labResults: {
        name: string
        nameofLab: string
        dateAdded: string
        diagnozedBy: string
        image: [string]
        description: string
      }[]
  
      immunization: {
        name: string
        diagnozedBy: string
        description: string
      }[]
  
      clinicalVitals: {
        name: string
        diagnozedBy: string
        description: string
      }[]
  
      allergies: {
        name: string
        diagnozedBy: string
        description: string
      }[]
  
  
    }

  }

export interface ILoginApiResponse {
  accessToken: string;
  message: string;
  refreshToken: string;
  user: IUser;
}
  