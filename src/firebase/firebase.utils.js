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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;