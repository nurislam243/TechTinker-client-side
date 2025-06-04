import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    //Load theme from localStorage
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark' ? false : true;
    });


    //Save to localStorage when theme changes
    useEffect(() => {
        localStorage.setItem('theme', theme ? 'techTinker' : 'dark');
    }, [theme]);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signOut user
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
            console.log('user in the auth state change', currentUser);
        });

        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        loginUser,
        loading,
        user,
        theme,
        setTheme,
        signOutUser

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;