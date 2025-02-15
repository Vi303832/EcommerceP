import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { collection, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function Databaseset() {
    let docref = collection(db, "Ürünler")

    let [datas, setdata] = useState([])
    let navigate = useNavigate()



    useEffect(() => {



        let fetcs = async () => {

            let docssnap = await getDocs(docref)
            docssnap.forEach((doc) => {

                setdata((p) => [...p, doc.data()])

            }
            )
        }

        fetcs();
    }, [])

    let handledüzenleme = (Id) => {
        navigate(`/Update/${Id}`)


    }

    let handledelete = (Id) => {
        deleteDoc(docref, Id)

    }





    return (
        <div className='bg-ten h-screen flex items-center justify-center'>

            <div className='container bg-white h-[90%] mx-auto w-[80%] rounded-2xl border-2 border-bordo flex flex-col justify-start items-start gap-5 p-15 overflow-scroll'>
                {datas.map((data, i) => (
                    <>
                        <hr className='h-2 w-[100%]' ></hr>
                        <div className='flex  h-[25%] w-[100%] items-center'>

                            <div className='bg-amber-900 w-[15%]'>
                                <img className='' src={data.images[0]} />
                            </div>
                            <div className='flex justify-start items-start gap-3 mx-auto'>
                                <div> İsim: {data.name}</div>
                                <div> Model: {data.dacategory}</div>
                                <div> Fiyat: {data.price}TL</div>
                                <div> İndirim: {data.discount}</div>
                                <div className='flex gap-2'><div> Renkler:</div><div className='flex flex-col gap-1'>{data.colors.map((s, i) => <div key={i}>{s}</div>)}</div></div>

                                <div className='flex gap-2'><div> Boyutlar:</div><div className='flex flex-col gap-1'> {Object.entries(data.sizes).map(([size, value], index) => (
                                    <div key={index}>{size}: {value}</div>
                                ))}</div></div>

                            </div>
                            <div className='flex flex-col gap-2'>
                                <button className='border-2 rounded-xl px-4 py-1 box-border bg-green-800 text-sm  text-white hover:bg-green-900 cursor-pointer' onClick={() => handledüzenleme(data.id)} >Düzenle</button>
                                <button className='border-2 rounded-xl px-4 py-1 box-border bg-red-800 text-sm  text-white hover:bg-red-900 cursor-pointer' onClick={() => handledelete(data.id)} >Sil</button>
                            </div>


                        </div>


                    </>
                ))

                }













            </div >



        </div >
    )
}

export default Databaseset