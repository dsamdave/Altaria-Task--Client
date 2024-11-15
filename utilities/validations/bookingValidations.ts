export interface IBookVariables {
    firstName: string,
    lastName: string,
    dOB: string,
    phone: string,
    gender: string,
    forYou: boolean, 
    forSomeOne: boolean,
    images: any,
  }

export interface IFreeQuesVariables {
      medications: boolean,
      allergies: boolean,
      previouslyDiagnosed: boolean,
      question: string,

      conditionName: string,
      conditionTime: string,
      currentlyHaveThisCondition: boolean,
      optionalNote: string,

      firstName: string | undefined,
      lastName: string | undefined,
      relationship: string | undefined,
      dateOfBirth: string | undefined,
      selectedPerson: number,
  }


export const validateUserBooking = (userDetails: IBookVariables) => {
    const {     firstName,
        lastName,
        dOB,
        phone,
        gender,
        forYou, 
        forSomeOne,  } = userDetails;
    const errors: string[]  = []
  
  
    if(!forSomeOne && !forYou){
      errors.push("Please select who is booking.")
    } 
    if(forSomeOne && !firstName){
      errors.push("Please add their first name.")
    } 
    if(forSomeOne && !lastName){
      errors.push("Please add their last name.")
    } 
    if(forSomeOne && !dOB){
      errors.push("Please add their date of birth.")
    } 
    if(forSomeOne && !phone){
      errors.push("Please add their emergency phone number.")
    } 
    if(forSomeOne && !gender){
      errors.push("Please select their gender.")
    } 
    
  
  
    return {
      errMsg: errors,
      errLength: errors.length
    }
  }


export const validateUserFreeQuestion = (userDetails: IFreeQuesVariables) => {
    const {           medications,
      allergies,
      previouslyDiagnosed,
      question,

      conditionName,
      conditionTime,
      currentlyHaveThisCondition,
      optionalNote,
      selectedPerson,

      firstName,
      lastName,
      relationship,
      dateOfBirth,  } = userDetails;
    const errors: string[]  = []
  
  
    if(selectedPerson !== 0 && selectedPerson !== 1 ){
      errors.push("Please select who is booking.")
    } 
    if(!question  ){
      errors.push("Please add your question.")
    } 
    if(selectedPerson === 1 && !firstName){
      errors.push("Please add their first name.")
    } 
    if(selectedPerson === 1 && !lastName){
      errors.push("Please add their last name.")
    } 
    if(selectedPerson === 1 && !dateOfBirth){
      errors.push("Please add their date of birth.")
    } 
    if(selectedPerson === 1 && !relationship){
      errors.push("Please select your relation with them.")
    } 
    if(previouslyDiagnosed && !conditionName){
      errors.push("Please add name of condition.")
    } 
    if(previouslyDiagnosed && !currentlyHaveThisCondition){
      errors.push("Please indicate if you currently have the condition.")
    } 

    
  
  
    return {
      errMsg: errors,
      errLength: errors.length
    }
  }