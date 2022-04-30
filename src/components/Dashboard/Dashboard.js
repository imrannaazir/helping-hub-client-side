import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'

const Dashboard = () => {
    return (
        <div className=' text-white p-6 h-screen w-[20%] bg-black flex justify-between flex-col'>
            <div>
                <img className=' h-12 mb-12' src={logo} alt="" />
                <div>
                    <p><Link to='/home'>Home</Link></p>
                    <p><Link to='/admin'>Volunteer register List</Link></p>
                    <p><Link to='/add'>Add events</Link></p>
                </div>
            </div>

            <div>
                <button
                >Logout</button>
                <hr />
            </div>
        </div>
    );
};

export default Dashboard;