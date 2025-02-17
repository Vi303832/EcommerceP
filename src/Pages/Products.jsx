import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from 'firebase/firestore'
import { checker } from '../Slices/GeneralSlices'

function Products() {

    let [products, setproducts] = useState([])
    let [plus, setplus] = useState("+")
    let [anim, setanim] = useState(false)
    let [filter, setfilter] = useState(false)
    let [selectedcat, setselectedcat] = useState([])
    let [selectedsort, setselectedsort] = useState([])
    let dispatch = useDispatch();
    let { check } = useSelector(s => s.general)
    let navigate = useNavigate();

    useEffect(() => {
        const docRef = collection(db, "Ürünler");

        const fetchData = async () => {
            try {
                const docSnap = await getDocs(docRef);
                const productData = [];
                docSnap.forEach((doc) => {
                    productData.push(doc.data());
                });

                setproducts(productData);

            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        fetchData();
    }, []);


    let Displayer = () => {
        setplus((prev) => (prev === "+" ? "-" : "+"));
        setfilter(false)
        setanim(!anim)

    }

    let handleClick = (id) => {

        navigate(`/Ürün/${id}`)

    }
    let handlenav = (nav) => {

        navigate(`/${nav}`)

    }
    let handlefilter = () => {
        setfilter(!filter)

        if (anim) {
            setanim(false)
            setplus("+")


        }

    }
    let handleclear = () => {
        setselectedcat([])



    }
    let addclicked = (e) => {
        if (selectedcat.includes(e.target.value)) {
            setselectedcat(p => p.filter(a => a !== e.target.value));
        }
        else {
            setselectedcat(p => [...p, e.target.value])
        }


    }



    let getitems = async () => {
        setfilter(false)
        try {
            let items = [];
            const docRef = collection(db, "Ürünler");
            if (selectedcat.length === 0) {
                const docSnap = await getDocs(docRef);

                docSnap.forEach((doc) => {
                    items.push(doc.data());
                });

            }
            else {

                let q = query(docRef, where("categorys", "array-contains-any", selectedcat));
                let docsnap = await getDocs(q);


                docsnap.forEach((doc) => {
                    items.push(doc.data());
                });
            }


            if (selectedsort.length > 0) {
                if (selectedsort[0] === "Artan") {
                    items.sort((a, b) => a.price - b.price);
                } else if (selectedsort[0] === "Azalan") {
                    items.sort((a, b) => b.price - a.price);
                }
            }

            setproducts(items);
        } catch (error) {

            console.error('Error getting documents: ', error);
        } finally {

        }
    };

    let handlesort = (e) => {
        const value = e.target.value;
        if (selectedsort.includes(value)) {
            setselectedsort([]); // Eğer seçili olan seçeneği tekrar tıklarsa, sıralamayı kaldır
        } else {
            setselectedsort([value]); // Sadece bir sıralama seçeneği seçilebilir
        }
    };

    let handleCart = (id, name, photourl, price, sum) => {


        let cart = JSON.parse(localStorage.getItem('Cart')) || {};

        if (cart[id]) {
            cart[id].quantity += 1;  // Örneğin, ürünün miktarını artırabiliriz
        } else {
            // Ürün sepette yoksa yeni bir ürün ekle
            cart[id] = {
                id,
                name,
                photourl,
                price,
                sum,
                quantity: 1  // Yeni ürün eklerken, miktar 1 olarak başlar
            };
        }
        dispatch(checker())
        console.log(check)
        localStorage.setItem('Cart', JSON.stringify(cart));


    }

    return (
        <div>
            <div className='min-h-screen w-[100%] font-arial text-bordo '>
                <div className='flex justify-between max-md:justify-start max-sm:items-start max-md:flex-col'>
                    <div className='p-15 cursor-pointer'>
                        <span onClick={Displayer} className='flex gap-2 items-center justfiy-center'><span className='text-5xl'>Bütün Ürünler</span><span className={`text-5xl cursor-pointer transition transform ease-linear  duration-200 ${plus === "-" ? 'rotate-180' : 'rotate-0'}`}>{plus}</span></span>
                        <div
                            className={`transition-all duration-1000 ease-in-out overflow-hidden ${anim ? "max-h-96 p-8 opacity-100" : "max-h-0 p-0 opacity-0"
                                }`}
                        >
                            <div className="p-2 text-xl" onClick={() => handlenav("Hoodie")}>Hoodie</div>
                            <div className="p-2 text-xl" onClick={() => handlenav("Sweatshirt")}>Sweatshirt</div>
                            <div className="p-2 text-xl" onClick={() => handlenav("Tshirt")}>T-shirt</div>
                            <div className="p-2 text-xl" onClick={() => handlenav("Other")}>Other Products</div>
                        </div>


                    </div>
                    <div className='p-15 cursor-pointer h-[100%]    '>
                        <span className={'flex gap-2 items-center  max-sm:justify-start p-2  '}>{<button onClick={() => handleclear()}
                            className={` text-xl  rounded-2xl border-3 transition-all ease-linear duration-500 px-2 py-1   cursor-pointer relative p-0 ${filter
                                ? "opacity-100 left-0  "
                                : "opacity-0  left-3 "
                                }`}
                        >
                            Clear
                        </button>

                        }<span className='text-xl px-3 py-1 rounded-2xl border-3 ' onClick={handlefilter}>Filter</span></span>
                        <div
                            className={`transition-all duration-1000 ease-in-out overflow-hidden bg-white rounded-3xl ${filter ? "max-h-[500px] max-sm:max-h-[800px] py-8 opacity-100 px-32 " : "max-h-0 p-0 opacity-0"
                                }`}
                        >
                            <div className='h-[100%] w-[100%]'>
                                <div className="flex flex-row max-sm:flex-col gap-2  ">
                                    {/* Hoodie Selection */}
                                    <div className="flex flex-col gap-2 items-center justify-center max-sm: w-[20vh] h-[60%]">
                                        <div className="text-2xl">Sırala</div>
                                        <label className={` py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 transition ease-linear duration-1000 ${selectedsort.includes("Artan") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Artan"
                                                className='hidden'
                                                onClick={(e) => handlesort(e)}
                                                checked={selectedsort.includes("Artan")}
                                            />
                                            Artan Fiyat
                                        </label>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedsort.includes("Azalan") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Azalan"
                                                onClick={(e) => handlesort(e)}
                                                className='hidden'
                                                checked={selectedsort.includes("Azalan")}
                                            />
                                            Azalan Fiyat
                                        </label>

                                    </div>
                                    <div className="flex flex-col gap-2 items-center justify-center w-[20vh] h-[60%]">
                                        <div className="text-2xl">Modeller</div>
                                        <label className={` py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 transition ease-linear duration-1000 ${selectedcat.includes("hoodie") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="hoodie"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Hoodie
                                        </label>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("sweatshirt") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="sweatshirt"
                                                onClick={(e) => addclicked(e)}
                                                className='hidden'
                                            />
                                            Sweatshirt
                                        </label>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("tshirt") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="tshirt"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            T-shirt
                                        </label>
                                    </div>

                                    {/* Color Selection */}

                                    <div className="flex flex-col items-center justify-center  h-[60%] gap-2 ">
                                        <div className="text-2xl">Renk</div>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("saksmavisi") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="saksmavisi"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Saks Mavisi
                                        </label>
                                        <label className={`py-2 w-[20vh] text-center rounded-3xl transition ease-linear duration-1000 text-lg box-border border-2 ${selectedcat.includes("kahverengi") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="kahverengi"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Kahverengi
                                        </label>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("gri") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="gri"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Gri
                                        </label>
                                        <label className={`py-2 w-[20vh] text-center transition ease-linear duration-1000 rounded-3xl text-lg box-border border-2 ${selectedcat.includes("ekru") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="ekru"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Ekru
                                        </label>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("yeşil") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="yeşil"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Yeşil
                                        </label>
                                    </div>
                                </div>


                            </div>
                            <button onClick={getitems} className='py-2 w-[20vh] text-center rounded-3xl cursor-pointer text-lg box-border border-2'>Uygula</button>

                        </div>

                    </div>
                </div>



                <div className=' bg-kahve transition-all duration-1000 ease-in-out mx-10 max-md:mx-0 flex flex-col items-center justify-center py-10 rounded-3xl'>


                    <div className='grid grid-cols-3 mx-20 gap-x-10 gap-y-10 grid-rows-3 max-md:flex max-md:flex-wrap'>



                        {products && products.map(p => {
                            return (
                                <>

                                    <div key={p.id} className='bg-ten w-[60vh] h-[70vh] rounded-2xl'>
                                        <div onClick={() => handleClick(p.id)} className='flex justify-center p-2 cursor-pointer '><img className="rounded-2xl w-[80%] h-[60%] shadow-2xl" src={p.images[0]} alt="foto" /></div>
                                        <div className='flex flex-col justify-center items-center py-5 gap-2'>
                                            <div className='text-xl'>{p.name}</div>

                                            {p.discount ? <div className='flex gap-2'><div className='line-through'>{p.price}TL</div><div>{p.price - (p.price * p.discount / 100)}TL</div></div> : <div className=''>{p.price}TL</div>}


                                            <button className='cursor-pointer px-2 py-1 border-2 rounded-3xl hover:border-black hover:border-3 hover:text-black ' onClick={() => handleCart(p.id, p.name, p.images[0], p.price, (p.price - (p.price * p.discount / 100)))}>Sepete Ekle</button>

                                        </div>



                                    </div >


                                </>

                            )
                        })




                        }





                    </div>




                </div>





            </div>




        </div >
    )
}

export default Products




/*<div className='flex justify-center p-2 '><img className="rounded-2xl w-[80%] h-[60%] shadow-2xl" src='https://cdn.shopier.app/pictures_large/KUF__2726abc5d6bd9170dad0eea21021b4bd.png' alt="foto" /></div>
    <div className='flex flex-col justify-center items-center py-5 gap-2'>
        <div className='text-xl'>PORSCHE 911</div>
        <div>250TL</div>
        <button className='cursor-pointer px-2 py-1 border-2 rounded-3xl '>Sepete Ekle</button>

    </div>
*/