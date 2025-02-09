import React from 'react'
import Hero from "../Assets/Hero.jpg"


function Home() {
    return (
        <div className='text-bordo font-arial'>
            <div className='flex flex-col justify-center items-center gap-6 py-15'>
                <h1 className='text-4xl'>Estetik ve Uyumun Buluşma Noktası</h1>
                <h2>KUF ile Günlük Stilinizi Yenileyin</h2>
            </div>
            <div className='flex items-center justify-center w-[90%] bg-amber-50 mx-auto'>
                <img src={Hero} className=' h-[80vh] object-contain' />



            </div>

        </div>
    )
}

export default Home