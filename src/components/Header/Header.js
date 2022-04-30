import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'

const Header = () => {
    const [open, setOpen] = useState(true)
    const [openUser, setOpenUser] = useState(false)
    return (
        <div className=''>
            < div className=' h-[80px] md:flex md:justify-between md:items-center w-[90%] mx-auto ' >

                <div className='h-full'>
                    <img className=' h-[80%]' src={logo} alt="" />
                </div>

                <div className={` md:flex gap-4 text-lg items-center absolute left-0 ${open && 'top-[-500px]'} transition-dura 1s ease-linear md:static w-[100%] md:w-auto text-center bg-white md:bg-transparent`}>
                    <p> <Link to='/'>Home</Link></p>
                    <p>  <Link to='/donation'>Donation</Link></p>
                    <p>   <Link to='/events'>Events</Link></p>
                    <p>  <Link to='/blog'>Blog</Link></p>
                    <p>  <Link to='/register'>
                        <button
                            className=' px-4 py-2 bg-blue-500 rounded-md text-white my-3'>
                            Register
                        </button>
                    </Link></p>
                    <div className=' relative'>  <Link to='/login'>
                        <button
                            onClick={() => setOpenUser(!openUser)}
                            className=' px-4 py-2 bg-gray-500 rounded-md text-white mb-3 md:mb-0'>
                            Login
                        </button>
                    </Link>
                        <div className={` absolute text-left border-2 p-4  rounded-lg shadow-lg ${!openUser ? '-right-[160px] md:-right-[500px]' : 'right-[95px] md:-right-12 top-8 md:top-10'} bg-white`}>
                            <p>Name</p>
                            <p>Email</p>
                            <p><Link to='/admin'>Dashboard</Link></p>
                            <button>Logout</button>
                        </div>
                    </div>
                </div>
            </div >
            <p onClick={() => setOpen(!open)} className=' absolute top-4 right-4 text-xl md:hidden'>
                {
                    open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />
                }
            </p>
        </div >
    );
};

export default Header;