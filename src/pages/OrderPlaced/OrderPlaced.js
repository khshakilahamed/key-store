import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const OrderPlaced = () => {
    const {user} = useAuth();
    const [singleKeyboard, setSingleKeyboard] = useState({});
    const {id} = useParams();

    const numberRef = useRef();
    const addressRef = useRef();

    

    const date = new Date();
    // console.log(date);

    useEffect(()=> {
        fetch(`https://fathomless-bastion-17049.herokuapp.com/keyboards/${id}`)
        .then(res => res.json())
        .then(data => setSingleKeyboard(data))
    }, []);


    const handlePlaceOrder = (e) => {
        e.preventDefault();

        const userNumber = numberRef.current.value;
        const userAddress = addressRef.current.value;
        const orderStatus = 'pending';

        const {id, name, img, price, description, brand, category} = singleKeyboard;

        // console.log(...rest)

        const order = {userNumber, userAddress, date, orderStatus, id, name, img, price, description, brand, category}

        if(userNumber.length===0 || userAddress.length===0){
            alert('Please provide your name & phone number');
        }
        else{
            fetch(`http://localhost:5000/orders`, {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    window.confirm('Your Order Successful.');
                    e.target.reset();
                }
            })

        }
    }



    const {_id, name, price, img} = singleKeyboard;

    return (
        <div>
            <Navbar></Navbar>
            <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28 mt-20'>
                <div className='py-14'>
                    <div className='md:flex gap-4'>
                        <div className='md:w-1/2 sm:flex gap-4 py-10'>
                            <div className='sm:w-1/2 border'>
                                <img className='' src={img} alt="" />
                            </div>
                            <div className='sm:w-1/2 space-y-4'>
                                <h2 className='font-thin text-xl'>{name}</h2>
                                <p className='text-4xl font-bold'>&#2547; {price}</p>
                                <NavLink to={`/keyboardDetails/${_id}`}>
                                    <button className=' text-cyan-500 underline rounded-md py-2 px-3 text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>View details</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className='md:w-1/2 py-10'>
                            <h2 className='bg-cyan-500 text-center py-2 px-3 text-xl'>Write here delivery details</h2>
                            <div >
                                <form className='flex flex-col' onSubmit={handlePlaceOrder}>
                                    <input className='py-2 border border-gray-200 my-2  px-3 rounded outline-none' value={user?.displayName} type="text" placeholder='name'/>
                                    <input className='py-2 border border-gray-200 my-2  px-3 rounded outline-none' value={user?.email} type="email" name="" id="" placeholder='email'/>
                                    <input className='py-2 border border-gray-200 my-2  px-3 rounded outline-none' ref={numberRef} type="number" name="" id="" placeholder='number'/>
                                    <textarea className='py-2 border border-gray-200 my-2  px-3 rounded outline-none' ref={addressRef} name="" id="" cols="30" rows="5" placeholder='address'></textarea>
                                  
                                    <input  className='bg-cyan-500 px-3 py-2 cursor-pointer rounded text-xl' type="submit" value="Order Place" />
                                         
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderPlaced;