import { IVariables } from "@/components/Modals/RegisterModal";


export const validateUserRegister = (userDetails: IVariables) => {
    const {   
      phoneNumber, email, password
    } = userDetails;
    const errors: string[]  = []
  
    if(!phoneNumber){
      errors.push("Please enter your phone number.")
    } 
    
    if(!email){
      errors.push("Please enter your email.")
    } else if(!validateEmail(email)) {
      errors.push("Email format incorrect.")
    }
    
  
    if(!password){
      errors.push("Please enter your password.")
    } else if(password.length < 6) {
      errors.push("Incorrect password.")
    }
  
    return {
      errMsg: errors,
      errLength: errors.length
    }
  }




  export function validateEmail(email: string ) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}