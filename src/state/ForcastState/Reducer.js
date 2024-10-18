import { FORCAST_SUCCESS, FORCAST_FAILURE, FORCAST_REQUEST } from "./ActionType"

const initialState ={
    hours: null,
    success: null,
    error: null

}

export const forcastData = (state = initialState, action) =>{
    switch(action.type){
        case FORCAST_REQUEST:
        return{...state,
            error: null
        };

        case FORCAST_SUCCESS:
        return {
            ...state, 
           hours: action.payload.forecast.forecastday[0].hour
        }

        case FORCAST_FAILURE:
        return {
            ...state, 
            error: "there is an error",
            success: null
        }

        default:
            return state;
      }

      

}