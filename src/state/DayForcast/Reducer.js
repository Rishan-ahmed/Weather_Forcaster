import { DAY_FORCAST_SUCCESS, DAY_FORCAST_FAILURE, DAY_FORCAST_REQUEST } from "./ActionType"

const initialState ={
    days: null,
    success: null,
    error: null

}

export const DayforcastData = (state = initialState, action) =>{
    switch(action.type){
        case DAY_FORCAST_REQUEST:
        return{...state,
            error: null
        };

        case DAY_FORCAST_SUCCESS:
        return {
            ...state, 
           days: action.payload.forecast.forecastday
        }

        case DAY_FORCAST_FAILURE:
        return {
            ...state, 
            error: "there is an error",
            success: null
        }

        default:
            return state;
      }

      

}