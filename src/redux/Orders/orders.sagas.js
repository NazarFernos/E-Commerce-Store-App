import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleAddProductToCart } from './orders.helpers';
import { fetchProductsStart } from '../Products/products.actions';
import cartTypes from './orders.types';
import { handleDeleteProduct } from '../Products/products.helpers';



export function* addProductToCart({ payload }) {

    // try {
    //     yield handleAddProductToCart(payload);
    //     yield put(
    //         fetchProductsStart()
    //     );

    // } catch (error) {
    //     console.log(error)
    // }
}

export function* onAddProductToCart() {
    //yield takeLatest(cartTypes.ADD_TO_BASKET, addProductToCart)
}

export function* deleteProduct({ payload }) {
    // try {
    //     yield handleDeleteProduct(payload);
    //     yield put(
    //         fetchProductsStart()
    //     );

    // } catch (error) {
    //     console.log(error)
    // }
}

export function* onDeleteProductStart() {
    //yield takeLatest(cartTypes.REMOVE_FROM_BASKET, deleteProduct)
}

export default function* cartSagas() {
    // yield all([
    //     call(onAddProductToCart),
    //     call(onDeleteProductStart)
    // ])
}