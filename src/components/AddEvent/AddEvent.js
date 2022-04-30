import React from 'react';
import Dashboard from '../Dashboard/Dashboard';

const AddEvent = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const newEvent = {
            title: e.target.title.value,
            data: e.target.date.value,
            description: e.target.description.value,
            img: e.target.img.value
        }
        console.log(newEvent);
    }
    return (
        <div className='bg-[#fafafa] flex '>
            <Dashboard />
            <div className=' w-full'>
                <p className=' bg-white text-2xl shadow-sm py-2 pl-6'>Add new events</p>
                <form
                    onSubmit={handleSubmit}
                    className=' grid grid-cols-2 bg-white w-[80%] mx-auto mt-12 shadow-md rounded-md py-12'>
                    <div className='ml-10 my-2'>
                        <p>Event Title:</p>
                        <input
                            name='title'
                            className='w-[80%] border-2'
                            type="text" />
                    </div>

                    <div className='ml-10 my-2'>
                        <p>Event Date:</p>
                        <input
                            name="date"
                            className='w-[80%] border-2'
                            type="date" />
                    </div>

                    <div className='ml-10 my-2'>
                        <p>Description:</p>
                        <textarea
                            name='description'
                            className='w-[80%] border-2'
                            type="text"
                        />
                    </div>

                    <div className='ml-10 my-2'>
                        <p>Upload image:</p>
                        <input
                            name="img"
                            className='w-[80%] border-2'
                            type="text"
                        />
                    </div>

                    <button
                        className='bg-sky-400 ml-10 my-2 w-[74%] py-1 text-white font-bold'
                        type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;