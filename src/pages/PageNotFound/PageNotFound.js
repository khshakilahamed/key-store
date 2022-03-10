import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
                <h2 className='text-9xl font-bold'>404</h2>
                <p className='text-2xl'>Page not Found</p>
                <NavLink to="/home">
                    <button className='border text-white font-bold bg-cyan-500 hover:bg-cyan-600 px-4 py-2 my-5'>Back To Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;