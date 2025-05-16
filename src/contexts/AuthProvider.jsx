import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase.init'

const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const removeUser = () =>{
        return deleteUser (auth.currentUser)
    }

    const userInfo = {
        createUser,
        removeUser,
        signInUser,
        
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;