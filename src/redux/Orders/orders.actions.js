import orderTypes from "./orders.types";

export const addToBasket = product => ({
	type: orderTypes.ADD_TO_BASKET,
	payload: product
});

export const removeFromBasket = productID => ({
	type: orderTypes.REMOVE_FROM_BASKET,
	payload: productID
});

export const clearBasket = () => ({
	type: orderTypes.CLEAR_BASKET
});

export const addQtyItem = productID => ({
	type: orderTypes.ADD_QTY_ITEM,
	payload: productID
});

export const minusQtyItem = productID => ({
	type: orderTypes.MINUS_QTY_ITEM,
	payload: productID
});
