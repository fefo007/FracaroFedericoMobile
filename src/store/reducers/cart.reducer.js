import { cart } from "../../data/cart";
import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from "../actions/cart.action";

const initialState = {
    items:[],
    total:0
}

const totalCart = (list)=>{
    list.map(item=>item.quantity * item.price).reduce((a,b)=>a+b,0)
}

const CartReducer = (state=initialState, action)=>{
    switch(action.type) {
        case REMOVE_ITEM:
            const removeProduct = [...state.items].filter(
                item=>item.id !== action.itemId
            )
            return {...state,items:removeProduct,total:totalCart(removeProduct)}
        case ADD_ITEM:
            const indexItem = state.items.findIndex(
                item=>item,id === action.item.id
            )
            if (indexItem === -1){
                const item = {...action.item,quantity:1}
                const updateCart = [...state.items,item]
                return {...state,items:updateCart,total:totalCart(updateCart)}
            }
            const items = [...state.items].map(item=>{
                if (item.id===action.item.id){
                    item.quantity++
                    return item
                }
            return {...state,items, total:totalCart(items)}
            })
        case CONFIRM_CART:
            return state
        default:
            return state
        }
    }


export default CartReducer