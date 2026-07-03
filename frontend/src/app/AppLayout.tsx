import React from 'react'

import PageTitle from '../components/PageTitle'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'

const AppLayout = () => {
    return (
        <>
            <PageTitle />
            <main className='w-screen h-screen flex flex-col justify-start items-center'>
                <Navbar />
                <Outlet />
            </main>
        </>
    )
}


export default AppLayout