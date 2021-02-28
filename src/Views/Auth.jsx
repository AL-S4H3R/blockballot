import React, { Fragment } from 'react'
import { firebaseApp } from '../config/firebaseConfig'
import firebase from 'firebase'

const Auth = () => {
    const googleSignIn = async () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        try {
            const res = firebaseApp.auth().signInWithPopup(provider)
            console.log((await res).user)
        }
        catch(err){
            console.error(err)
        }
    }
    return(
        <Fragment>
            <div>
                <button onClick={() => googleSignIn()}>Sign In</button>
            </div>
        </Fragment>
    )
}

export default Auth