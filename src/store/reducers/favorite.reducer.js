
import { ADD_FAV_ITEM, REMOVE_FAV_ITEM } from "../actions/favorite.action";

const initialState = {
    items:[],
}

const FavoriteReducer = (state=initialState, action)=>{
    switch(action.type) {
        case REMOVE_FAV_ITEM:
            const removeProduct = [...state.items].filter(
                item=>item.id !== action.itemId
            )
            return {...state,items:removeProduct}
        case ADD_FAV_ITEM:
            const item = {...action.item,quantity:1}
            const updateCart = [...state.items,item]
            return {...state,items:updateCart}
        default:
            return state
        }
    }


export default FavoriteReducer