import React from 'react';
import { NavLink } from 'react-router-dom';

const Keyboard = ({keyboard}) => {
    const {_id, name, price, img} = keyboard || {};
    return (
        <div className='m-1 p-2 border drop-shadow-md rounded-md hover:bg-gray-300  '>
            <div className='rounded-md'>
                <img className='rounded-md' src={img} alt="" />
            </div>
            <div className='mt-5'>
                {/* <p className='text-cyan-500'>{brand}</p> */}
                <p className='text-xl '>{name.slice(0, 30)}...</p>
                <p className='text-3xl my-2 font-bold'>&#2547; {price}</p>
                <div className='mt-3 flex justify-between items-center'>
                    <NavLink to={`/orderPlaced/${_id}`}>
                        <button className='bg-cyan-500 rounded-md text-white py-2 px-3 text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Buy Now</button>
                    </NavLink>
                    <NavLink to={`/keyboardDetails/${_id}`}>
                        <button className=' text-cyan-500 underline rounded-md py-2 px-3 text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>View details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Keyboard;