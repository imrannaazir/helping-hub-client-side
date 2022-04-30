import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const Admin = () => {
    return (
        <div className='flex bg-[#fafafa]'>
            <Dashboard />
            <div className=' w-full'>
                <p className=' bg-white text-2xl shadow-sm py-2 pl-6'>Volunteer register List</p>
            </div>

        </div>
    );
};

export default Admin;