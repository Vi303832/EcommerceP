import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../Firebase'


function Products() {

    let [products, setproducts] = useState([])

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







    return (
        <div>
            <div className='min-h-screen w-[100%] font-arial text-bordo '>
                <div className='p-15'>
                    <div className='text-5xl'>Bütün Ürünler</div>
                </div>
                <div className=' bg-kahve  mx-10 flex justify-center py-10 rounded-3xl'>

                    <div className='grid grid-cols-3 mx-20 gap-x-10 gap-y-10 grid-rows-3 '>

                        <div className='bg-ten w-[60vh] h-[70vh] rounded-2xl'>

                            <div className='flex justify-center p-2 '><img className="rounded-2xl w-[80%] h-[60%] shadow-2xl" src='https://cdn.shopier.app/pictures_large/KUF__2726abc5d6bd9170dad0eea21021b4bd.png' alt="foto" /></div>
                            <div className='flex flex-col justify-center items-center py-5 gap-2'>
                                <div className='text-xl'>PORSCHE 911</div>
                                <div>250TL</div>
                                <button className='cursor-pointer px-2 py-1 border-2 rounded-3xl '>Sepete Ekle</button>

                            </div>


                        </div>
                        <div className='bg-ten  w-[60vh] h-[70vh]'>

                            X



                        </div>
                        <div className='bg-ten  w-[60vh] h-[70vh] '>

                            X



                        </div>
                        <div className='bg-ten w-[60vh] h-[70vh]'>

                            X



                        </div>
                        <div className='bg-ten  w-[60vh] h-[70vh]'>

                            X



                        </div>
                        <div className='bg-ten  w-[60vh] h-[70vh] '>

                            X



                        </div>
                        <div className='bg-ten w-[60vh] h-[70vh]'>

                            X



                        </div>
                        <div className='bg-ten  w-[60vh] h-[70vh]'>

                            X



                        </div>
                        <div className='bg-ten  w-[60vh] h-[70vh] '>

                            X



                        </div>





                    </div>




                </div>





            </div>




        </div>
    )
}

export default Products



/*{products && products.map(p => {
                            return (

                                <div>{p.name}</div>









                            )
                        })




                        }*/