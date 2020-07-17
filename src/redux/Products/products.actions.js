import productTypes from "./products.types";
import productsTypes from "./products.types";

export const addProductStart = productData => ({
    type: productTypes.ADD_NEW_PRODUCT_START,
    payload: productData
});

export const fetchProductsStart = () => ({
    type: productsTypes.FETCH_PRODUCTS_START
});

export const setProducts = products => ({
    type: productsTypes.SET_PRODUCTS,
    payload: products
});

export const deleteProductStart = productID => ({
    type: productsTypes.DELETE_PRODUCTS_START,
    payload: productID
})