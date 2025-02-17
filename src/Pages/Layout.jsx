import React from 'react'
import Header from "./Header"
import Footer from "./Footer"



function Layout({ children }) {
    return (
        <div className='bg-ten min-h-screen max-lg:overflow-hidden'>

            <Header />


            {children}


            <Footer />
        </div>
    )
}

export default Layout