import { URL_API } from "../../constants/dataBase";

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CONFIRM_CART='CONFIRM_CART'
export const POST_CART = 'POST_CART'
export const GET_CART = 'GET_CART'
export const PUT_CART = 'PUT_CART'

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

export const postCart = (items,total,username,quantity)=>{
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
                    total:total,
                    quantity:quantity
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

export const putCart = (id,items,total,username,quantity)=>{
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/carritos/${id}.json`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    username:username,
                    items:{...items},
                    total:total,
                    quantity:quantity
                }),
            })
            const result = await response.json()
            console.log(result)
            dispatch({
                type:PUT_CART,
                confirm:true
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export const getCart = (username)=>{
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/carritos.json`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const result = await response.json()
            
            const carts = Object.keys(result).map(key=>({
                ...result[key],
                id:key
            }))
            const userCart = carts.find(item=>item.username === username)
            console.log(userCart)
            if(userCart.items)
            {dispatch({
                type:GET_CART,
                payload:userCart
            })}
        } catch (error) {
            console.log(error)
        }
    }
}