import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { authToLogin } from '../api/user';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const SendLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        const loginData = {
            "username": username,
            "password": password
        }
        try {
            setIsSubmitting(true);
            await authToLogin(loginData);
            setIsSubmitting(false);
            navigate("/");
        } catch (error) {
            setIsSubmitting(false);
            console.log("Error al intentar iniciar sesion", error);
        }
    }

    useEffect(() => {
        const isLogged = JSON.parse(localStorage.getItem("isLogged"));
        if (isLogged) {
            navigate("/");
        }
    }, [])


    return (
        <div className='flex flex-col h-screen'>
            <div className='flex-1 flex justify-center'>
                <form className='w-1/5 flex flex-col gap-6 mt-[60px]' onSubmit={SendLogin}>
                    <h1 className='text-4xl font-bold text-center mb-4'>Login</h1>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input name='username' type="text" className="grow" placeholder="Username" />
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
                        <input name='password' type="password" className="grow" placeholder='Password' />
                    </label>
                    <button type='submit' className="btn btn-outline" disabled={isSubmitting}>
                        {isSubmitting ?
                            "Logging in..."
                            :
                            "Login"
                        }
                    </button>
                    <span>Don't you have an account? <Link className="link link-info text-lg" to="/register">Register</Link></span>
                </form>
            </div>
            <Footer />
        </div>
    )

}

export default Login