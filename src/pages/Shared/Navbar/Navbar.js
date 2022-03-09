import React from 'react';

const Navbar = () => {
    return (
        <div style={{backgroundColor:"#202B37"}} className="fixed top-0 right-0 left-0 z-10">
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28'>
                <div className='flex justify-between items-center text-white py-5'>
                    <div className='flex justify-center items-center'>
                        <h1 className='py-2 px-4 font-bold bg-cyan-500 rounded-3xl mr-3'>K</h1>
                        <h1 className='text-3xl font-bold text-cyan-500'>KeyStore</h1>
                    </div>
                    <div className='flex gap-4'>
                        <li  className='list-none text-lg hover:text-cyan-500'><a href="#">Home</a></li>
                        <li  className='list-none text-lg hover:text-cyan-500'><a href="#">Explore</a></li>
                        <li  className='list-none text-lg hover:text-cyan-500'><a href="#">Dashboard</a></li>
                        <li  className='list-none text-lg hover:text-cyan-500'><a href="#">About</a></li>
                        <li  className='list-none text-lg hover:text-cyan-500'><a href="#">Login</a></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;