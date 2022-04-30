import axios from 'axios';
import React, { useEffect, useState } from 'react';
import bg from '../../assets/images/bg.jpg'
import Donation from '../Donation/Donation';
import Header from '../Header/Header';

const Home = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        const loadEvents = async () => {
            const { data } = await axios.get('http://localhost:5000/events')
            setEvents(data);
        }
        loadEvents()
    }, [])

    return (
        <div>
            <Header />
            <div>
                <img className=' w-full absolute top-0 h-[350px] -z-50 opacity-20 ' src={bg} alt="" />
                <div>
                    <p className=' text-center text-4xl font-bold text-gray-700 uppercase'>I grow by helping people in need.</p>
                    <div className=' text-center mt-6'>
                        <input className=' h-10 w-[300px] rounded-l-md border-2 pl-4' type="text" placeholder='Search...' />
                        <button className=' h-10 bg-blue-400 px-4 rounded-r-md text-white'>Search</button>
                    </div>
                    <div className=' grid grid-cols-3 mt-20 w-[80%] mx-auto'>
                        {
                            events.map(event => <Donation key={event._id} event={event}>{event.title}</Donation>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;