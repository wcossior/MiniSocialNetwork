import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ListPost from '../components/ListPost'
import SideBar from '../components/SideBar'
import CreatePost from '../components/CreatePost'

const Home = () => {
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