import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const AddEvent = () => {
    return (
        <div className='bg-[#fafafa] flex '>
            <Dashboard />
            <div className=' w-full'>
                <p className=' bg-white text-2xl shadow-sm py-2 pl-6'>Add new events</p>
                <div className=' grid grid-cols-2 bg-white w-[80%] mx-auto mt-12 shadow-md rounded-md py-12'>
                    <div className='ml-10 my-2'>
                        <p>Event Title:</p>
                        <input className='w-[80%] border-2' type="text" name="" id="" />
                    </div>
                    <div className='ml-10 my-2'>
                        <p>Event Date:</p>
                        <input className='w-[80%] border-2' type="text" name="" id="" />
                    </div>
                    <div className='ml-10 my-2'>
                        <p>Description:</p>
                        <textarea className='w-[80%] border-2' type="" name="" id="" />
                    </div>
                    <div className='ml-10 my-2'>
                        <p>Upload image:</p>
                        <input className='w-[80%] border-2' type="text" name="" id="" />
                    </div>

                    <button className='bg-sky-400 ml-10 my-2 w-[74%] py-1 text-white font-bold'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;