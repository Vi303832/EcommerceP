import React from 'react'
import Hero from "../Assets/Hero.jpg"
import Hero2 from "../Assets/Hero2.jpg"
import Hero3 from "../Assets/Hero3.jpg"
import Hero4 from "../Assets/Hero4.jpg"
import Hero5 from "../Assets/Hero5.jpg"
import bottom from "../Assets/bottom.jpg"
import bottom2 from "../Assets/bottom2.jpg"
import park from "../Assets/park.jpg"
import insta1 from "../Assets/instafoto1.jpg"
import insta2 from "../Assets/instafoto2.jpg"
import insta3 from "../Assets/instafoto3.jpg"
import insta4 from "../Assets/instafoto4.jpg"
import hakkımızda from "../Assets/Hakkımızda.jpg"
import Carousel from './Carousel'
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'



function Home() {

    let navigate = useNavigate()
    const slides = [Hero, Hero2, Hero3, Hero4, Hero5];

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
                            <button onClick={() => navigate("/Hoodie")} className=' px-10 py-2 box-border rounded-3xl bg-aclacivert  text-beyaz cursor-pointer '>Keşfet</button>
                        </div>

                    </div>


                </div>
                <div className='h-[100%] w-[80%] mx-30 mt-50 mb-10 flex  gap-3 '>

                    <div className='flex flex-col justify-center items-center gap-15'>
                        <div className='flex flex-col  justify-end items-start gap-15 w-[100%] '>
                            <div className='gap-5 flex flex-col items-end w-[90%]'>
                                <h1 className='text-kahve text-5xl font-bold  italic transform '>KUF</h1>
                                <div className='text-6xl'>Tema Sweatshirt </div>
                                <div className='text-sm w-[80%]'>KUF, giydiklerinizle kendinizi ifade etmenin yeni bir yolunu sunuyor. Tasarımlarımız, sadece bir kıyafet değil, aynı zamanda stilinize ve kişiliğinize dair bir yansıma. KUF ile farkınızı ortaya koyun.</div>
                            </div>
                            <div className='flex justify-end w-[90%]'>
                                <button onClick={() => navigate("/Sweatshirt")} className=' px-10 py-2 box-border rounded-3xl bg-kahve  text-beyaz cursor-pointer '>Keşfet</button>
                            </div>

                        </div>

                    </div>
                    <div className='w-[50%] h-[50%] '><img src={bottom2} className='h-[80vh] w-[100%] object-contain' /></div>

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
                        <div id="about" className='text-[#fdf3e9] text-5xl py-20'>Hakkımızda</div>
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
                    <div className='px-30  flex flex-col gap-10 pt-10 font-arial' style={{
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
                        <div className='my-20 p-20 bg-ten rounded-3xl font-arial flex gap-3 w-[100%]'>
                            <div id="iletişim" className='flex flex-col h-[100%] w-[50%] gap-2 bg'>
                                <div className='text-3xl'>İletişim</div>
                                <img src={park} className='w-[100%] h-[70vh] object-cover' />
                            </div>
                            <div className='w-[50%] border-2 p-2 flex g'>
                                <div className='w-[50%] h-[100%] '>
                                    <div className=' flex flex-col gap-10 justify-center items-center h-[100%]'>

                                        <div>
                                            <div className='text-2xl'>Adınız Soyadınız</div>
                                            <input className='w-[100%] border-b-2 '></input>
                                        </div>
                                        <div>
                                            <div className='text-2xl'>E-mail</div>
                                            <input className='w-[100%] border-b-2'></input>
                                        </div>
                                        <div>
                                            <div className='text-2xl'>Mesajınız</div>
                                            <textarea className='w-[120%] h-[120%] border-b-2 resize-none'></textarea>
                                        </div>
                                        <button className='my-10 bg-bordo rounded-3xl px-3 py-1 text-beyaz box-border '>Gönder</button>
                                    </div>



                                </div>
                                <div className='w-[50%] flex flex-col justify-center items-center '>

                                    <div className='flex flex-col gap-10'>
                                        <div className='text-2xl'>İletişim Bilgileri</div>
                                        <div className='flex flex-col gap-5'>
                                            <div>onurcetin72208@gmail.com</div>
                                            <div>Tekirdağ/Türkiye?</div>
                                            <div>+90 5xxxxxxxx</div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>




                </div>

            </div >

        </>


    )
}

export default Home