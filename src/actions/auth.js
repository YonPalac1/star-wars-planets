import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/config";

import { types } from '../types';

/* register  */
export const startRegisterWithEmailPassName = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then(({ user }) => {
                user.displayName = name
                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => console.log(error))
    }
}

/* login */
export const startLoginEmailPass = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(getAuth(), email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => console.error(error))
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(getAuth(), googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
            .catch(error => console.error(error))

    }
}

/* logout */
export const startLogout = () => {
    return (dispatch) => {
        signOut(getAuth())
            .then(() => {
                dispatch(logout())
            })
    }
}

export const logout = () => ({
    type: types.logout
})