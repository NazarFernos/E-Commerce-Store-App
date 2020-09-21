import orderTypes from "./orders.types";


const ordersReducer = (state = [], action) => {
	switch (action.type) {
		case orderTypes.ADD_TO_BASKET:
			return state.some(product => product.documentID === action.payload.documentID)
				? state
				: [...state, action.payload];
		default:
			return state;
	}
};

export default ordersReducer;