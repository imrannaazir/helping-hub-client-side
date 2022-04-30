import { faAdd, faHouse, faRightToBracket, faUsers, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'

const Dashboard = () => {
    return (
        <div className=' text-white p-6 h-screen w-[20%] bg-black flex justify-between flex-col'>
            <div>
                <img className=' h-12 mb-12' src={logo} alt="" />
                <div className=' flex flex-col gap-6'>
                    <p><Link to='/home'><FontAwesomeIcon icon={faHouse} /> Home</Link></p>
                    <p><Link to='/admin'><FontAwesomeIcon icon={faUsers} /> Volunteer register List</Link></p>
                    <p><Link to='/add'><FontAwesomeIcon icon={faAdd} /> Add events</Link></p>
                </div>
            </div>

            <div>
                <button
                ><FontAwesomeIcon icon={faRightToBracket} /> Logout</button>
                <hr />
            </div>
        </div>
    );
};

export default Dashboard;