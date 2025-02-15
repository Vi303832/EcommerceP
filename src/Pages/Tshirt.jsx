
import React, { useEffect, useState } from 'react'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../Firebase'
import { useNavigate } from 'react-router-dom'

function Tshirt() {

    let [products, setproducs] = useState([])
    let navigate = useNavigate();
    useEffect(() => {

        let fetcher = async () => {

            let colref = collection(db, "Ürünler")
            const q = query(colref, where("dacategory", "==",
                "tshirt"),

            );
            const docsnap = await getDocs(q)

            const productsList = docsnap.docs.map(doc => ({

                ...doc.data()
            }));
            setproducs(productsList)
            console.log(products)
        }
        fetcher();

    }, [])


    let handleClick = (id) => {

        navigate(`/Ürün/${id}`)

    }



    return (

        <div className=' bg-kahve transition-all duration-1000 ease-in-out mx-10 flex justify-center py-10 my-10 rounded-3xl'>

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






    )
}



export default Tshirt