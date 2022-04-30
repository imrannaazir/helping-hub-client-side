import { faArrowRightToBracket, faBars, faCaretDown, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'
import auth from '../../firebase.init';

const Header = () => {
    const [open, setOpen] = useState(true)
    const [openUser, setOpenUser] = useState(false)
    const [user] = useAuthState(auth)
    const [nav, setNav] = useState(false)
    const navigate = useNavigate()

    const changeBackground = () => {

        if (window.scrollY >= 90) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    const handleNavigate = () => {
        navigate('/');
        toast.error('Please choose a event!', {
            icon: '😒',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
    }
    return (
        <div className={`sticky top-0 h-[80px] ${!nav ? 'bg-transparent' : 'bg-white'} z-50`}>
            < div className=' h-[80px] md:flex md:justify-between md:items-center w-[90%] mx-auto ' >

                <div className='h-full'>
                    <img className=' h-[80%]' src={logo} alt="" />
                </div>

                <div className={` md:flex gap-4 text-lg items-center absolute left-0 ${open && 'top-[-500px]'} transition-dura 1s ease-linear md:static w-[100%] md:w-auto text-center bg-white md:bg-transparent py-2`}>
                    <p> <Link to='/'>Home</Link></p>
                    <p>  <a href='/#donation'>Donation</a></p>
                    <p>   <Link to='/events'>Events</Link></p>
                    <p>  <Link to='/blog'>Blog</Link></p>

                    <span onClick={handleNavigate} className=' px-4 py-2 bg-blue-500 rounded-md text-white my-3  inline-block cursor-pointer' >
                        Register
                    </span>
                    <br />


                    {user ?
                        <div
                            onClick={() => setOpenUser(!openUser)}
                            className=' w-full flex justify-center items-center cursor-pointer'>
                            <img
                                className=' w-12 rounded-full'

                                src={user?.photoURL} alt="" />
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        :
                        <Link className=' px-4 py-2 bg-gray-500 rounded-md text-white mb-3 md:mb-0 inline-block' to='/login'>

                            Login

                        </Link>}
                    <div className={` absolute text-left border-2 p-4  rounded-lg shadow-lg ${!openUser ? '-top-[560px] md:-top-[500px]' : 'right-0 md:right-0 top-[220px] md:top-16'} ${!user && 'hidden'} bg-white`}>
                        <img className='rounded-full' src={user?.photoURL} alt="" />
                        <hr className=' border-t-2 my-2' />
                        <p>{user?.displayName}</p>
                        <p className='text-xs mb-6'>{user?.email}</p>
                        <p><Link to='/admin'><FontAwesomeIcon icon={faUser} /> Dashboard</Link></p>
                        <button onClick={() => signOut(auth)}><FontAwesomeIcon icon={faArrowRightToBracket} /> Logout</button>
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