import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {
    const {signInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28 mt-20'>
                <div className='w-full py-14'>
                    <h2 className='text-center text-7xl font-thin py-10'>LogIn</h2>
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col w-11/12 md:w-2/4'>
                            <label className='text-xl font-thin'  htmlFor="userEmail">Email</label>
                            <input className='px-3 py-1 font-thin rounded outline-none border border-gray-500' type="email" name="" id="userEmail" placeholder='your email' required/>
                            <br />
                            <label className='text-xl font-thin'  htmlFor="userPassword">Password</label>
                            <input className='px-3 py-1 font-thin rounded outline-none border border-gray-500' type="password" name="" id="userPassword" placeholder='your password' required/>
                            <div className='text-center my-5'>
                                <p className='text-sm cursor-pointer'>Forgot password?</p>
                                <button className='py-2 px-4 rounded text-xl font-bold bg-cyan-500 hover:bg-cyan-600 my-3'>Sign In</button>
                                <NavLink to="/signup">
                                    <p className='text-sm cursor-pointer'>Create Account</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button onClick={handleGoogleSignIn} className='bg-red-400 inline-block py-1 px-2'>Sign in with google</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;