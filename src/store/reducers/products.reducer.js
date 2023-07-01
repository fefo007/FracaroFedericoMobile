import { products } from "../../data/prodToFirebase";
import { 
    FILTERED_PRODUCT, 
    GET_PRODUCTS, 
    POST_PRODUCTS, 
    SELECTED_PRODUCTS } from "../actions/products.action";

const initialState = {
    products:products,
    filteredProds:[],
    selectedProd:null
}

const ProductsReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SELECTED_PRODUCTS:
            return {...state,selectedProd:state.products.
                find(
                product=>product.id===action.productId
            )}
        case FILTERED_PRODUCT:
            return {...state,filteredProds:state.products.
                filter(
                products=>products.category===action.categoryName
            )}
        case GET_PRODUCTS :
            return {...state,products:action.payload}
        case POST_PRODUCTS:
            return state
        default:
                return state
    }
}

export default ProductsReducer