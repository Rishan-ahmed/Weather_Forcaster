import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./ActionType";

const initialState ={
    temp_c: null,
    temp_f: false,
    feelslike_c: null,
    feelslike_f: null,
    humidity: null,
    vis_miles: null,
    success: null,
    error: null,
    condition_text: null,
    condition_code: null,
    precip_in: null,
    vis_miles: null,
    country:null,
    city:null,
    localtime:null,
    uv:null,
    wind: null

}
export const currentData = (state = initialState, action) =>{
    switch(action.type){
        case DATA_REQUEST:
        return{...state,
            error: null
        };

        case DATA_SUCCESS:
        return {
            ...state, 
            temp_c: action.payload.current.temp_c,
            temp_f: action.payload.current.temp_c,
            feelslike_c: action.payload.current.feelslike_c,
            feelslike_f: action.payload.current.feelslike_f,
            humidity: action.payload.current.humidity,
            vis_miles: action.payload.current.vis_miles,
            condition_text: action.payload.current.condition.text,
            condition_code: action.payload.current.condition.code,
            precip_in:action.payload.current.precip_in,
            vis_miles:action.payload.current.vis_miles,
            country:action.payload.location.country,
            city:action.payload.location.name,
            localtime:action.payload.location.localtime,
            uv:action.payload.current.uv,
            wind: action.payload.current.wind_mph,
            success: "data fetched successfully",
            error: null
        }

        case DATA_FAILURE:
        return {
            ...state, 
            error: "there is an error",
            success: null
        }

        case DATA_FAILURE:
        return {
            ...state, 
            error: "there is an error",
            success: null
        }

        default:
            return state;
      }

      

}