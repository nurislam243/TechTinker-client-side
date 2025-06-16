import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from '../AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

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


    // create user using email and password
    const createUser = (email, password, name, profileImage, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => { 
        const passwordUser = userCredential.user;
        setUser(passwordUser);

        // update profile
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: profileImage
        }).then(() => {
            setUser({
            ...auth.currentUser, name, profileImage
            });
        }).catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'error',
            text: error
          })
        });

        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'Welcome . Your account has been created successfully.',
        });

        navigate('/')
        })

        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                Swal.fire('Email Already Registered', 'This email is already registered! Please try logging in.', 'error');
              } else if (error.code === 'auth/invalid-email') {
                Swal.fire('Invalid Email', 'Please enter a valid email address.', 'error');
              } else {
                Swal.fire('Error', error.message, 'error');
              }
        });

    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            if(currentUser?.email){
                const userData = { email: currentUser.email };
                axios.post('https://techtinker-server.vercel.app/jwt', userData, {  
                    withCredentials: true        
                })
                .then(res =>{
                    console.log('token after jwt', res.data);
                })
                .catch(error => console.log(error))
            }
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
        setLoading,
        user,
        setUser,
        theme,
        setTheme,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;