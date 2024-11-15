import { baseURL } from "@/lib/query"
import { IAppointmentPayload } from "../typings/typingsForUser"
import axios from "axios"

export const postBookingRequest = async (endpoint: string, payload: IAppointmentPayload, token?: string ) => {
    try {
        
        const response = await axios.post( `${baseURL}/${endpoint}`, payload,


        {headers: {  
            'Accept': 'application/json', 'Content-Type': 'application/json',
          
            Authorization: `Bearer ${token}`
        }}, 
        )
        
        const { data } = (response)

        return data
     
    } catch (error: any ) {

        if(error.response?.data?.message){
            return console.log(error.response?.data?.message) 
        } else {
            return console.log(error.message) 
        }
        
    } 

}