import React from 'react';
import bg from '../../assets/images/bg.jpg'

const Home = () => {
    return (
        <div>
            <img className=' w-full absolute top-0 h-[350px] -z-50 opacity-20 ' src={bg} alt="" />
            <div>
                <p className=' text-center text-4xl font-bold text-gray-700 uppercase'>I grow by helping people in need.</p>
                <div className=' text-center mt-6'>
                    <input className=' h-10 w-[300px] rounded-l-md border-2 pl-4' type="text" placeholder='Search...' />
                    <button className=' h-10 bg-blue-400 px-4 rounded-r-md text-white'>Search</button>
                </div>
            </div>

        </div>
    );
};

export default Home;