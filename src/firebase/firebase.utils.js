import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB9LLbWpVbnpPpoVLWvNuWQgbWt_my3HGU",
    authDomain: "crwn-db-8e957.firebaseapp.com",
    projectId: "crwn-db-8e957",
    storageBucket: "crwn-db-8e957.appspot.com",
    messagingSenderId: "1000914085143",
    appId: "1:1000914085143:web:dab7533ee43e1770d18352",
    measurementId: "G-820TMPDM0J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)
        return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error storing user data in DB ', err);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;