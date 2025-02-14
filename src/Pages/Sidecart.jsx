import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosCloseCircle } from "react-icons/io";
import { setSide } from '../Slices/GeneralSlices';
import { useNavigate } from 'react-router-dom';

function Sidecart() {

    let { side } = useSelector(s => s.general)
    let dispatch = useDispatch();
    let [data, setdata] = useState(null)
    let navigate = useNavigate();

    function getCart() {
        return JSON.parse(localStorage.getItem('Cart')) || {};
    }

    useEffect(() => {
        let cart = getCart();
        setdata(cart)
    }, [])








    return (
        <>
            <div
                className="fixed inset-0 bg-black opacity-70 z-0"

            ></div>
            <div className='flex justify-end font-arial '>

                <div className=''>

                    <div className={`min-h-screen bg-ten transition duration-300 ease-linear z-10 fixed  w-[30%] ${side ? "w-[30%]" : "w-0 "} `}>
                        <div className='p-10 h-screen overflow-scroll'>
                            <div className='flex justify-between items-center '>
                                <div className='text-3xl'>Sepetiniz</div>
                                <div className='flex justify-end'><button onClick={() => dispatch(setSide(false))} className='text-4xl cursor-pointer hover:text-aclacivert'><IoIosCloseCircle /></button></div>
                            </div>

                            <div className='py-2  '>
                                <hr></hr>
                                {data ? (
                                    <div>
                                        {Object.entries(data).map(([productId, pdata]) => (
                                            <div>
                                                <div className='flex gap-4 w-[100%] p-2 '>
                                                    <img className='w-[50%]' src={pdata.photourl} />
                                                    <div className='flex flex-col justify-center gap-2 w-[100%]'>
                                                        <div className='text-2xl '>{pdata.name}</div>
                                                        <div>Adet:{pdata.quantity}</div>
                                                        <div className='text-aclacivert'>{pdata.sum * pdata.quantity}TL</div>

                                                    </div>

                                                </div>
                                                <hr></hr>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    "Sepetiniz boş"
                                )}




                                <button className='w-[90%] border-2 rounded-3xl m-5 py-2 px-3 cursor-pointer hover:text-black hover:border-3' onClick={() => {
                                    navigate("/Panel"),
                                    dispatch(setSide(false))
                                }}>Sepeti Onayla</button>
                            </div>




                        </div>

                    </div>




                </div>





            </div>

        </>


    )
}

export default Sidecart


