import React from 'react'
import Logo from "../Assets/Logo.jpg"
import Sidecart from './Sidecart';
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useNavigate, } from "react-router";
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checker } from '../Slices/GeneralSlices';
import { setSide } from '../Slices/GeneralSlices';


function Header() {
    let dispatch = useDispatch();
    let { uid, email, isAuth } = useSelector(s => s.userinfo)
    let { check, side } = useSelector(s => s.general)
    let [icon, seticon] = useState(0);
    let [input, setinput] = useState("");
    let navigate = useNavigate();
    let [open, setopen] = useState(false);
    let [products, setproducts] = useState([])
    let searchRef = useRef(null);
    let searchIconRef = useRef(null);
    let cart = getCart();

    const handleNavigate = (path) => {
        navigate(path);
    };

    let handleSide = () => {
        dispatch(setSide(!side)); // side state'ini tersine çevir
        console.log(side); // Güncellenmiş değeri görmek için
    };

    let handleopen = () => {
        setopen(open ? false : true);
        dispatch(setSide(false));
    }

    let handleinput = (e) => {

        setinput(e.target.value)



    }
    function getCart() {
        return JSON.parse(localStorage.getItem('Cart')) || {};
    }

    useEffect(() => {
        const cart = getCart();
        let totalQuantity = 0;

        // Sepetteki her bir ürünün quantity değerini topla
        Object.values(cart).forEach((data) => {
            totalQuantity += Number(data.quantity);
        });

        // Toplam quantity'yi güncelle
        seticon(totalQuantity);
    }, [check]);



    {/*Eventhandler Olayı*/ }

    useEffect(() => {

        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                if (searchIconRef.current && !searchIconRef.current.contains(event.target)) {
                    setopen(false);
                    setinput(""); // Arama çubuğunu sıfırla
                }
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {




        const fetchData = async () => {
            try {
                if (!input || input.trim() === '') {
                    setproducts([]); // Giriş boşsa ürünleri temizle
                    return;
                }

                let items = [];
                const docRef = collection(db, "Ürünler");

                // Kategori sorguları
                const categories = ["Gri", "Ekru", "Yeşil", "Sweatshirt", "Hoodie", "Kahverengi", "Saks Mavisi", "Tshirt", "Other"];
                const queries = categories
                    .filter(category => category.startsWith(input)) // Girişle başlayan kategorileri filtrele
                    .map(category => query(docRef, where("categorys", "array-contains", category)));

                // Tüm sorguları çalıştır ve sonuçları birleştir
                const snapshots = await Promise.all(queries.map(q => getDocs(q)));
                const mergedResults = new Map();

                snapshots.forEach(snapshot => {
                    snapshot.forEach(doc => {
                        if (!mergedResults.has(doc.id)) {
                            mergedResults.set(doc.id, { id: doc.id, ...doc.data() });
                        }
                    });
                });

                // Map'i diziye dönüştür
                const uniqueItems = Array.from(mergedResults.values());
                setproducts(uniqueItems);
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };
        console.log(products)
        fetchData();
    }, [input]);

    let handleClick = (id) => {
        setopen(false)
        navigate(`/Ürün/${id}`)

    }


    return (
        <>

            <div className='h-[100%]'>
                <div className=' h-[15vh] shadow-2xl grid grid-cols-3 grid-rows-1 px-5 text-bordo font-arial w-[100%]'>
                    <span className='flex justify-start items-center' ><img onClick={() => handleNavigate("/")} className="size-[10vh] cursor-pointer" src={Logo} /></span>

                    <div className='flex gap-15 cursor-pointer items-center justify-around text-xl'>
                        <div onClick={() => handleNavigate("/Ürünler")}>Ürünler</div>
                        <div>About Us</div>
                        <div>Contact</div>

                    </div>

                    {
                        side ?
                            <div className='absolute flex justify-end w-[70%] '><Sidecart /></div> : <div className='flex justify-end items-center'><span className='flex gap-3 items-center justify-end text-xl cursor-pointer '>

                                <span ref={searchIconRef} className='flex items-center text-2xl'>
                                    <FaSearch onClick={() => handleopen()} />


                                </span>

                                <span className='flex items-center text-2xl'></span>{
                                    uid ?
                                        <div><FaUser onClick={() => handleNavigate("/Panel")} /></div> :
                                        <div><FaUser onClick={() => handleNavigate("/Giriş")} /></div>
                                }

                                <span className='flex items-center border-2  py-1 justify-between gap-1 rounded-3xl' onClick={() => handleSide()} ><span className='px-2 text-md flex gap-1 items-center'><IoCartSharp />Sepet</span><span className=' border-2 rounded-full text-center  px-2 mr-3 text-sm  '>{icon}</span></span>

                            </span>

                            </div>

                    }








                </div>
                <div ref={searchRef} className={`  ease-in-out z-10 transition-all w-[100%] duration-1000 ${open ? "h-[65px]   " : " h-0 "}`}>
                    {<input className={`shadow-sm box-border ease-in-out px-2 transition-all duration-1000 focus:outline-none ${open ? "py-1  block w-[100%] bg-[#f7f6ec] h-16 " : "py-0 w-[100%] h-0  "}`} placeholder='İstediğiniz ürünü aratın , kolayca bulun!' type='text' value={input} onChange={(e) => handleinput(e)} />}
                    <div className={`absolute   bg-[#deddd5] transition-all duration-500  w-[70%] mx-[15%] ${input && open ? " h-screen z-10 " : " h-0 opacity-0 "}`}>

                        <div className={`absolute p-16 grid grid-cols-3 mx-10 gap-x-10 gap-y-10 grid-rows-2 w-[100%]  ${input ? "block h-screen" : " h-0 opacity-0 hidden"}`}>

                            {products && products.map(p => {
                                return (

                                    <>
                                        <div key={p.id} className='cursor-pointer bg-ten w-[70%] h-[90%] rounded-2xl font-arial text-md'>
                                            <div onClick={() => handleClick(p.id)} className='flex justify-center p-2 cursor-pointer '><img className="rounded-2xl w-[80%] h-[60%] shadow-2xl" src={p.images[0]} alt="foto" /></div>
                                            <div className='flex flex-col justify-center items-center py-1 gap-2'>
                                                <div className=''>{p.name}</div>
                                                <div>{p.price}TL</div>
                                            </div>

                                        </div>

                                    </>
                                )
                            })}
                        </div>







                    </div>






                </div>


            </div>

        </>

    )
}

export default Header