import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productsReducer from "./Products/products.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    productsData: productsReducer,
});
export default rootReducer;
export type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>