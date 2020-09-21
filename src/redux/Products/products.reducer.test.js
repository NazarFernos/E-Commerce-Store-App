import productsReducer from "./products.reducer";
import productsTypes from "./products.types";

it('it should return default state', () => {
    let newState = productsReducer(undefined, {});
    expect(newState).toEqual({"products": []});
});

it('Should return new state if receiving type', () => {

    const products = [];
    const newState = productsReducer(undefined, {
        type: productsTypes.SET_PRODUCTS,
        payload: products
    });
    expect(newState).toEqual({"products": []});

});
