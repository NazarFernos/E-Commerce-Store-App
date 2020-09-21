const productsTypes = {
    ADD_NEW_PRODUCT_START: 'ADD_NEW_PRODUCT_START',
    FETCH_PRODUCTS_START: 'FETCH_PRODUCTS_START',
    SET_PRODUCTS: 'SET_PRODUCTS',
    DELETE_PRODUCTS_START: 'DELETE_PRODUCTS_START',
    EDIT_PRODUCT_SUCCESS: 'EDIT_PRODUCT_SUCCESS',
};

export interface ProductData {
    productCategory: string,
    productName: string, 
    productThumbnail: string, 
    productPrice: number,
    maxQuantity: number,
    productID?: string,
};

export interface ProductID {
    productID: string,
}

export interface SetProducts {
    products: ProductData
}

export const ADD_NEW_PRODUCT_START = 'ADD_NEW_PRODUCT_START';
export const DELETE_PRODUCTS_START = 'DELETE_PRODUCTS_START';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';


interface AddNewProductStartAction {
    type: typeof ADD_NEW_PRODUCT_START,
    payload: ProductData
}

interface DeleteProductsStartAction {
    type: typeof DELETE_PRODUCTS_START,
    payload: string
}

interface SetProductsAction {
    type: typeof SET_PRODUCTS,
    payload: SetProducts
}

interface FetchProductsStartAction {
    type: typeof FETCH_PRODUCTS_START,
    payload: {}
}

interface editProductsSuccess {
    type: typeof EDIT_PRODUCT_SUCCESS,
    payload: ProductData
}


export type ProductsActionTypes = AddNewProductStartAction | DeleteProductsStartAction | SetProductsAction | FetchProductsStartAction | editProductsSuccess;

export default productsTypes;