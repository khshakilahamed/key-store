import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const OrderPlaced = () => {
    const [singleKeyboard, setSingleKeyboard] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        fetch(`http://localhost:5000/keyboards/${id}`)
        .then(res => res.json())
        .then(data => setSingleKeyboard(data))
    }, []);

    const {_id, name, price, img, brand, category, description} = singleKeyboard;

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28 mt-20'>
                <div className='py-10'>
                    <div className='md:flex'>
                        <div className='md:w-1/2 flex'>
                            <div>
                                <img src={img} alt="" />
                            </div>
                            <div>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className='md:w-1/2'>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderPlaced;