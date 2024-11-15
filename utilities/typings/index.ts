


export interface IUser {
  accessToken: string;
    phoneNumber: string;
    email: string;
    patientID: string;
    role: string;
    latitude: number | null;
    longitude: number | null;
    firstName: string;
    lastName: string;
    country: string;
    state: string;
    avatar: string;
    id: string;


    password: string;
    createdAt: Date
    updatedAt: Date
  
  
  
  
  
    patientInfo: {
  
      appointments: any
  
      basicInformation: {
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


  
  