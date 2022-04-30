import React from 'react';
import Header from '../Header/Header';
import google from '../../assets/logos/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const login = () => {
        signInWithGoogle()
    }
    if (loading) {
        return <div className='text-center'><Header />
            <span className='px-4 py-2 bg-yellow-100 rounded-lg shadow-lg'>Loading...</span></div>
    }
    else if (error) {
        console.log(error);
    }
    else if (user) {
        console.log(user);
    }
    return (
        <div>
            <Header />
            <div
                className='w-[375px]  mx-auto border-2 py-32 mt-20 text-center rounded-lg shadow-lg'>

                <p
                    className=' text-lg font-semibold mb-4'>Login to Helping-Hub
                </p>

                <button
                    onClick={login}
                    className=' w-[330px] mx-auto border-2 rounded-full flex items-center'>
                    <img
                        className=' w-[24px] mr-[70px] m-1' src={google} alt="" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;