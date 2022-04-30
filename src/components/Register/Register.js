import { async } from '@firebase/util';
import axios from 'axios';
import { stringify } from 'postcss';
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
    console.log((selectedEvent?.date));

    if (loading) {
        return <p>Loading...</p>
    }

    const newVolunteer = {
        name: user?.displayName,
        email: user?.email,
        date: selectedEvent?.data,
        describe: selectedEvent?.description,
        event: selectedEvent?.title
    }
    const postVolunteer = async () => {
        console.log(newVolunteer);

        const { data } = await axios.post('http://localhost:5000/volunteers ', newVolunteer)
        console.log(data);

    }
    postVolunteer()

    return (
        <div>
            <Header />
            <div className='w-[375px]  mx-auto border-2 my-20 rounded-lg shadow-lg px-4 py-8'>
                <p className=' text-lg font-semibold mb-4'>Register as a Volunteer</p>
                <div >
                    <p>Full Name:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm pl-2'
                        value={user?.displayName}
                        type="text"
                        disabled />

                    <p>Your Email:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm pl-2'
                        value={user?.email}
                        type="email"
                        disabled />

                    <p>Date:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm pl-2'
                        value={selectedEvent?.data}
                        type="date"
                        disabled />

                    <p>Description:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm pl-2'
                        value={selectedEvent?.description}
                        type="text"
                        disabled />
                    <p>Event Name:</p>
                    <input
                        className=' border-2 w-[330px] mb-2 py-1 rounded-lg shadow-sm p-2'
                        value={selectedEvent?.title}
                        type="text"
                        disabled />
                    <button
                        onClick={postVolunteer}
                        className='w-[330px]
                    bg-sky-400 py-2 text-white font-bold rounded-lg'>Register</button>
                </div>

            </div>
        </div>
    );
};

export default Register;