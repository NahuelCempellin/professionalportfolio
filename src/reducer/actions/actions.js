import { USERNAME } from "../../constants/pre-landing";



export function handlerSetName(payload){
    return function(dispatch){
        dispatch({
            type:USERNAME,
            payload: payload
        })
    }
}