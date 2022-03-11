import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const KeyboardDetails = () => {
    const [singleKeyboard, setSingleKeyboard] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        fetch(`https://fathomless-bastion-17049.herokuapp.com/keyboards/${id}`)
        .then(res => res.json())
        .then(data => setSingleKeyboard(data))
    }, []);

    const {_id, name, price, img, brand, category, description} = singleKeyboard;

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28 mt-20'>
                <div className='py-10'>
                    <div>
                        <h2 className='text-4xl text-center py-10'>Details</h2>
                        <div className=' md:flex gap-6'>
                            <div className='md:w-1/2 flex justify-center items-center border'>
                                <img className='h-80' src={img} alt="" />
                            </div>
                            <div className='md:w-1/2 mt-10 md:mt-0 space-y-4'>
                                <h2 className='text-3xl font-thin'>{name}</h2>
                                <p className='text-cyan-500'>{brand}</p>
                                <p className='text-cyan-500'>{category}</p>
                                <h2 className='text-4xl'>&#2547;  {price}</h2>
                                <div>
                                    <NavLink to={`/orderPlaced/${_id}`}>
                                        <button className='bg-cyan-500 rounded-md text-white py-2 px-3 text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Buy Now</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl p-2 border inline-block border-b-0'>Description</h2>
                            <p className='p-3'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default KeyboardDetails;