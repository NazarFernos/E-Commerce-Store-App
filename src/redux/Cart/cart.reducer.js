import cartTypes from "./cart.types";
import { handleAddToCart, handleReduceCartItem, handleRemoveCartItem } from "./cart.utils";


const INITIAL_STATE = {
	cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: handleAddToCart({
					prevCartItems: state.cartItems,
					nextCartItem: action.payload
				})
			};
		case cartTypes.REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: handleRemoveCartItem({
					prevCartItems: state.cartItems,
					cartItemToRemove: action.payload
				})
			};
		case cartTypes.REDUCE_CART_ITEM:
			return {
				...state,
				cartItems: handleReduceCartItem({
					prevCartItems: state.cartItems,
					cartItemToReduce: action.payload
				})
			}		
		case cartTypes.CLEAR_CART:
			return {
				...state,
				...INITIAL_STATE
			};
		// case cartTypes.ADD_QTY_ITEM:
		// 	return state.map((product) => {
		// 		if (product.documentID === action.payload) {
		// 			return {
		// 				...product,
		// 				quantity: product.quantity + 1
		// 			}
		// 		}
		// 		return product;
		// 	});
		// case cartTypes.MINUS_QTY_ITEM:
		// 	return state.map((product) => {
		// 		if (product.documentID === action.payload) {
		// 			return {
		// 				...product,
		// 				quantity: product.quantity - 1
		// 			}
		// 		}
		// 		return product;
		// 	});
		default:
			return state;
	}
};

export default cartReducer;