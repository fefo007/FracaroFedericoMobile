import {URL_SIGUP} from '../../constants/dataBase'

export const SIGNUP = 'SIGNUP'

export const signup = (email,pass)=>{
    return async dispatch => {
        try {
            const res = await fetch(URL_SIGUP,{
                method:'POST',
                headers:{
                    'Content-Type':'aplication/json'
                },
                body:JSON.stringify({
                    email,
                    pass,
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