import productsTypes, { ADD_NEW_PRODUCT_START, DELETE_PRODUCTS_START, ProductsActionTypes, ProductData, SetProducts, SET_PRODUCTS, FETCH_PRODUCTS_START, EDIT_PRODUCT_SUCCESS } from "./products.types";


export const addProductStart = (productData) => ({
    type: ADD_NEW_PRODUCT_START,
    payload: productData
});

export const fetchProductsStart = (filter={}) => ({
    type: FETCH_PRODUCTS_START,
    payload: filter
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});

export const deleteProductStart = (productID) => ({
    type: DELETE_PRODUCTS_START,
    payload: productID
});

export const fetchProductStart = productID => ({
    type: productsTypes.FETCH_PRODUCT_START,
    payload: productID
});

export const setProduct = product => ({
    type: productsTypes.SET_PRODUCT,
    payload: product

})

export const editProductStart = productData => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: productData
});

