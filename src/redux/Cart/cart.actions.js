import cartTypes from "./cart.types";

export const addToBasket = product => ({
	type: cartTypes.ADD_TO_BASKET,
	payload: product
});

export const removeFromBasket = productID => ({
	type: cartTypes.REMOVE_FROM_BASKET,
	payload: productID
});

export const clearBasket = () => ({
	type: cartTypes.CLEAR_BASKET
});

export const addQtyItem = productID => ({
	type: cartTypes.ADD_QTY_ITEM,
	payload: productID
});

export const minusQtyItem = productID => ({
	type: cartTypes.MINUS_QTY_ITEM,
	payload: productID
});
//export default {addToBasket};