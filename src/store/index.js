import {createStore,combineReducers} from 'redux'
// import thunk from "redux-thunk";
// import { applyMiddleware } from "redux";
import ProductsReducer from './reducers/products.reducer';
import CategoryReducer from './reducers/categories.raducer';

const RootReducer = combineReducers({
    products:ProductsReducer,
    // cart:CartReducer,
    categories:CategoryReducer
})

export default createStore(RootReducer)