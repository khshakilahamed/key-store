import React from 'react';
import specialKeyboard from '../../../images/rk84.jpg'

const SpecialItem = () => {
    return (
        <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28'>
            <div className='my-20 md:flex items-center gap-4'>
                <div className='md:w-1/2'>
                    <img className='' src={specialKeyboard} alt="" />
                </div>
                <div style={{color:"#202B37"}} className='md:w-1/2 mt-10 md:mt-0'>
                    <p className='border border-black rounded-md p-10 text-lg'>If you are looking for a perfect wireless 75% gaming mechanical keyboard, the Royal Kludge RK84 is one of the best wireless 75% mechanical keyboards out there.
                        <p className='text-center mt-5 text-cyan-500 cursor-pointer font-bold text-xl underline'>more</p>
                    </p>     
                </div>
            </div>
        </div>
    );
};

export default SpecialItem;