import productsTypes from './products.types';
import { Reducer } from 'redux';


type initialStateType = {
    products: string[]
}

const INITIAL_STATE: initialStateType = {
    products: []
};

const productsReducer: Reducer = (state: initialStateType = INITIAL_STATE, action) => {
    switch(action.type) {
        case productsTypes.SET_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
            // case productsTypes.EDIT_PRODUCT_SUCCESS:
            //     return {
            //         ...state,
            //         products: state.products.map((product) => {
            //             if (product.documentID === action.payload.documentID) {
            //                 return {
            //                     ...state,
            //                     ...action.payload.updates
            //                 };
            //             }
            //             return product;
            //         })
            //     };
        default:
            return state
    }
};

export default productsReducer;

