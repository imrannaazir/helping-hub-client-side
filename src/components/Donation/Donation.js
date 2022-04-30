import React from 'react';
const Donation = ({ event: { title, img, } }) => {

    return (
        <div className=' w-[270px] h-[320px]'>
            <img src={img} alt="" />
            <p>{title}</p>

        </div>
    );
};

export default Donation;