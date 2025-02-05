import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ListPost from '../components/ListPost'
import SideBar from '../components/SideBar'
import CreatePost from '../components/CreatePost'
import { getUser } from '../api/user'
import { useNavigate } from 'react-router-dom'
import useStore from '../store'

const Home = () => {

    const navigate = useNavigate();
    const { saveUser } = useStore();

    useEffect(() => {
        const verifyTokenExpired = async () => {
            if (localStorage.getItem("access")) {
                const user = await getUser();
                saveUser(user);
            } else {
                navigate("login");
            }
        };
        verifyTokenExpired();
    }, [])


    return (
        <div>
            <Nav />
            <div className="flex mx-6">
                <SideBar />
                <div className='flex m-6 flex-1 flex-col'>
                    <CreatePost />
                    <ListPost />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home