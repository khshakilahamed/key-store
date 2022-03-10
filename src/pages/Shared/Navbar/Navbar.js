import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{backgroundColor:"#202B37"}} className="fixed top-0 right-0 left-0 z-10">
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28'>
                <div className='flex justify-between items-center text-white py-5'>
                    <div className='flex justify-center items-center'>
                        <NavLink to='/'>
                            <h1 className='py-2 px-4 font-bold bg-cyan-500 rounded-3xl mr-1'>K</h1>
                        </NavLink>
                        <NavLink to='/'>
                            <h1 className='text-3xl font-bold text-cyan-500'>KeyStore</h1>
                        </NavLink>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <li  className='list-none text-lg hover:text-cyan-500'>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li  className='list-none text-lg hover:text-cyan-500'>
                            <NavLink to="/explore_keyboards">Explore</NavLink>
                        </li>
                        <li  className='list-none text-lg hover:text-cyan-500'><a href="#">Dashboard</a></li>
                        {/* <li  className='list-none text-lg hover:text-cyan-500'><a href="#">About</a></li> */}
                        <li  className='list-none text-lg hover:text-cyan-700 border text-cyan-500 border-cyan-500 px-3 py-1'>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;