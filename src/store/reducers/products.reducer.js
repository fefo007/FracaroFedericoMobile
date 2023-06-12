import { products } from "../../data/products";
import { FILTERED_PRODUCT, SELECTED_PRODUCTS } from "../actions/products.action";

const initialState = {
    products: products,
    filteredProds:[],
    selectedProd:null
}

const ProductsReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SELECTED_PRODUCTS:
            return {...state,selectedProd:state.products.find(
                product=>product.id===action.productId
            )}
        case FILTERED_PRODUCT:
            return {...state,filteredProds:state.products.filter(
                products=>products.category===action.categoryName
            )}
        default:
                return state
    }
}

export default ProductsReducer