import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ArrowLeftIcon , UserCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router';

export default function Navbar() {
    const navigate = useNavigate();
    const [toggleNav, setToggleNav] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    
    // Use useEffect to check login status to prevent state updates during render
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && token.length > 0) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, []);
    
    function changeToggle() {
        setToggleNav((prev) => !prev);
    }
    
    const goToHome = () => {
        navigate("/");
    }

    const goToProfile = () => {
        navigate("/profile");
    }

    const goToLogin = () => {
        navigate("/login");
    }

    const goToSignup = () => {
        navigate("/signup");
    }
    
    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLogged(false);
        navigate("/login");
    };

    return (
        <div className='z-10 w-full h-[64px] flex bg-darkbg justify-between items-center py-10 border-[#00000002] shadow-black shadow-5xl border-b-2 animate-fade-in-up'>
            <div className='flex justify-center items-center px-10 sm:px-20' onClick={goToHome}>
                <p className='font-Helvetica text-PrimaryGold text-2xl font-semibold cursor-pointer'>PrepX</p>
            </div>

            <div className='hidden sm:flex sm:justify-center sm:items-center sm:px-8 sm:gap-6'>

                {isLogged ? (
                    <div className='flex gap-5 ml-6'>
                        
                        <button 
                            onClick={handleLogout}
                            className='border-PrimaryGold border-2 px-4 py-1 rounded-lg hover:bg-PrimaryGold hover:text-white duration-300 text-PrimaryGold font-Helvetica'
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className='flex gap-5 ml-6'>
                        <button 
                            onClick={goToLogin} 
                            className='border-dullwhite hover:border-PrimaryGold cursor-pointer border-2 w-[81px] h-[36px] rounded-lg duration-300 hover:text-PrimaryGold text-center text-dullwhite font-Helvetica'
                        >
                            Login
                        </button>
                        <div className='bg-PrimaryGold hover:bg-hovergold flex w-[81px] h-[36px] justify-center items-center rounded-lg duration-300'>
                            <button 
                                onClick={goToSignup} 
                                className='font-Helvetica text-center text-white cursor-pointer'
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Menu Trigger */}
            <div className='px-10 sm:hidden' onClick={changeToggle}>
                {toggleNav ? (
                    <XMarkIcon className="text-PrimaryGold size-8" />
                ) : (
                    <Bars3Icon className='text-white/55 size-8 hover:text-PrimaryGold' />
                )}
            </div>

            {toggleNav && (
                <div className="fixed top-0 left-0 w-full h-full bg-darkbg flex justify-center items-center z-50">
                    <div className="flex flex-col gap-6 text-center">

                        <div className="flex flex-col gap-4 mt-4">
                            {isLogged ? (
                                <button 
                                    onClick={() => {
                                        handleLogout();
                                        changeToggle();
                                    }} 
                                    className="bg-PrimaryGold hover:bg-hovergold flex w-[120px] h-[45px] justify-center items-center rounded-lg duration-300 font-Helvetica text-white mx-auto"
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <button 
                                        onClick={() => {
                                            goToLogin();
                                            changeToggle();
                                        }} 
                                        className="border-dullwhite hover:border-PrimaryGold border-2 w-[120px] h-[45px] rounded-lg duration-300 hover:text-PrimaryGold text-center text-dullwhite font-Helvetica cursor-pointer mx-auto"
                                    >
                                        Login
                                    </button>
                                    <button 
                                        onClick={() => {
                                            goToSignup();
                                            changeToggle();
                                        }} 
                                        className="bg-PrimaryGold hover:bg-hovergold flex w-[120px] h-[45px] justify-center items-center rounded-lg duration-300 font-Helvetica text-white cursor-pointer mx-auto"
                                    >
                                        Sign Up
                                    </button>
                                </>
                            )}

                            <button 
                                onClick={changeToggle} 
                                className="bg-[#262626] hover:bg-[#333] flex w-[120px] h-[45px] justify-center items-center rounded-lg duration-300 gap-2 font-Helvetica text-white mx-auto mt-4"
                            >
                                <ArrowLeftIcon className='size-4' />
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

