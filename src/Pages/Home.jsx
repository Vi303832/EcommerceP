import React from 'react'
import Hero from "../Assets/Hero.jpg"
import Hero2 from "../Assets/Hero2.jpg"
import Hero3 from "../Assets/Hero3.jpg"
import bottom from "../Assets/bottom.jpg"
import insta1 from "../Assets/instafoto1.jpg"
import insta2 from "../Assets/instafoto2.jpg"
import insta3 from "../Assets/instafoto3.jpg"
import insta4 from "../Assets/instafoto4.jpg"
import hakkımızda from "../Assets/Hakkımızda.jpg"
import Carousel from './Carousel'
import { FaInstagram } from "react-icons/fa";



function Home() {

    const slides = [Hero, Hero2, Hero3];

    return (
        <>
            <div className='text-bordo font-arial '>
                <div className='flex flex-col justify-center items-center gap-6 py-15'>
                    <h1 className='text-4xl'>Estetik ve Uyumun Buluşma Noktası</h1>
                    <h2>KUF ile Günlük Stilinizi Yenileyin</h2>
                </div>
            </div>
            <div className="relative overflow-hidden m-3">
                <div className="max-w-lg *:">
                    <Carousel slides={slides} />
                </div>
            </div>
            <div className='font-arial'>
                <div className='h-[100%] w-[90%] mx-30 mt-50 mb-10 flex  gap-3'>
                    <div className='w-[50%] h-[50%] '><img src={bottom} className='h-[80vh] w-[80%] object-fit' /></div>
                    <div className='flex flex-col justify-center items-center gap-15'>
                        <div className='flex flex-col  justify-start items-start gap-15 w-[100%] '>
                            <div className='gap-5 flex flex-col'>
                                <h1 className='text-aclacivert text-5xl font-bold italic'>KUF</h1>
                                <div className='text-6xl'>Özel Tasarım Hoodie </div>
                                <div className='text-sm w-[80%]'>Her parça, günlük yaşamınıza estetik bir dokunuş katmak için tasarlandı. Rahatlığın şıklıkla buluştuğu bu koleksiyonla kendinizi özgür hissedin.</div>
                            </div>
                            <button className=' px-10 py-2 box-border rounded-3xl bg-aclacivert  text-amber-50 '>Keşfet</button>
                        </div>

                    </div>


                </div>
            </div>
            <div
                className="min-h-screen"
                style={{
                    background: "linear-gradient(180deg, rgba(251,250,211,1) 10%, rgba(115,4,4,1) 40%, rgba(116,7,6,1) 99%)"
                }}
            >
                <div className='w-[100%] min-h-screen font-arial'>
                    <div className='px-30 pt-100 pb-40'>
                        <div className='text-[#fdf3e9] text-5xl py-20'>Hakkımızda</div>
                        <div className='w-[100%] flex gap-10'>
                            <div className='w-[60%]'>
                                <img src={hakkımızda} />


                            </div>
                            <div className='w-[30%] text-[#fdf3e9] items-center justify-center'>
                                <div className='py-20 text-2xl'>KUF olarak, tasarımda rahatlık ve şıklığı bir arada sunma misyonuyla yola çıktık. Günlük yaşamın hızına ayak uydururken estetik ve konforu birleştirerek, her bireyin kendini özgürce ifade edebileceği parçalar yaratıyoruz. Amacımız, sadece giysi değil, aynı zamanda stil ve kişiliğinizi yansıtan anlamlı tasarımlar üretmektir.

                                </div>

                            </div>


                        </div>
                    </div>
                    <div className='px-30  flex flex-col gap-10 pt-10' style={{
                        background: "linear-gradient(180deg, rgba(115,4,4,0) 10%, rgba(136,60,52,0) 100%)"
                    }} >


                        <div className='text-beyaz'>
                            <div className='text-5xl pb-5'>Bizi Takip Et</div>
                        </div>
                        <div className='flex gap-2 h-[60vh] mx-3 overflow-hidden w-[100%]'>
                            <img src={insta1} />
                            <img src={insta2} />
                            <img src={insta3} />
                            <img src={insta4} />
                        </div>

                        <div className='text-beyaz text-2xl flex justify-center items-center w-[100%] text-center pb-5'>
                            <div>Fırsatları kaçırmamak için KUF’u takip edin! ✨ Şıklık ve rahatlık bir arada! Hem estetik hem de konforlu tasarımlarımızla her anınızı özel kılın. Yeni koleksiyonlar, özel indirimler ve daha fazlası için bizi takipte kalın!</div>
                        </div>
                        <div className='flex justify-center pb-20'>

                            <button className='flex gap-2 items-center justify-center text-beyaz  rounded-3xl  px-4 py-2  bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'><FaInstagram /><div>Kuf.studio Takip Et</div></button>

                        </div>
                        <div>
                            İletişim
                        </div>

                    </div>




                </div>

            </div >

        </>


    )
}

export default Home