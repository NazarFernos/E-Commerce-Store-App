import { ADD_NEW_PRODUCT_START, DELETE_PRODUCTS_START, ProductsActionTypes, ProductData, SetProducts, SET_PRODUCTS, FETCH_PRODUCTS_START, EDIT_PRODUCT_SUCCESS } from "./products.types";


export const addProductStart = (productData: ProductData): ProductsActionTypes => ({
    type: ADD_NEW_PRODUCT_START,
    payload: productData
});

export const fetchProductsStart = (filter={}): ProductsActionTypes => ({
    type: FETCH_PRODUCTS_START,
    payload: filter
});

export const setProducts = (products: SetProducts): ProductsActionTypes => ({
    type: SET_PRODUCTS,
    payload: products
});

export const deleteProductStart = (productID: string): ProductsActionTypes => ({
    type: DELETE_PRODUCTS_START,
    payload: productID
});

export const editProductStart = (productData: ProductData): ProductsActionTypes => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: productData
});

