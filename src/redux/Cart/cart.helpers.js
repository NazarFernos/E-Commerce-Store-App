import { firestore } from "../../firebase/utils";


export const handleAddProductToCart = (product )=> {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc()
            .set(product)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    });
}

