import { firestore } from "../../firebase/utils";


type ProductType = {
    [x: string]: any; 
    productCategory?: string; 
    productName?: string; 
    productThumbnail?: string; 
    productPrice?: string; 
    productAdminUserUID?: string; 
    createdDate?: Date;
}

export const handleAddProduct = (product: ProductType ): Promise<any> => {
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

export const handleDeleteProduct = (documentID: string | undefined): Promise<any> => {
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