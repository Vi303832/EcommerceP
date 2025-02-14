import React from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
    let navigate = useNavigate()




    return (
        <div className='h-[50vh] '>
            <div className='flex justify-center text-3xl'>Hoşgeldin Admin</div>
            <div className='flex h-[70%]'>
                <div className='w-[50%] h-[100%] flex justify-center items-center'>
                    <button className='border-2 px-15 py-3 rounded text-white bg-bordo cursor-pointer border-black'>Ürünleri Düzenle/Sil</button>
                </div>
                <div className='w-[50%] h-[100%] flex justify-center items-center'>
                    <button className='border-2 px-15 py-3 rounded text-white bg-lacivert border-black cursor-pointer' onClick={() => navigate("/AddData")}>Ürün Ekle</button>
                </div>
            </div>








        </div>
    )
}

export default Admin