import React, { useState } from 'react'
import useStore from '../store'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const { user, listPostsCopy, saveFilteredPosts, savePosts } = useStore();
    const navigate = useNavigate();

    const searchPost = (e) => {
        const searchValue = e.currentTarget.value.toLowerCase();
        
        if (searchValue !== "") {
            let filteredPosts = listPostsCopy.filter((post) =>
                post.title.toLowerCase().includes(searchValue)
            );
            saveFilteredPosts(filteredPosts);
        } else {
            savePosts(listPostsCopy);
        }
    }

    
    const logout = () => {
        localStorage.removeItem("isLogged");
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/login");
    }

    return (
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">MiniRedSocial</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input onChange={(e) => searchPost(e)} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">{user?.username}</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={logout}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav