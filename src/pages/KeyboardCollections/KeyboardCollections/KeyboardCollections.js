import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Keyboard from '../Keyboard/Keyboard';

const KeyboardCollections = () => {
    const [keyboards, setKeyboards] = useState([]);

    // /fakeData.json

    useEffect(() => {
        fetch('https://fathomless-bastion-17049.herokuapp.com/keyboards')
        .then(res => res.json())
        .then(data => setKeyboards(data))
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-20'>
                <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28 py-30'>
                    <h2 style={{color:"#202B37"}} className='py-10 text-4xl font-bold text-center'>Get Your Favourite One</h2>
                    <div className='text-center pb-10'>
                        <input className='border px-3 py-2 w-1/3' type="text" placeholder='Search Here'/>
                        <button className='px-3 py-2 bg-cyan-500'>Search</button>
                    </div>
                    <div className='grid md:grid-cols-3 xl:grid-cols-4 md:gap-2 xl:gap-4 '>
                        {
                            keyboards.map(keyboard => <Keyboard keyboard={keyboard} key={keyboard._id}></Keyboard>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default KeyboardCollections;