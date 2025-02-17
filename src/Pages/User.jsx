import React, { useEffect, useState } from 'react'
import { IoCartSharp } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { RiUserSmileFill } from "react-icons/ri";
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setemail, setuid, setAuth } from '../Slices/UserSlice';
import Cart from './Cart';
import { Routes, Route } from "react-router-dom"
import Admin from './Admin';

function User() {
    let [admin, setadmin] = useState(false)
    let [oncart, setoncart] = useState(false)
    let [onsipariş, setonsipariş] = useState(false)
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let uid = localStorage.getItem('uid');

    useEffect(() => {
        let cartd = JSON.parse(localStorage.getItem('Cart'))
        if (!uid) {
            toast.error("Lütfen Giriş Yapın");
            navigate("/Giriş");
            navigate("/Giriş");
            navigate("/Giriş");
        }
        else if (cartd && Object.keys(cartd).length > 0) {
            setoncart(true)
        }




    }, [uid, navigate]);  // Adding `uid` and `navigate` as dependencies


    let handleout = async () => {

        try {
            await signOut(auth)
            toast("Çıkış Yapıldı");
            localStorage.clear();

            dispatch(setemail(""))
            dispatch(setuid(""))
            dispatch(setAuth(false))

            navigate("/")
        } catch (error) {
            toast.error(error.message);
        }


    }
    let handleall = () => {
        setoncart(false)
        setonsipariş(false)
        setadmin(false)
    }
    let handlecart = () => {

        setoncart(true)
        setonsipariş(false)
        setadmin(false)
    }
    let handlesipariş = () => {
        setoncart(false)
        setonsipariş(true)
        setadmin(false)

    }
    let handleadmin = () => {
        setoncart(false)
        setonsipariş(false)
        setadmin(true)


    }

    return (
        <div className='font-arial'>
            <div className='bg-kahve p-28 min-h-screen flex gap-15 '>
                {/*Left Side*/}
                <div className='bg-ten w-[50vh] rounded-4xl max-h-screen'>

                    <div className='p-10 shadow-2xl rounded-4xl text-2xl'>
                        <div className='flex gap-4 justify-center items-center cursor-pointer' onClick={() => handleall()}>
                            <RiUserSmileFill className='text-6xl' /><span>Hoşgeldin</span>
                        </div>

                    </div>
                    <div className='flex flex-col items-center justify-around  h-[75%] rounded-4xl text-2xl '>
                        <span className='w-[100%] cursor-pointer' onClick={() => handlecart()}>
                            <div className='px-15 py-4 flex gap-2'><IoCartSharp />Sepetim</div>

                            <hr className='opacity-15'></hr>
                        </span>


                        <span className='w-[100%] cursor-pointer'>

                            <a href='https://www.shopier.com/s/store/Kufart&sid=cjR3bzAweFc2NG15U0xxdTBfLTFfIF8g' className='px-15 py-4 flex gap-2' ><FaBasketShopping />Siparişlerim</a>



                            <hr className='opacity-15'></hr>
                        </span>

                        <span onClick={() => handleadmin()} className={`w-[100%]  cursor-pointer ${uid == "KcOJ8SIpHgfJdQvUiIZgQLqgyaM2" ? "block" : "hidden"}`}><div className='px-15 py-4 flex gap-2 text-aclacivert     '><IoEyeOff />Panel</div><hr className='opacity-15'></hr></span>

                        <span className='w-[100%] mb-5 cursor-pointer'>

                            <div className='px-15 py-4 flex gap-2 text-bordo ' onClick={handleout}><FaPowerOff />Çıkış</div>



                            <hr className='opacity-15'></hr>
                        </span>

                    </div>

                </div>
                {/*Right Side*/}
                <div className='bg-ten w-[140vh] rounded-4xl max-h-screen'>

                    <div className='p-15'>
                        {oncart && <Cart />}
                        {admin && <Admin />}
                    </div>

                </div>

            </div>


        </div>
    )
}

export default User