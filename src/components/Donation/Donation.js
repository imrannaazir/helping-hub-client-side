import React from 'react';
const Donation = ({ event: { title, img, } }) => {

    return (
        <div className=' w-[270px] h-[320px] relative '>
            <img src={img} alt="" />
            <p className='bg-sky-400 absolute bottom-0 w-[100%]  h-[80px] rounded-b-xl text-xl font-bold text-gray-700 flex justify-center items-center'>{title}</p>

        </div>
    );
};

export default Donation;