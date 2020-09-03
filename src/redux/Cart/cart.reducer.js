import cartTypes from "./cart.types";


const cartReducer = (state = [], action) => {
	switch (action.type) {
		case cartTypes.ADD_TO_BASKET:
			return state.some(product => product.documentID === action.payload.documentID)
				? state
				: [...state, action.payload];
		case cartTypes.REMOVE_FROM_BASKET:
			return state.filter(product => product.documentID !== action.payload);
		case cartTypes.CLEAR_BASKET:
			return [];
		case cartTypes.ADD_QTY_ITEM:
			return state.map((product) => {
				if (product.documentID === action.payload) {
					return {
						...product,
						quantity: product.quantity + 1
					}
				}
				return product;
			});
		case cartTypes.MINUS_QTY_ITEM:
			return state.map((product) => {
				if (product.documentID === action.payload) {
					return {
						...product,
						quantity: product.quantity - 1
					}
				}
				return product;
			});
		default:
			return state;
	}
};

export default cartReducer;