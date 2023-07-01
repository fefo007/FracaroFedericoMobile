import {URL_SIGNUP} from '../../constants/dataBase'
import {URL_SIGNIN} from '../../constants/dataBase'
import {insertUser} from '../../db/index'
import { showError } from './error.action'

export const SIGNUP = 'SIGNUP'
export const SIGNIN = 'SIGNIN'

export const signUp = (email,password)=>{
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
            const sql = await insertUser(data.localId,email,data.idToken)
            console.log(sql)
            dispatch({
                type:'SIGNUP',
                token:data.idToken,
                userId:data.localId,
                user:email
            })
            dispatch(showError(data.error.message))
        } catch (error) {
            console.log(`${error}signUp`)
        }
    }
}

export const signIn = (email,password)=>{
    return async dispatch => {
        try {
            const res = await fetch(URL_SIGNIN,{
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
                type:'SIGNIN',
                token:data.idToken,
                userId:data.localId,
                user:email
            })
            if(data.error.errors[0].message) 
                {dispatch(showError(data.error.errors[0].message))}

        } catch (error) {
            console.log(`${error}signIn`)
        }
    }
}