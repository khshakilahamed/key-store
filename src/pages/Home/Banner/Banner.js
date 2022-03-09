import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner_container mt-20'>
            <div className='h-5/6'>
                <div className='h-full flex justify-center items-center text-white'>
                    <div className='text-center space-y-3'>
                        <h2 className='text-3xl md:text-6xl font-bold'>GAME READY</h2>
                        <h2 className='text-xl md:text-3xl '>At KeyStore, we're passionate about providing premium gaming gears <br /> that helps gamers Go For Glory.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;