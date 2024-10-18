import { DAY_FORCAST_SUCCESS, DAY_FORCAST_FAILURE, DAY_FORCAST_REQUEST } from "./ActionType"
import axios from "axios"
export const get_day_forcast = (location) => async(dispatch)=>{
    dispatch({type:DAY_FORCAST_REQUEST})
    try {
        const {data} = await axios.post(`https://api.weatherapi.com/v1/forecast.json?key=f0988741e1024fddab492928241610&q=${location}&days=10&aqi=no&alerts=yes`)
        
        dispatch({type:DAY_FORCAST_SUCCESS, payload:data})
        console.log("DayForcast", data)
    } catch (error) {
        dispatch({type:DAY_FORCAST_FAILURE})
        console.log("Forcast error", error)
    }
}