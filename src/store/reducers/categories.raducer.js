import { categories } from "../../data/categories";
import { SELECTED_CATEGORY } from "../actions/categories.action";

const initialState = {
    categories: categories,
    selected: null
}

const CategoryReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SELECTED_CATEGORY:
            const indexCat = state.categories.findIndex(
                cat=>cat.name === action.categoryName
            )
            if(indexCat === -1){
                return state
            }
            return {...state,selected:state.categories[indexCat]}
        default:
            return state
    }
}

export default CategoryReducer