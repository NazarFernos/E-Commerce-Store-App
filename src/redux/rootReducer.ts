import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productsReducer from "./Products/products.reducer";
import cartReducer from "./Cart/cart.reducer";
import ordersReducer from "./Orders/orders.reducer";


const rootReducer = combineReducers({
    user: userReducer,
    productsData: productsReducer,
    basket: cartReducer,
    orders: ordersReducer
});
export default rootReducer;
export type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>