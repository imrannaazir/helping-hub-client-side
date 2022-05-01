import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import Header from '../Header/Header';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [modal, setModal] = useState(false)
    const [confirm, setConfirm] = useState(false)


    useEffect(() => {
        (async function () {
            const { data } = await axios.get('http://localhost:5000/volunteers ')
            setEvents(data)
        }
        )()
    }, [])

    const handleDelete = id => {
        setModal(true)
        console.log('on the setrest');
        console.log(confirm);
        if (confirm) {
            const url = `http://localhost:5000/volunteers/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            const restEvents = events.filter(event => event._id !== id)
            setEvents(restEvents);
            console.log('deleted');
        }
        else return

    }
    console.log('bottom confirm', confirm);
    return (
        <div className=' min-h-screen bg-[#fafafa]'>
            <Header />
            {
                modal && <ConfirmModal setModal={setModal} setConfirm={setConfirm} />
            }
            <p className=' my-[80px] text-3xl text-center font-semibold'>Events that you have booked:</p>
            <div className=' w-[80%] mx-auto grid md:grid-cols-2 gap-8 '>
                {
                    events.map(event =>
                        <div className='flex bg-white shadow-lg rounded-md relative' key={event._id}>
                            <img className=' w-[194px] h-[173px]' src={event.img} alt="" />
                            <div className=' ml-4 mt-4'>

                                <p className=' text-2xl font-semibold'>{event.event}</p>
                                <p className=' text-xl'>{event.date}</p>


                                <button
                                    onClick={() => handleDelete(event._id)}
                                    className=' absolute bottom-8 right-8 py-2 px-4 bg-sky-400 rounded-md'>Cancel</button>
                            </div>
                        </div>
                    )
                }
            </div>

            {
                events.length === 0 && <p className='text-center text-4xl font-semibold text-gray-600'>Not Found</p>
            }
        </div>
    );
};

export default Events;