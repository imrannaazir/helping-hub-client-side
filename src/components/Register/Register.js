import React from 'react';
import Header from '../Header/Header';

const Register = () => {
    return (
        <div>
            <Header />
            <div className='w-[375px]  mx-auto border-2 mt-20 rounded-lg shadow-lg px-4 py-8'>
                <p className=' text-lg font-semibold mb-4'>Register as a Volunteer</p>
                <form >
                    <p>Full Name:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm'
                        name='name'
                        type="text" />
                    <p>Your Email:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm'
                        name='email'
                        type="email" />
                    <p>Date:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm'
                        name='date'
                        type="text" />
                    <p>Description:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm'
                        name='description'
                        type="text" />
                    <p>Event Name:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm'
                        name='event'
                        type="text" />
                    <button className='w-[330px]
                    bg-sky-400 py-2 text-white font-bold rounded-lg'>Register</button>
                </form>

            </div>
        </div>
    );
};

export default Register;