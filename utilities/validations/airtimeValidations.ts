

export interface IAirtimeOrderVariables {

    phoneNumber: string;
    email: string;
    amount: string;
  }



export const validateAirtimeOrder = (payload: IAirtimeOrderVariables) => {
    const {   phoneNumber,
        amount,
      email,
     } = payload;
    const errors: string[]  = []
  
  
    if (!validateNigerianPhoneNumber(phoneNumber)) {
      errors.push("Please enter a valid phone number.")
    } 
    if (!amount || Number(amount) < 100 || Number(amount) > 50000) {
        errors.push("Please enter an amount between 100 and 50,000.");
      }
    
    // if(!email){
    //   errors.push("Please enter your email.")
    // } else if(!validateEmail(email)) {
    //   errors.push("Email format incorrect.")
    // }
    

  
    return {
      errMsg: errors,
      errLength: errors.length
    }
  }




  export function validateEmail(email: string ) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validateNigerianPhoneNumber(phoneNumber: string) {
  const re = /^(070|080|081|090|091|093|095)\d{8}$/;
  return re.test(phoneNumber);
}