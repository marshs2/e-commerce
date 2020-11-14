import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC1FJ1zVheQpqFxMl11QWLVYSWTRDt7_sM",
    authDomain: "ecommerce-db-4e20f.firebaseapp.com",
    databaseURL: "https://ecommerce-db-4e20f.firebaseio.com",
    projectId: "ecommerce-db-4e20f",
    storageBucket: "ecommerce-db-4e20f.appspot.com",
    messagingSenderId: "621618618571",
    appId: "1:621618618571:web:138031bc64cb86c45efb4e"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get('users');

    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;