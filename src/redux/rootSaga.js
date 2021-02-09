import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas.js';
import productsSagas from './Products/products.sagas';
import cartSagas from './Cart/cart.sagas';
import ordersSagas from './Orders/orders.sagas.js';


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(productsSagas),
        call(cartSagas),
        call(ordersSagas),
    ])
}