import { USERNAME } from "../../constants/pre-landing"


const initialState = {
  name:''
  }
  export default function rootReducer (state = initialState, action) {
    switch (action.type) {
      case USERNAME:
        
        return{
          ...state,
          name: action.payload
        }
        
      

      default:
        return {
          ...state
        }
    }
  }
  