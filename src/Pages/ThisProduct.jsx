import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function ThisProduct() {
    const { id } = useParams(); // Extract the product ID from URL params
    const docRef = doc(db, "Ürünler", id); // Reference the specific document by ID

    const [p, setproductdata] = useState(null); // Initialize as null, to handle loading state
    let [adet, setadet] = useState(0);
    let [adjustable, setadjs] = useState(true)
    // Fetch product data from Firestore
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setproductdata(docSnap.data());
                } else {
                    console.log("No such document!");
                    setproductdata(null); // No document found
                }
            } catch (error) {
                console.error("Error fetching document:", error);
                setproductdata(null); // In case of error, set to null
            }
        };

        fetchData();
    }, [id]); // Re-run effect when the `id` changes

    // Adjust the quantity when it's changed
    let check = () => {
        if (adet <= 0) {
            setadjs(false)
            setadet(0)

        }
        else {
            setadjs(true)
        }
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % p.images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + p.images.length) % p.images.length
        );
    };

    // Function to change the current image based on the selected thumbnail
    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    // If product data is still loading, show a loading message
    if (p === null) {
        return <p>Loading or product not found...</p>;
    }

    return (
        <div className='flex flex-row w-[100%] max-sm:flex-col max-sm:justify-center max-sm:items-center pb-20'>

            {/* Left Side */}
            <div className='w-[50%] max-sm:w-[100%] pt-1'>
                <div className='flex overflow-hidden relative'>
                    <img
                        src={p.images[currentIndex]}
                        alt={`Image ${currentIndex}`}
                        className='w-[100%] ' />
                    <div className='absolute inset-0 flex justify-between items-center'>
                        <button onClick={prevImage} className='text-center bg-gray-100    text-black font-bold px-4 py-4 mx-2 rounded-full shadow-lg opacity-50 hover:opacity-100 cursor-pointer'><FaAngleLeft />
                        </button>
                        <button onClick={nextImage} className='text-center bg-gray-100    text-black font-bold px-4 py-4 mx-2 rounded-full shadow-lg opacity-50 hover:opacity-100 cursor-pointer'><FaAngleRight /></button>
                    </div>
                </div>

                {/* Thumbnails of the images */}
                <div className='flex items-center justify-center gap-3 pt-5'>
                    {p.images.map((i, index) => {
                        return (
                            <div key={index} className={`cursor-pointer ${index === currentIndex ? 'border-2 border-blue-500' : ''}`}>
                                <img
                                    src={i}
                                    alt={`Thumbnail ${index}`}
                                    className='w-[20vh] h-[20vh] object-cover'
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Side */}
            <div className='w-[50%] max-sm:w-[70%] flex flex-col items-center p-10 gap-10 font-arial'>
                <div className='text-3xl justify-center items-center flex flex-col'>{p.name}<hr className='my-5 w-[200%]' /></div>

                <div className='text-xl'>{p.price}TL</div>
                <div className='flex gap-3'>

                    <div>
                        <select className=" px-10 py-2 rounded-3xl  text-center">
                            <option>Renk Seçin</option>
                            {p.colors.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>
                    <div><select className=" px-10 py-2 rounded-3xl  text-center">
                        {Object.entries(p.sizes).map(([size, quantity], index) => (
                            quantity > 0 ? (
                                <option key={index} value={size} >
                                    {size} - {quantity} adet
                                </option>
                            ) : null
                        ))}
                    </select>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-10'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='flex flex-col justify-center items-center'>Adet<hr className='w-[140%]' /></div>
                        <div onClick={check} className='flex gap-10'>
                            {adjustable ? <button className='text-center bg-gray-100  text-black font-bold px-4 rounded-3xl py-1  shadow-lg opacity-50 hover:opacity-100 cursor-pointer' onClick={() => setadet(--adet)}>-</button> : <button className='text-center bg-gray-100  text-black font-bold px-4 rounded-3xl py-1  shadow-lg opacity-50 hover:opacity-100 cursor-pointer'>-</button>}
                            <div>{adet}</div>
                            <button className='text-center bg-gray-100  text-black font-bold px-4 rounded-3xl py-1  shadow-lg opacity-50 hover:opacity-100 cursor-pointer' onClick={() => setadet(++adet)}>+</button>
                        </div>
                    </div>

                </div>
                <div className='cursor-pointer hover:text-2xl hover:text-bordo'>Sepete Ekle</div>
                <div className='cursor-pointer hover:text-2xl hover:text-green-500'>Hemen Al</div>
                <div>
                    <div className='text-2xl py-2'>Ürün Açıklaması</div>
                    <hr className='py-2' />
                    <div>{p.description}</div>
                </div>
            </div>
        </div>
    );
}

export default ThisProduct;
