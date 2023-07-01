
import {
    ADD_ITEM, 
    CONFIRM_CART, 
    GET_CART, 
    POST_CART, 
    REMOVE_ITEM 
} from "../actions/cart.action";

const initialState = {
    items:[],
    total:0,
    quantity:0,
    cartId:null
}

const totalCart = (list)=>{
    return list
            .map(item=>item.quantity * item.price)
            .reduce((a,b)=>a+b,0)
}

const CartReducer = (state=initialState, action)=>{
    switch(action.type) {
        case REMOVE_ITEM:
            const removeProduct = [...state.items].filter(
                item=>item.id !== action.itemId
            )
            return {...state,items:removeProduct,total:totalCart(removeProduct),quantity:state.quantity-1}
        case ADD_ITEM:
            const indexItem = state.items.findIndex(
                item=>item.id === action.item.id
            )
            if (indexItem === -1){
                const item = {...action.item,quantity:1}
                const updateCart = [...state.items,item]
                return {...state,items:updateCart,total:totalCart(updateCart),quantity:state.quantity+1}
            }
            const updateItems = [...state.items].map(item=>{
                if (item.id===action.item.id){
                    item.quantity++
                }
                return item
            })
            return {...state,items:updateItems,total:totalCart(updateItems)}
        case CONFIRM_CART:
            return {...state,items:[],total:0,quantity:0}
        case GET_CART :
            return {...state,items:action.payload.items,total:action.payload.total,quantity:action.payload.quantity,cartId:action.payload.id}
        case POST_CART:
            return state
        default:
            return state
        }
    }


export default CartReducer