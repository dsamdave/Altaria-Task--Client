import { ILoginVariables } from "@/pages/dashboard";

export const validateUserLogin = (userDetails: ILoginVariables) => {
    const { identifier,  password  } = userDetails;
    const errors: string[]  = []
  
  
    if(!identifier){
      errors.push("Please enter your email.")
    } else if( !validateEmail(identifier)){
      errors.push("Email format is incorrect.")
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