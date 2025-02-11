import React from 'react'
import Logo from "../Assets/Logo.jpg"
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useNavigate, } from "react-router";
import { useState } from 'react';

function Header() {

    let navigate = useNavigate();
    let [open, setopen] = useState(false);

    const handleNavigate = (path) => {
        navigate(path);
    };

    let handleopen = () => {

        setopen(!open);

    }

    return (
        <div>
            <div className=' h-[15vh] shadow-2xl grid grid-cols-3 grid-rows-1 px-5 text-bordo font-arial w-[100%]'>
                <span className='flex justify-start items-center' onClick={() => handleNavigate("/")}><img className="size-[10vh] cursor-pointer" src={Logo} /></span>

                <div className='flex gap-15 cursor-pointer items-center justify-around'>
                    <div onClick={() => handleNavigate("/Ürünler")}>Ürünler</div>
                    <div>About Us</div>
                    <div>Contact</div>
                </div>






                <span className='flex gap-3 items-center justify-end text-xl cursor-pointer '>

                    <span className='flex items-center text-2xl'>
                        <FaSearch onClick={() => handleopen()} />


                    </span>

                    <span className='flex items-center text-2xl'><FaUser /></span>
                    <span className='flex items-center border-2  py-1 justify-between gap-1 rounded-3xl' ><span className='px-2 text-md flex gap-1 items-center'><IoCartSharp />Sepet</span><span className=' border-2 rounded-full text-center  px-2 mr-3 text-sm  '>0</span></span>

                </span>


            </div>

            {<input className={`shadow-sm box-border ease-in-out px-2 transition-all duration-1000 ${open ? "py-1  block w-[100%] bg-[#f7f6ec] h-16 " : "p-0 w-[100%] h-0  "}`} placeholder='İstediğiniz ürünü aratın , kolayca bulun!' type='text' />}



        </div>


    )
}

export default Header