import React from 'react'
import { GoSignOut } from 'react-icons/go';
import {auth} from './firebase';


const SignOut = () => {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out<GoSignOut/></button>
    )
}

export default SignOut
