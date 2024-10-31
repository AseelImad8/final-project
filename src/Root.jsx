import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/user/Footer/Footer'
import Navbar from './component/user/Navbar/Navbar'

export default function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
