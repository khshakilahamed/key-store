import React, { useEffect, useState } from 'react';
import Keyboard from '../Keyboard/Keyboard';

const KeyboardsList = () => {

    const [keyboards, setKeyboards] = useState([]);

    // /fakeData.json

    useEffect(() => {
        fetch('http://localhost:5000/keyboards')
        .then(res => res.json())
        .then(data => setKeyboards(data))
    }, []);

    
    return (
        <div className='mx-10 md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-28'>
            <div className='my-20'>
                <div style={{color:"#202B37"}} className="text-center">
                    <h2  className='text-4xl font-bold'>Keyboards For You</h2>
                    <p>get your favorite one</p>
                </div>

                <div className='grid md:grid-cols-2 xl:grid-cols-3 md:gap-2 xl:gap-4 mt-20'>
                    {
                        keyboards.slice(0, 6).map(keyboard => <Keyboard keyboard={keyboard} key={keyboard._id}></Keyboard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default KeyboardsList;