import { SHOW_ERROR} from "../actions/error.action";

const initialState = {
    error:'success'
}

const ErrorReducer = (state=initialState,action)=>{
    switch (action.type){
        case SHOW_ERROR:
            return {...state,error:action.error}
        default:
            return state
    }
}
export default ErrorReducer;