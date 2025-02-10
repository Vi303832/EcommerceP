import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../Firebase'
import { useNavigate } from 'react-router-dom'


function Products() {

    let [products, setproducts] = useState([])
    let [plus, setplus] = useState("+")
    let [anim, setanim] = useState(false)
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


    return (
        <div>
            <div className='min-h-screen w-[100%] font-arial text-bordo '>
                <div className='p-15 '>
                    <span className='flex gap-2 items-center justfiy-center'><span className='text-5xl'>Bütün Ürünler</span><span onClick={Displayer} className={`text-5xl cursor-pointer transition transform ease-linear duration-200 ${plus === "-" ? 'rotate-180' : 'rotate-0'}`}>{plus}</span></span>
                    <div
                        className={`transition-all duration-1000 ease-in-out overflow-hidden ${anim ? "max-h-96 p-8 opacity-100" : "max-h-0 p-0 opacity-0"
                            }`}
                    >
                        <div className="p-2 text-xl">Hoodie</div>
                        <div className="p-2 text-xl">Sweatshirt</div>
                        <div className="p-2 text-xl">T-shirt</div>
                        <div className="p-2 text-xl">Other Products</div>
                    </div>
                </div>

                <div className=' bg-kahve  mx-10 flex justify-center py-10 rounded-3xl'>

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