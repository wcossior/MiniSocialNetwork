import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { registerUser } from '../api/user';
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const isLogged = JSON.parse(localStorage.getItem("isLogged"));
        if (isLogged) {
            navigate("/");
        }
    }, [])


    const sendRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        const registerData = {
            "username": username,
            "email": email,
            "password": password
        }
        try {
            setIsSubmitting(true);
            await registerUser(registerData);
            setIsSubmitting(false)
            navigate("/login");
        } catch (error) {
            setIsSubmitting(false)

            if (error.response?.data?.password) {
                setErrorMessage(error.response.data.password[0]);
            }else if (error.response?.data?.username) {
                setErrorMessage(error.response.data.username);
            } else {
                setErrorMessage("Error when trying to register.");
            }
        }
    }

    return (
        <div className='flex flex-col h-screen'>
            <div className='flex-1 flex justify-center mb-6'>
                <form className='w-1/5 flex flex-col gap-6 mt-[60px]' onSubmit={sendRegister}>
                    <h1 className='text-4xl font-bold text-center mb-4'>Create Account</h1>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input name='email' type="email" className="grow" placeholder="Email" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input name='username' type="text" className="grow" placeholder="Username" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input name='password' type="password" className="grow" placeholder='Password' required />
                    </label>
                    <button type='submit' className="btn btn-outline" disabled={isSubmitting}>
                        {isSubmitting ?
                            "Registering..."
                            :
                            "Register"
                        }
                    </button>
                    <span>Do you have an account? <Link className="link link-info text-lg" to="/login">Login</Link></span>
                    {errorMessage && (
                        <div className="text-red-500 text-center">
                            {errorMessage}
                        </div>
                    )}
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Register