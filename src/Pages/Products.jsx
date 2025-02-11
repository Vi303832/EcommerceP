import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../Firebase'
import { useNavigate } from 'react-router-dom'


function Products() {

    let [products, setproducts] = useState([])
    let [plus, setplus] = useState("+")
    let [anim, setanim] = useState(false)
    let [filter, setfilter] = useState(false)
    let [selectedcat, setselectedcat] = useState([])

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

        try {
            if (!Array.isArray(selectedcat) || selectedcat.length === 0) {
                setError('Please select at least one category or color.');
                return;
            }

            const docRef = collection(db, "Ürünler");
            let q = query(docRef, where("categorys", "array-contains-any", selectedcat));
            let docsnap = await getDocs(q);

            let items = [];
            docsnap.forEach((doc) => {
                items.push(doc.data());
            });

            setproducts(items);
        } catch (error) {

            console.error('Error getting documents: ', error);
        } finally {

        }
    };


    return (
        <div>
            <div className='min-h-screen w-[100%] font-arial text-bordo '>
                <div className='flex justify-between'>
                    <div className='p-15 cursor-pointer'>
                        <span className='flex gap-2 items-center justfiy-center'><span className='text-5xl'>Bütün Ürünler</span><span onClick={Displayer} className={`text-5xl cursor-pointer transition transform ease-linear duration-200 ${plus === "-" ? 'rotate-180' : 'rotate-0'}`}>{plus}</span></span>
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
                    <div className='p-15 cursor-pointer h-[100%] '>
                        <span className={'flex gap-2 items-center  justify-end p-2  '}>{<button onClick={() => setselectedcat([])}
                            className={` text-xl  rounded-2xl border-3 transition-all ease-linear duration-1000 px-2 py-1 relative p-0 ${filter
                                ? "opacity-100 left-0  "
                                : "opacity-0  left-3 "
                                }`}
                        >
                            Clear
                        </button>

                        }<span className='text-xl px-3 py-1 rounded-2xl border-3' onClick={handlefilter}>Filter</span></span>
                        <div
                            className={`transition-all duration-1000 ease-in-out overflow-hidden bg-white rounded-3xl ${filter ? "max-h-[500px] py-8 opacity-100 px-32 " : "max-h-0 p-0 opacity-0"
                                }`}
                        >
                            <div className='h-[100%] w-[100%]'>
                                <div className="flex flex-row gap-10">
                                    {/* Hoodie Selection */}
                                    <div className="flex flex-col gap-2 items-center justify-center w-[20vh] h-[60%]">
                                        <div className="text-2xl">Modeller</div>
                                        <label className={` py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 transition ease-linear duration-1000 ${selectedcat.includes("Hoodie") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Hoodie"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Hoodie
                                        </label>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("Sweatshirt") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Sweatshirt"
                                                onClick={(e) => addclicked(e)}
                                                className='hidden'
                                            />
                                            Sweatshirt
                                        </label>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("Tshirt") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Tshirt"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            T-shirt
                                        </label>
                                    </div>

                                    {/* Color Selection */}
                                    <div className="flex flex-col items-center justify-center  h-[60%] gap-2 ">
                                        <div className="text-2xl">Renk</div>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("Saks Mavisi") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Saks Mavisi"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Saks Mavisi
                                        </label>
                                        <label className={`py-2 w-[20vh] text-center rounded-3xl transition ease-linear duration-1000 text-lg box-border border-2 ${selectedcat.includes("Kahverengi") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Kahverengi"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Kahverengi
                                        </label>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("Gri") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Gri"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Gri
                                        </label>
                                        <label className={`py-2 w-[20vh] text-center transition ease-linear duration-1000 rounded-3xl text-lg box-border border-2 ${selectedcat.includes("Ekru") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Ekru"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Ekru
                                        </label>
                                        <label className={`transition ease-linear duration-1000 py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2 ${selectedcat.includes("Yeşil") ? ' border-4 border-kahve scale-105' : 'scale-100'}`} >
                                            <input
                                                type="checkbox"
                                                value="Yeşil"
                                                className='hidden'
                                                onClick={(e) => addclicked(e)}
                                            />
                                            Yeşil
                                        </label>
                                    </div>
                                </div>


                            </div>
                            <button onClick={getitems} className='py-2 w-[20vh] text-center rounded-3xl text-lg box-border border-2'>Uygula</button>

                        </div>

                    </div>
                </div>



                <div className=' bg-kahve transition-all duration-1000 ease-in-out mx-10 flex flex-col items-center justify-center py-10 rounded-3xl'>


                    <div className='grid grid-cols-3 mx-20 gap-x-10 gap-y-10 grid-rows-3 '>



                        {products && products.map(p => {
                            return (
                                <>
                                    <div key={p.id} className='bg-ten w-[60vh] h-[70vh] rounded-2xl'>
                                        <div onClick={() => handleClick(p.id)} className='flex justify-center p-2 cursor-pointer '><img className="rounded-2xl w-[80%] h-[60%] shadow-2xl" src={p.images[0]} alt="foto" /></div>
                                        <div className='flex flex-col justify-center items-center py-5 gap-2'>
                                            <div className='text-xl'>{p.name}</div>
                                            <div>{p.price}TL</div>
                                            <button className='cursor-pointer px-2 py-1 border-2 rounded-3xl '>Sepete Ekle</button>

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