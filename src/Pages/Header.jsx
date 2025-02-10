import React from 'react'
import Logo from "../Assets/Logo.jpg"
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";


function Header() {

    let navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };


    return (
        <div className=' h-[15vh] shadow-2xl flex justify-between items-center px-5 text-bordo font-arial'>
            <span onClick={() => handleNavigate("/")}><img className="size-[10vh] cursor-pointer" src={Logo} /></span>

            <div className='flex gap-15 cursor-pointer '>
                <div onClick={() => handleNavigate("/Ürünler")}>Ürünler</div>
                <div>About Us</div>
                <div>Contact</div>
            </div>






            <span className='flex gap-3 items-center'>

                <span className='flex items-center gap-2'>
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