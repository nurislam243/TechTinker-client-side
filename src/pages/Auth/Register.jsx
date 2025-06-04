import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Fade } from 'react-awesome-reveal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext/AuthContext';
// import { toast } from 'react-toastify';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [passwordEye, setPasswordEye] = useState(true);
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(true);

    const handleRegistration = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const profileImage = form.photoUrl.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // if (name === "") {
        //     toast.error('⚠️ Please enter your name!', { position: "top-center" });
        //     return;
        // }
        // if (email === "") {
        //     toast.error('⚠️ Please enter your email address!', { position: "top-center" });
        //     return;
        // }
        // if(profileImage === ""){
        //     toast.error('⚠️ Please enter your profile URL', { position: "top-center" });
        //     return;
        // }
        // if (!/\d/.test(password)) {
        //     toast.error('⚠️ Password must include at least one number (0-9).', { position: "top-center" });
        //     return;
        // }
        // if (!/[a-z]/.test(password)) {
        //     toast.error('⚠️ Password must include at least one lowercase letter (a-z).', { position: "top-center" });
        //     return;
        // }
        // if (!/[A-Z]/.test(password)) {
        //     toast.error('⚠️ Password must include at least one uppercase letter (A-Z).', { position: "top-center" });
        //     return;
        // }
        // if (password.length < 6) {
        //     toast.error('⚠️ Password must be at least 6 characters long.', { position: "top-center" });
        //     return;
        // }
        // if (password !== confirmPassword) {
        //     toast.error('❌ Password and Confirm Password do not match.', {
        //         position: "top-center",
        //     });
        //     return;
        // }
        
        
        // create user in the firebase
        createUser(email, password, name, profileImage, navigate)
    }
    return (
        <Fade direction='down' triggerOnce>
            <div>
                <div className="w-full max-w-md p-4 shadow-2xl mt-[20px] sm:mt-[40px] mx-auto black-bg-dark-mode sm:p-8">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl text-accent font-bold">Register</h1>
                        <p className="text-sm">Please Registration your account</p>
                    </div>
                    <form onSubmit={handleRegistration} className="space-y-8 mt-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Enter email address" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
                            </div>
                            <div>
                                <label htmlFor="photoUrl" className="block mb-2 text-sm">Photo URL</label>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="Enter Photo URL" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <div className="relative">
                                    <input type={passwordEye ? "password" : "text"} name="password" id="password" placeholder="Enter password" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
                                    <span onClick={()=>setPasswordEye(!passwordEye)} className="absolute text-2xl mt-3 -ml-10">
                                        {
                                            passwordEye ? <FaEye /> : <FaEyeSlash/>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                                </div>
                                <div className="relative">
                                    <input type={confirmPasswordEye ? "password" : "text"} name="confirmPassword" id="confirmPassword" placeholder="Enter confirm password" className="bg-base-200/70 mt-1 focus:outline focus:outline-base-content/25 px-3.5 py-[9px] rounded-[2px] w-full input-bg-dark-mode" />
                                    <span onClick={()=>setConfirmPasswordEye(!confirmPasswordEye)} className="absolute text-2xl mt-3 -ml-10">
                                        {
                                            confirmPasswordEye ? <FaEye /> : <FaEyeSlash/>
                                        }
                                    </span>
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
                </div>           
            </div>
        </Fade>
    );
};

export default Register;