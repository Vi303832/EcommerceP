import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { toast } from 'react-toastify';

function Cart() {
    let [toplam, settoplam] = useState(0)
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


        let totalSum = Object.values(cart).reduce((acc, item) => acc + (item.sum * item.quantity), 0);
        settoplam(totalSum);

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
                <div className='h-[8vh]  flex justify-center items-center'><span>Sepetiniz</span></div>
                <hr></hr>
                <div className='flex justify-center items-center flex-col h-[35vh] gap-8'>
                    <div>Tutar:{toplam - 30}TL</div>
                    <div>Kargo ücreti:30TL</div>
                    <div className='text-xl'>
                        Toplam:{toplam}TL
                    </div>

                </div>

                <a href='https://www.shopier.com/s/store/Kufart&sid=cjR3bzAweFc2NG15U0xxdTBfLTFfIF8g' className='flex justify-center items-center p-2'><button className='cursor-pointer bg-bordo text-beyaz px-2 py-1 rounded-3xl' >Checkout</button></a>
            </div>
        </div>
    )
}

export default Cart