import { URL_API } from "../../constants/dataBase";

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CONFIRM_CART='CONFIRM_CART'
export const POST_CART = 'POST_CART'
export const GET_CART = 'GET_CART'

export const addItem = (item)=>({
    type:ADD_ITEM,
    item:item //es igual que colocar item solo 
})

export const removeItem = (itemId)=>({
    type:REMOVE_ITEM,
    itemId
})

export const confirmCart = (items,total)=>{
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/ordenes.json`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    date:Date.now(),
                    items:{...items},
                    total:total
                }),
            })
            const result = await response.json()
            console.log(result)
            dispatch({
                type:CONFIRM_CART,
                confirm:true
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const postCart = (items,total,username)=>{
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/carritos.json`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    username:username,
                    items:{...items},
                    total:total
                }),
            })
            const result = await response.json()
            console.log(result)
            dispatch({
                type:POST_CART,
                confirm:true
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCart = ()=>{
    return async dispatch => {
        try {
            const respornse = await fetch(`${URL_API}/carritos.json`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const result = await respornse.json()
            console.log(result)
            const cart = Object.keys(result).map(key=>({
                ...result[key],
                id:key
            }))
            dispatch({
                type:GET_CART,
                payload:cart
            })
        } catch (error) {
            console.log(error)
        }
    }
}