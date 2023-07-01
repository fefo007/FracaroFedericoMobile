import { SIGNUP } from "../actions/auth.action";
import { SIGNIN } from "../actions/auth.action";

const initialState = {
    token:null,
    userId:null,
    user:null
}

const AuthReducer = (state=initialState,action)=>{
    switch (action.type){
        case SIGNUP:
            return {...state,token:action.token,userId:action.userId,user:action.user}
        case SIGNIN:
            return {...state,token:action.token,userId:action.userId,user:action.user}
        default:
            return state
    }
}

export default AuthReducer