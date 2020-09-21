import { firestore } from "../../firebase/utils";


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

export const handleFetchProducts = ({ filterType, startAfterDoc, persistProducts=[] }: any): Promise<any> => {
    return new Promise((resolve, reject) => {

        const pageSize = 6;

        let ref = firestore
            .collection('products')
            .orderBy('createdDate')
            .limit(pageSize)
            //.where('productCategory', '==', filterType);

        if (filterType) ref = ref.where('productCategory', '==', filterType);
        if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

        ref.get()
            .then(snapshot => {
                const totalCount = snapshot.size;

                const data = [
                    ...persistProducts,
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ];

                resolve({
                    data,
                    queryDoc: snapshot.docs[totalCount - 1],
                    isLastPage: totalCount < 1
                });
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
