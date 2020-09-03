import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' }); 

export const handleUserProfile = async ({ userAuth, additionalData }: any) => {
    if (!userAuth) return;
    const { uid } = userAuth;

    const userRef = firestore.doc(`users/${uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const timeStamp: Date = new Date();
        const userRoles: string[] = ['user'];

        try {
            await userRef.set({
                displayName,
                email,
                createDate: timeStamp,
                userRoles,
                ...additionalData
            });
        } catch(err) {
            console.log(err)
        }
    }
    
    return userRef;
};

export const getCurrentUser = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
}