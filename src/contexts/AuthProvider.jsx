import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import {auth} from '../firebase/firebase.init'

const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const removeUser = () =>{
        return deleteUser (auth.currentUser)
    }

    const userInfo = {
        createUser,
        removeUser,
        
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;