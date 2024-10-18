import axios from "axios"
import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./ActionType"

export const get_current_temp = (location) => async(dispatch)=>{
    dispatch({type:DATA_REQUEST})
    try {
        const {data} = await axios.post(`https://api.weatherapi.com/v1/current.json?key=f0988741e1024fddab492928241610&q=${location}&aqi=no
`)
        
        dispatch({type:DATA_SUCCESS, payload:data})
        console.log("Tempreture", data)
    } catch (error) {
        dispatch({type:DATA_FAILURE})
        console.log("error", error)
    }
}


