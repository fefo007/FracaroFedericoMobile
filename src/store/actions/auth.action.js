import {URL_SIGNUP} from '../../constants/dataBase'

export const SIGNUP = 'SIGNUP'

export const signUp = (email,password)=>{
    console.log(email,password)
    return async dispatch => {
        try {
            const res = await fetch(URL_SIGNUP,{
                method:'POST',
                headers:{
                    'Content-Type':'aplication/json'
                },
                body:JSON.stringify({
                    email,
                    password:password,
                    returnSecureToken:true
                })
            })
            const data = await res.json()
            console.log(data)
            dispatch({
                type:'SIGNUP',
                token:data.idToken,
                userId:data.localId
            })
        } catch (error) {
            console.log(error)
        }
    }
}