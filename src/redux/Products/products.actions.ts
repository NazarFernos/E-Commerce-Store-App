import productTypes, { ADD_NEW_PRODUCT_START, DELETE_PRODUCTS_START, ProductsActionTypes, ProductData, ProductID, SetProducts, SET_PRODUCTS, FETCH_PRODUCTS_START } from "./products.types";
import productsTypes from "./products.types";


export const addProductStart = (productData: ProductData): ProductsActionTypes => ({
    type: ADD_NEW_PRODUCT_START,
    payload: productData
});

export const fetchProductsStart = (): ProductsActionTypes => ({
    type: FETCH_PRODUCTS_START
});

export const setProducts = (products: SetProducts): ProductsActionTypes => ({
    type: SET_PRODUCTS,
    payload: products
});

export const deleteProductStart = (productID: string): ProductsActionTypes => ({
    type: DELETE_PRODUCTS_START,
    payload: productID
})