import React from 'react'

const SideBar = () => {
    return (
        <div id="sidebar" className='flex-none'>
            <ul className="menu bg-base-200 rounded-box w-56">
                <li>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14V9a6 6 0 1 0-12 0v5c0 .386-.149.735-.405 1.005L4 17h5m6 0a3 3 0 1 1-6 0" />
                        </svg>
                        Notificaciones
                    </a>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 10h8M8 14h6M21 12c0 3.866-3.582 7-8 7-1.574 0-3.055-.364-4.38-1.02l-4.62 1.02 1.02-4.62A7.966 7.966 0 0 1 3 12c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
                        </svg>
                        Mensajes
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar