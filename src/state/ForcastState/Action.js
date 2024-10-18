import { FORCAST_SUCCESS, FORCAST_FAILURE, FORCAST_REQUEST } from "./ActionType"
import axios from "axios"
export const get_forcast = (location) => async(dispatch)=>{
    dispatch({type:FORCAST_REQUEST})
    try {
        const {data} = await axios.post(`https://api.weatherapi.com/v1/forecast.json?key=f0988741e1024fddab492928241610&q=${location}&days=10&aqi=no&alerts=yes`)
        
        dispatch({type:FORCAST_SUCCESS, payload:data})
        console.log("Forcast", data)
    } catch (error) {
        dispatch({type:FORCAST_FAILURE})
        console.log("Forcast error", error)
    }
}
