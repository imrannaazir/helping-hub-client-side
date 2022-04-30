import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../Header/Header';

const Register = () => {
    const { id } = useParams()
    const [user, loading] = useAuthState(auth)

    const [events, setEvents] = useState([])
    useEffect(() => {
        const loadEvents = async () => {
            const { data } = await axios.get('http://localhost:5000/events')
            setEvents(data);
        }
        loadEvents()
    }, [])


    const selectedEvent = events.find(event => event._id === id)
    console.log(selectedEvent);

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <Header />
            <div className='w-[375px]  mx-auto border-2 my-20 rounded-lg shadow-lg px-4 py-8'>
                <p className=' text-lg font-semibold mb-4'>Register as a Volunteer</p>
                <form >
                    <p>Full Name:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm pl-2'
                        value={user.displayName}
                        type="text"
                        disabled />

                    <p>Your Email:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm pl-2'
                        value={user.email}
                        type="email"
                        disabled />

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