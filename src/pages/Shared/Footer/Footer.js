import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlus, FaMapMarkerAlt, FaDoorOpen, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div style={{backgroundColor:"#202B37"}}>
            <div  className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28'>
                <div className='md:flex gap-10 py-10'>

                    <div className='md:w-1/2 py-10 md:py-0 sm:flex justify-between gap-5'>

                        <div className='sm:w-1/2 flex items-center py-10 sm:py-0'>
                            <h1 className='py-2 px-4 text-white font-bold bg-cyan-500 rounded-3xl mr-3'>K</h1>
                            <h1 className='text-3xl font-bold text-cyan-500'>KeyStore</h1>
                        </div>

                        <div className='sm:w-1/2 text-white'>
                            <h2 className='text-xl font-bold'>Address</h2>
                            <p>Level# 8, Computer City Center, <br /> New Elephant Road, Dhaka</p>
                        </div>

                    </div>
                    <div className='md:w-1/2 flex flex-col sm:flex-row justify-between gap-5 text-white'>

                        <div className='sm:w-1/2'>
                            <h2 className='text-xl font-bold'>Hours</h2>
                            <p>Monday - Saturday: 9:00am - 18:00pm</p>
                            <p>Sunday 10:00am - 5:00pm</p>
                        </div>

                        <div className='sm:w-1/2'>
                            <h2 className='text-xl font-bold'>Follow us on</h2>
                            <p className='flex items-center text-white py-4'>
                                <a className='px-3 text-xl' href="#"><FaFacebook/></a>
                                <a className='px-3 text-xl' href="#"><FaTwitter/></a>
                                <a className='px-3 text-xl' href="#"><FaGooglePlus/></a>
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='py-6 text-white'>
                    <p className='text-center'>All copyright reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;