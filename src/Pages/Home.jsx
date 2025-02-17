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

        <span className='max-md:max-h-screen max-md:w-[100vh] max-lg:overflow-hidden'>
            <>
                <div className='text-bordo font-arial '>
                    <div className='flex flex-col justify-center items-center gap-6 py-15'>
                        <h1 className='text-4xl  text-center'>Estetik ve Uyumun Buluşma Noktası</h1>
                        <h2>KUF ile Günlük Stilinizi Yenileyin</h2>
                    </div>
                </div>
                <div className='max-lg:bg-bordo max-md:bg-ten   '>
                    <div className='text-beyaz hidden  max-lg:block max-lg:absolute  max-md:hidden text-[40vh] w-[80%] -rotate-45 opacity-70 mb-40 overflow-hidden'><div className='mr-30'>KUF</div><div className='ml-80'>KUF</div></div>
                    <div className="relative overflow-hidden m-3 max-lg:w-[70vh] max-lg:mx-auto  ">

                        <div className="max-w-lg   *:">
                            <Carousel slides={slides} />
                        </div>
                    </div>
                </div>

                <div className='font-arial'>
                    <div className='h-[100%] w-[80%] max-sm:w-[100%] mx-30 mt-50 mb-10 flex max-lg:mx-15  max-sm:gap-2 max-sm:mx-1 gap-3'>
                        <div className='w-[50%] h-[50%] max-lg:w-[250%] max-lg:h-[100%] '><img src={bottom} className='h-[80vh] w-[80%] max-lg:w-[100%] object-fit max-lg:object-cover max-sm:w-[100%] ' /></div>
                        <div className='flex flex-col justify-center items-center gap-15'>
                            <div className='flex flex-col  justify-start items-start gap-15 w-[100%] '>
                                <div className='gap-5 flex flex-col'>
                                    <h1 className='text-aclacivert text-5xl  font-bold italic'>KUF</h1>
                                    <div className='text-6xl max-sm:text-5xl'>Özel Tasarım Hoodie </div>
                                    <div className='text-sm w-[80%]'>Her parça, günlük yaşamınıza estetik bir dokunuş katmak için tasarlandı. Rahatlığın şıklıkla buluştuğu bu koleksiyonla kendinizi özgür hissedin.</div>
                                </div>
                                <button onClick={() => navigate("/Hoodie")} className=' px-10 py-2 box-border rounded-3xl bg-aclacivert  text-beyaz cursor-pointer '>Keşfet</button>
                            </div>

                        </div>


                    </div>
                    <div className='h-[100%] w-[80%]  mx-30 mt-50 mb-10 flex max-lg:mx-10 max-lg:gap-0  gap-3  '>

                        <div className='flex flex-col justify-center items-center  max-lg:items-end gap-15 overflow-hidden'>
                            <div className='flex flex-col  justify-end items-start gap-15 w-[100%]  '>
                                <div className='gap-5 flex flex-col items-end w-[90%]   max-lg:'>
                                    <h1 className='text-kahve text-5xl font-bold  max-lg:w-[80%]  italic transform '>KUF</h1>
                                    <div className='text-6xl  max-lg:w-[80%]  max-lg:text-4xl'>Tema Sweatshirt </div>
                                    <div className='text-sm w-[80%]'>KUF, giydiklerinizle kendinizi ifade etmenin yeni bir yolunu sunuyor. Tasarımlarımız, sadece bir kıyafet değil, aynı zamanda stilinize ve kişiliğinize dair bir yansıma. KUF ile farkınızı ortaya koyun.</div>
                                </div>
                                <div className='flex justify-end w-[90%]'>
                                    <button onClick={() => navigate("/Sweatshirt")} className=' px-10 py-2 box-border rounded-3xl bg-kahve  text-beyaz cursor-pointer '>Keşfet</button>
                                </div>

                            </div>

                        </div>
                        <div className='w-[50%] h-[50%]  max-lg:w-[200vh] max-md:w-[150vh]  max-lg:h-full overflow-hidden '><img src={bottom2} className='h-[80vh] w-[100%]    max-lg:object-fit  object-contain' /></div>
                    </div>
                </div>
                <div
                    className="min-h-screen"
                    style={{
                        background: "linear-gradient(180deg, rgba(251,250,211,1) 10%, rgba(115,4,4,1) 40%, rgba(116,7,6,1) 99%)"
                    }}
                >
                    <div className='w-[90%] min-h-screen font-arial '>
                        <div className='px-30 max-md:px-10 pt-100 pb-40'>
                            <div id="about" className='text-[#fdf3e9] text-5xl py-20'>Hakkımızda</div>
                            <div className='w-[100%] flex gap-10 max-md:flex-col'>
                                <div className='w-[60%] max-md:w-[100%]'>
                                    <img src={hakkımızda} className='max-md:w-[130%]' />
                                </div>
                                <div className='w-[30%] max-md:w-[60vh]  text-[#fdf3e9] items-center justify-center '>
                                    <div className='py-20 text-2xl max-md:h-[50vh] max-md:text-lg  '>KUF olarak, tasarımda rahatlık ve şıklığı bir arada sunma misyonuyla yola çıktık. Günlük yaşamın hızına ayak uydururken estetik ve konforu birleştirerek, her bireyin kendini özgürce ifade edebileceği parçalar yaratıyoruz. Amacımız, sadece giysi değil, aynı zamanda stil ve kişiliğinizi yansıtan anlamlı tasarımlar üretmektir.

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
                            <div className='flex gap-2 h-[60vh]  overflow-hidden w-[120%] max-lg:justify-center'>
                                <img src={insta1} />
                                <img className="max-md:hidden" src={insta2} />
                                <img className='max-lg:hidden ' src={insta3} />
                                <img className='max-xl:hidden ' src={insta4} />
                            </div>

                            <div className='text-beyaz text-2xl flex justify-center items-center w-[100%] text-center pb-5 max-sm:h-[20%]'>
                                <div>Fırsatları kaçırmamak için KUF’u takip edin! ✨ Şıklık ve rahatlık bir arada! Hem estetik hem de konforlu tasarımlarımızla her anınızı özel kılın. Yeni koleksiyonlar, özel indirimler ve daha fazlası için bizi takipte kalın!</div>
                            </div>
                            <div className='flex justify-center pb-20'>

                                <button className='flex gap-2 items-center justify-center text-beyaz  rounded-3xl  px-4 py-2  bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'><FaInstagram /><div>Kuf.studio Takip Et</div></button>

                            </div>
                            <div className='max-sm:  my-20 p-20 bg-ten rounded-3xl font-arial flex gap-3 max-sm:m-0 max-sm:px-50  max-lg:p-10 max-md:w-[100%] max-sm:relative max-sm:right-20 '>
                                <div id="iletişim" className='flex flex-col h-[100%] w-[50%] gap-2 bg max-xl:hidden max-sm:hidden max-sm:w-0'>
                                    <div className='text-3xl'>İletişim</div>
                                    <img src={park} className='w-[100%] h-[70vh] object-cover max-md:' />
                                </div>
                                <div className='w-[50%] border-2 p-2 flex max-xl:w-[100%] max-md:flex-col max-sm:relative max-sm:right-30  max-sm:w-[300vh] '>
                                    <div className='w-[50%] h-[100%] max-md:w-[100%] max-md:p-5'>
                                        <div className=' flex flex-col gap-10 justify-center items-center  h-[100%]'>

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
                                                <textarea className='w-[100%] h-[120%] border-b-2 resize-none'></textarea>
                                            </div>
                                            <button className='my-10 bg-bordo rounded-3xl px-3 py-1 text-beyaz box-border '>Gönder</button>
                                        </div>



                                    </div>
                                    <div className='w-[50%] flex flex-col justify-center items-center max-md:w-[100%] max-md:py-5 '>

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


        </span>


    )
}

export default Home