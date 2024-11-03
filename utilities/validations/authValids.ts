import { ILoginVariables } from "@/pages/dashboard";
import { ISignUpVariables } from "@/pages/signup";

export const validateUserRegister = (userDetails: ISignUpVariables) => {
    const {   firstName,
      lastName,
      email,
      phoneNumber,
      password,
      country, } = userDetails;
    const errors: string[]  = []
  
  
    if(!firstName){
      errors.push("Please enter your first name.")
    } 
    if(!lastName){
      errors.push("Please enter your last name.")
    } 
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


export const validateUserLogin = (userDetails: ILoginVariables) => {
    const { identifier,  password  } = userDetails;
    const errors: string[]  = []
  
  
    if(!identifier){
      errors.push("Please enter your email.")
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