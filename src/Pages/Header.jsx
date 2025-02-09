import React from 'react'
import Logo from "../Assets/Logo.jpg"
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";



function Header() {
    return (
        <div className='bg-ten h-[15vh] shadow-2xl flex justify-between items-center px-5 text-bordo font-arial'>
            <span><img className="size-[10vh]" src={Logo} /></span>
            <span className='flex gap-3 items-center'>

                <span className='flex items-center'>
                    <FaSearch />
                    <input className="border-2 box-border h-[90%]" type='text' />
                </span>

                <span className='flex items-center'><FaUser /></span>
                <span className='flex items-center' ><IoCartSharp />0</span>

            </span>


        </div>
    )
}

export default Header