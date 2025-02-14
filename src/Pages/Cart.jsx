import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { toast } from 'react-toastify';

function Cart() {

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

    let handledelete = (Id) => {
        let cart = getCart();
        if (cart[Id]) {
            delete cart[Id]; // Ürünü sepetten sil
        }
        localStorage.setItem('Cart', JSON.stringify(cart));
        window.location.reload();

    }
    let handleincrease = (Id) => {

        let cart = getCart();
        cart[Id].quantity += 1
        localStorage.setItem('Cart', JSON.stringify(cart));
        window.location.reload();

    }
    let handledecrase = (Id) => {



        let cart = getCart();
        if (cart[Id].quantity > 1) {
            cart[Id].quantity -= 1
            localStorage.setItem('Cart', JSON.stringify(cart));
            window.location.reload();

        }
        else {

            toast.error("Adet 1 dan az olamaz.")
        }

    }



    return (
        <div className='max-h-screen h-[50vh] w-[100%] flex gap-10'>
            {/*LeftSide*/}
            <div className='w-[70%] rounded-3xl h-[100%]border-2 '>
                <div className='h-[8vh]  flex justify-center items-center'><span>Sepetiniz</span></div>
                <hr></hr>
                <div className=' h-[80%]'>
                    <div className='px-10 py-5   h-[100%] w-[100%] overflow-scroll'>
                        {data ? (
                            <div className='h-[10%]'>
                                {Object.entries(data).map(([Id, pdata]) => (
                                    <div>
                                        <div className='flex gap-4 w-[100%]  p-2 '>
                                            <img className='w-[10vh] h-[10vh] ' src={pdata.photourl} />
                                            <div className='flex flex-col justify-center gap-2 w-[100%]'>
                                                <div className='text-2xl '>{pdata.name}</div>
                                                <div className='flex justify-between'>

                                                    <div className='flex gap-2 justify-center items-center'>

                                                        <div>Adet:{pdata.quantity}</div>

                                                        <button onClick={() => handleincrease(Id)} className='bg-gray-300 opacity-50 hover:opacity-100 p-1 border-2 rounded-full'><FaChevronUp /></button>
                                                        <button onClick={() => handledecrase(Id)} className='bg-gray-300 opacity-50 hover:opacity-100 p-1 border-2 rounded-full'><FaChevronDown /></button>

                                                    </div>


                                                    <button className='border-2 rounded-xl px-4 py-1 box-border bg-red-800 text-sm  text-white hover:bg-red-900 cursor-pointer' onClick={() => handledelete(Id)}>Sil</button></div>

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



                    </div>
                </div>
            </div>
            {/*Rightside*/}
            <div className='w-[30vh]'>
                <div className='h-[8vh] bg-sky-300 flex justify-center items-center'><span>Sepetiniz</span></div>
                <hr></hr>


            </div>
        </div>
    )
}

export default Cart