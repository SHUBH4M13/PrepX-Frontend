import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
    const SIGNUP_URL = import.meta.env.VITE_BACKEND_URL+ "/signup";
    const Navigate = useNavigate();

    const GoToLogin = () => {
        Navigate("/login")
    }

    // const GoTohome = () => {
    //     Navigate("/")
    // }

    const [data, setdata] = useState({
        username: "",
        email: "",
        password: "",
        confirmpass: ""
    })

    const [SignUpError, setSignUpError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setdata({
            ...data,
            [name]: value
        })

        setSignUpError(""); // when user rewrite anything error clears 
    }
    

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent form default submission if called from form
        
        // Input validation
        if (!data.username || !data.password || !data.email) {
            setSignUpError("Please fill in all required fields");
            return;
        }
        
        // Optional: Add password strength validation
        if (data.password.length < 6) {
            setSignUpError("Password must be at least 6 characters long");
            return;
        }
        
        setLoading(true); // Assuming you have a loading state
        setSignUpError(""); // Clear previous errors
    
        try {
            console.log("Attempting signup to:", SIGNUP_URL);
            
            const res = await axios.post(SIGNUP_URL, data, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
                timeout: 10000, // 10 seconds timeout
            });
            
            console.log("Signup response status:", res.status);
            console.log("Signup response data:", res.data);
            
            // Handle successful signup
            if (res.status === 201 || res.status === 200) {
                // Store token if provided (some apps auto-login after signup)
                if (res.data.token) {
                    localStorage.setItem("authToken", res.data.token); // Use consistent key
                }
                
                // Show success message (optional)
                console.log("Account created successfully!");
                
                // Navigate to login
                GoToLogin();
            }
            
        } catch (error) {
            console.error("Signup error:", error);
            
            if (error.code === 'ECONNABORTED') {
                setSignUpError("Request timed out. Please try again.");
            } else if (error.response) {
                // Server responded with error status
                const status = error.response.status;
                const message = error.response.data?.message || 
                               error.response.data?.error || 
                               error.response.data;
                
                switch (status) {
                    case 400:
                        setSignUpError(message || "Invalid input. Please check your details.");
                        break;
                    case 409:
                        setSignUpError("Username or email already exists. Please try different credentials.");
                        break;
                    case 422:
                        setSignUpError("Please provide valid information for all fields.");
                        break;
                    case 429:
                        setSignUpError("Too many signup attempts. Please try again later.");
                        break;
                    case 500:
                        setSignUpError("Server error. Please try again later.");
                        break;
                    default:
                        setSignUpError(message || "Failed to create account. Please try again.");
                }
            } else if (error.request) {
                // Network error (including CORS)
                console.error("Network error:", error.request);
                setSignUpError("Unable to connect to server. Please check your connection.");
            } else {
                // Something else happened
                setSignUpError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false); // Reset loading state
        }
    };
    

    const HandleSubmit =  (e) => {

        e.preventDefault();

        let newError = "";

        if (!data.username || !data.email || !data.password || !data.confirmpass) {
            newError = "Please Fill all the Required Fields"
            setSignUpError(newError);
            return
        } else if (data.password != data.confirmpass) {
            newError = "Password aren't Matching"
            setSignUpError(newError);
            return
        } else if (data.password.length <= 6) {
            newError = "Password should be of alteast 7 Characters"
            setSignUpError(newError);
            return
        } else{
            handleSignup();
        }
    }

    return (
        <div className="bg-darkbg min-h-screen flex justify-center items-center p-4">
            <div className="bg-Secondarybg rounded-xl w-full max-w-[450px] sm:w-[450px] p-6 shadow-lg">
                <div className="text-center">
                    <p className="font-bold text-white text-2xl">Welcome to PrepX</p>
                    <p className="py-2 text-dullwhite">Create an Account to continue</p>
                </div>

                <div className="flex justify-evenly mt-4">
                    <div onClick={GoToLogin} className="w-1/2 text-center border-b-2 pb-2 cursor-pointer border-dullwhite text-dullwhite  hover:border-white hover:text-white ">
                        Login
                    </div>
                    <div className="w-1/2 text-center border-b-2 pb-2 cursor-pointer border-PrimaryGold text-PrimaryGold">
                        Sign Up
                    </div>
                </div>

                <form className="flex flex-col mt-6 space-y-4" >
                    <div>
                        <p className="text-dullwhite text-sm">Username</p>
                        <input
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                            placeholder="Enter Username"
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                        />

                    </div>

                    <div>
                        <p className="text-dullwhite text-sm">Email</p>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            placeholder="Enter Username"
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                        />

                    </div>

                    <div>
                        <p className="text-dullwhite text-sm">Password</p>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                        />
                    </div>

                    <div>
                        <p className="text-dullwhite text-sm">Confirm Password</p>
                        <input
                            type="password"
                            name="confirmpass"
                            value={data.confirmpass}
                            onChange={handleChange}
                            placeholder="Confirm password"
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                        />
                    </div>

                    {SignUpError && <p className="text-red-500 text-sm">{SignUpError}</p>}

                    <button
                        type="button"
                        onClick={HandleSubmit}
                        className="bg-PrimaryGold cursor-pointer text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition-all"
                    >
                        Create Account
                    </button>
                </form>
                
            </div>
        </div>
    );
}
