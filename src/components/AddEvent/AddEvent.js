import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const AddEvent = () => {
    return (
        <div className='bg-[#fafafa] flex '>
            <Dashboard />
            <div className=' w-full'>
                <p className=' bg-white text-2xl shadow-sm py-2 pl-6'>Add new events</p>
            </div>
        </div>
    );
};

export default AddEvent;