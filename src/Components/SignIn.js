import React from 'react'
import {FcGoogle} from 'react-icons/fc';

import firebase from 'firebase/app';
import {auth} from './firebase';


const SignIn = () => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    const signInAnonymously = () => {
        firebase.auth().signInAnonymously()
        .then(() => {
          // Signed in..
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    }



    return (
        <>
        <div className="flex">
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google <FcGoogle/></button>
            <button className="sign-in-anon" onClick={signInAnonymously}>Sign in with Anonymously</button>
            <p>Be kind to other or you will be banned for life!</p>
        </div>
        </>
    )
}

export default SignIn
