import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase';
import { doc, getDoc } from 'firebase/firestore';

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

    // If product data is still loading, show a loading message
    if (p === null) {
        return <p>Loading or product not found...</p>;
    }

    return (
        <div className='flex flex-row w-[100%]'>

            {/*Left Side*/}
            <div className='w-[50%] p-1'>
                <div className='flex overflow-hidden relative'>
                    <img
                        src={p.images[currentIndex]}
                        alt={`Image ${currentIndex}`}
                        className='w-[100%] ' />

                    <div className='absolute inset-0 flex justify-between items-center'>
                        <button onClick={prevImage} className='text-center bg-white text-black px-4 py-2 rounded-full shadow-lg"'>&lt;
                        </button>
                        <button onClick={nextImage} className='bg-white text-center transition duration-1000 text-black px-4 py-2 rounded-full shadow-lg'> &gt;</button>
                    </div>


                </div>
                <div className='flex items-center justify-center gap-3 border-4'>
                    {p.images.map(i => {
                        return (
                            <div>
                                <img
                                    src={i}
                                    alt="ss"
                                    className='  ' />

                            </div>

                        )


                    })}
                </div>
            </div>





            <div className='w-[50%] flex flex-col items-center p-10 gap-5'>
                <div>{p.name}</div>
                <div>{p.price}TL</div>
                <div><select className="border-2">
                    {Object.entries(p.sizes).map(([size, quantity], index) => (
                        quantity > 0 ? (
                            <option key={index} value={size}>
                                {size} - {quantity} available
                            </option>
                        ) : null
                    ))}
                </select>





                </div>
                <div>
                    <select className='border-2'>
                        <option>Renk Seçin</option>
                        {p.colors.map((c) =>


                            <option value={c}>{c}</option>



                        )}
                    </select>


                </div>
                <div className='flex flex-col items-center gap-5'>
                    <div>
                        Adet
                    </div>

                    <div onClick={check} className='flex gap-10'>
                        {adjustable ? <button onClick={() => setadet(--adet)}>-</button> : <button>-</button>}
                        <div>{adet}</div>
                        <button onClick={() => setadet(++adet)}>+</button>
                    </div>
                </div>
                <div>Sepete Ekle</div>
                <div>Hemen Al</div>

                <div>
                    <div>Ürün Açıklaması</div>
                    <hr></hr>
                    <div>
                        {p.description}
                    </div>

                </div>

            </div>
        </div >
    );
}

export default ThisProduct;
