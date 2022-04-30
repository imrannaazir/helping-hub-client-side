import React from 'react';
import Slide from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';
const Donation = ({ event: { title, img, _id } }) => {
    const navigate = useNavigate()
    const handleNavigate = id => {
        navigate(`/register/${id}`)
    }
    return (
        <Slide left>
            <div
                onClick={() => handleNavigate(_id)} className=' w-[270px] h-[320px] relative '>
                <img src={img} alt="" />
                <p className='bg-sky-400 absolute bottom-0 w-[100%]  h-[80px] rounded-b-xl text-xl font-bold text-gray-700 flex justify-center items-center'>{title}</p>

            </div>
        </Slide  >
    );
};

export default Donation;