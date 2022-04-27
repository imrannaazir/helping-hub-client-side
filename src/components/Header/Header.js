import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'

const Header = () => {
    const [open, setOpen] = useState(true)
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
                    <p>  <Link to='/admin'>
                        <button
                            className=' px-4 py-2 bg-gray-500 rounded-md text-white mb-3 md:mb-0'>
                            Admin
                        </button>
                    </Link></p>
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