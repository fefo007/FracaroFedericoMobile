import {createStore,combineReducers} from 'redux'
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import ProductsReducer from './reducers/products.reducer';
import CategoryReducer from './reducers/categories.raducer';
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer'
import FavoriteReducer from './reducers/favorite.reducer'
import OrdersReducer from './reducers/orders.reducer';
import ErrorReducer from './reducers/error.reducer';


const RootReducer = combineReducers({
    products:ProductsReducer,
    cart:CartReducer,
    categories:CategoryReducer,
    auth:AuthReducer,
    favorite:FavoriteReducer,
    orders:OrdersReducer,
    error:ErrorReducer
})

export default createStore(RootReducer,applyMiddleware(thunk))