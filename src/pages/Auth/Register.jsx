import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Fade } from 'react-awesome-reveal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { MdErrorOutline } from 'react-icons/md';
import { VscError } from 'react-icons/vsc';
import { Helmet } from 'react-helmet-async';


const Register = () => {
    const {createUser, setUser} = useContext(AuthContext);
    const [passwordEye, setPasswordEye] = useState(true);
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(true);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [photoError, setPhotoError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleRegistration = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const profileImage = form.photoUrl.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;


        // reset error
        setNameError('');
        setEmailError('');
        setPhotoError('');
        setPasswordError('');
        setConfirmPasswordError('');



        if (name === "") {
            setNameError('Please enter your name!');
            return;
        }
        if (email === "") {
            setEmailError('Please enter your email address!');
            return;
        }
        if(profileImage === ""){
            setPhotoError('Please enter your profile URL!');
            return;
        }
        if (!/\d/.test(password)) {
            setPasswordError('Password must include at least one number (0-9)!');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError('Password must include at least one lowercase letter (a-z)!')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must include at least one uppercase letter (A-Z)!')
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long!')
            return;
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError('Password and Confirm Password do not match!');
            return;
        }
        
        
        // create user in the firebase
        
        createUser(email, password, name, profileImage, navigate)
    }

    // login with google
    const handleLoginGoogle = () =>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
              const googleUser = result.user;
              console.log(googleUser);
              setUser(googleUser);
              Swal.fire('Login Successful', 'You have successfully logged in.', 'success');
              navigate("/");
            }).catch((error) => {
             Swal.fire('Error', error, 'error');
        });
    }
    return (
        <Fade direction='down' triggerOnce>
            <Helmet>
                <title>Register | TechTinker</title>
            </Helmet>

            <div className='pt-4 pb-12 px-2 @min-[476px]:px-0'>
                <div className="w-full max-w-md p-4 shadow-2xl mx-auto black-bg-dark-mode sm:p-8 border border-gray-200 rounded">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl text-secondary font-bold">Register</h1>
                        <p className="text-sm">Please Registration your account</p>
                    </div>
                    <form onSubmit={handleRegistration} className="space-y-8 mt-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" />
                                <p className="text-error text-sm mt-1.5">{nameError}</p>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Enter email address" className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" />
                                <p className="text-error text-sm mt-1.5">{emailError}</p>
                            </div>
                            <div>
                                <label htmlFor="photoUrl" className="block mb-2 text-sm">Photo URL</label>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="Enter Photo URL" className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" />
                                <p className="text-error text-sm mt-1.5">{photoError}</p>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <div className="relative">
                                    <input type={passwordEye ? "password" : "text"} name="password" id="password" placeholder="Enter password" className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" />
                                    <span onClick={()=>setPasswordEye(!passwordEye)} className="absolute text-2xl mt-3 -ml-10">
                                        {
                                            passwordEye ? <FaEye /> : <FaEyeSlash/>
                                        }
                                    </span>
                                    <p className="text-error text-sm mt-1.5">{passwordError}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                                </div>
                                <div className="relative">
                                    <input type={confirmPasswordEye ? "password" : "text"} name="confirmPassword" id="confirmPassword" placeholder="Enter confirm password" className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" />
                                    <span onClick={()=>setConfirmPasswordEye(!confirmPasswordEye)} className="absolute text-2xl mt-3 -ml-10">
                                        {
                                            confirmPasswordEye ? <FaEye /> : <FaEyeSlash/>
                                        }
                                    </span>
                                    <p className="text-error text-sm mt-1.5">{confirmPasswordError}</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 py-5 font-semibold btn bg-primary/90 hover:bg-primary/40 cursor-pointer rounded-[2px] text-white sm:text-[16px]">Register</button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account ? 
                                <Link rel="noopener noreferrer" to={'/login'} href="#" className="hover:underline dark:text-violet-600 text-blue-700 blueLight-text-dark-mode"> Login</Link>
                            </p>
                        </div>
                    </form>

                    {/* or */}
                    <div className="flex items-center w-full my-4">
                        <hr  className="w-full" />
                        <p className="px-3">OR</p>
                        <hr  className="w-full" />
                    </div>

                    {/* login google */}
                    <div className="my-6 space-y-4">
                        <button aria-label="Login with Google" onClick={handleLoginGoogle} type="button" className="flex items-center justify-center mt-1 outline cursor-pointer outline-base-content/50 focus:outline-base-content px-3.5 py-[9px] rounded-[2px] w-full text-lg gap-2 hover:bg-base-300">
                            <FcGoogle size={25}/>
                            <p>Continue with Google</p>
                        </button>
                    </div>
                </div>           
            </div>
        </Fade>
    );
};

export default Register;