import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase';
import { collection, getDoc, getDocs, query, where, doc, addDoc } from 'firebase/firestore';




function ThisProduct() {

    const { id } = useParams();

    let docref = doc(db, "Ürünler", id)
    let [productdata, setproductdata] = useState();

    useEffect(() => {
        const docRef = collection(db, "Ürünler");

        const fetchData = async () => {
            try {
                const docsnap = await getDoc(docref);
                setproductdata(docsnap.data())

            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        fetchData();
    }, []);






    return (

        <div className='flex flex-row w-[100%]'>
            {/*Left Side*/}
            <div className='w-[50%] p-1'>
                <img src='https://cdn.shopier.app/pictures_large/Kufart_00f8c5e0200fe6474fff80a4aba041b6.png' />


            </div>


            {/*Right Side*/}
            <div className='w-[50%] flex flex-col items-center p-10 gap-5'>
                <div>(500) DAYS OF SUMMER KAPŞONLU</div>
                <div>2.100TL</div>
                <div>Beden</div>
                <div>Kumaş Rengi</div>
                <div>Adet</div>
                <div>Sepete Ekle</div>
                <div>Hemen Al</div>

                <div>
                    <div>Ürün Açıklaması</div>
                    <hr></hr>
                    <div>
                        Couple(çiftler) konseptinde tasarlanmıştır. 2 adet ÜRÜN için bu fiyat geçerlidir.

                        ÖNEMLİ: Kuf butik bir oluşumdur. Nadirende olsa el basımı olduğu için ürünlerin bağzı noktalarında fazladan boya geçişi olabilmektir.
                        ÖN SİPARİŞ SATIŞIDIR. İmalat aşamasındayız. Kargolanma zaman alabilir. İyi ve güzel olan zaman alır ❤️
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ThisProduct