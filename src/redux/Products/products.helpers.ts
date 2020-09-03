import { firestore } from "../../firebase/utils";
import { resolve } from "path";


type ProductType = {
    [x: string]: any; 
    productCategory?: string; 
    productName?: string; 
    productThumbnail?: string; 
    productPrice?: string; 
    productAdminUserUID?: string; 
    createdDate?: Date;
    maxQuantity?: number
    quantity?: number,
}

export const handleAddProduct = (product: ProductType ): Promise<void> => {
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

export const handleFetchProducts = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .get()
            .then(snapshot => {
                const productsArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                resolve(productsArray);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleDeleteProduct = (documentID: string | undefined): Promise<void> => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(documentID)
            .delete()
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    });
}

export const handleEditProduct = (documentID: string | undefined, product: ProductType): Promise<void> => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(documentID)
            .update(product)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    });
}
