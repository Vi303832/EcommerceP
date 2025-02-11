import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { db } from '../Firebase'
import { addDoc, collection, updateDoc } from 'firebase/firestore'


function AddData() {

    const preset_key = 'Deneme'
    const cloud_name = 'dwruhrrkm'
    const [dacategory, setdacategory] = useState("");
    const [images, setimage] = useState([]);
    const [colors, setColors] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [sizes, setSizes] = useState({ S: 0, M: 0, L: 0, XL: 0, XXL: 0 });
    const [discount, setDiscount] = useState("");
    const [description, setDescription] = useState("");
    const [categorys, setcategorys] = useState([]);


    let handlefile = async (event) => {
        const file = event.target.files[0]
        const formData = new FormData();
        formData.append("file", file)
        formData.append("upload_preset", preset_key)
        formData.append("cloud_name", cloud_name)
        let response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
        console.log(response.data);
        setimage(i => [...i, response.data.url])

    }

    const handleColorChange = (index, value) => {
        const newColors = [...colors];
        newColors[index] = value;
        setColors(newColors);

    };

    const handlecategory = (event) => {
        setcategorys([...colors, event.target.value])
        setdacategory(event.target.value)
        console.log(categorys)


    }


    const handleSubmit = async () => {
        try {





            let ref = collection(db, "Ürünler");


            const formData = {
                dacategory,
                categorys,
                name,
                price,
                discount,
                description,
                images,
                sizes: {
                    S: parseInt(sizes.S),
                    M: parseInt(sizes.M),
                    L: parseInt(sizes.L),
                    XL: parseInt(sizes.XL),
                    XXL: parseInt(sizes.XXL),
                },
                colors,
            };


            const docRef = await addDoc(ref, formData);


            console.log("Belge oluşturuldu, id:", docRef.id);
            await updateDoc(docRef, { id: docRef.id });



            window.location.reload();



        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };







    return (
        <div className='bg-ten h-screen flex items-center justify-center'>

            <div className='container bg-white h-[80%] mx-auto w-[70%] rounded-2xl border-2 border-bordo flex flex-col flex-wrap justify-center items-center gap-5'>

                <input
                    className="border-2"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="border-2"
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    className="border-2"
                    type="number"
                    placeholder="İndirim Oranı"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                />
                <div className='flex flex-col'>
                    <label>Photo</label>
                    <input className='border-2' type="file" placeholder='Photo' onChange={handlefile}></input>
                    <label>Photo2</label>
                    <input className='border-2' type="file" placeholder='Photo' onChange={handlefile}></input>
                    <label>Photo3</label>
                    <input className='border-2' type="file" placeholder='Photo' onChange={handlefile}></input>
                    <label>Photo4</label>
                    <input className='border-2' type="file" placeholder='Photo' onChange={handlefile}></input>
                    <label>Photo5</label>
                    <input className='border-2' type="file" placeholder='Photo' onChange={handlefile}></input>
                </div>


                <div className='flex  gap-30'>

                    <div className='flex gap-5 flex-col'>
                        Renkler
                        {[...Array(5)].map((_, index) => (
                            <input
                                key={index}
                                type='text'
                                className='border-2'
                                placeholder={`Renk ${index + 1}`}
                                value={colors[index] || ''}
                                onChange={(e) => handleColorChange(index, e.target.value)}
                            />
                        ))}
                    </div>


                    <div className='flex flex-col'>
                        <label>S</label>
                        <input
                            type="number"
                            className="border-2"
                            value={sizes.S}
                            onChange={(e) => setSizes({ ...sizes, S: e.target.value })}
                        />
                        <label>M</label>
                        <input
                            type="number"
                            className="border-2"
                            value={sizes.M}
                            onChange={(e) => setSizes({ ...sizes, M: e.target.value })}
                        />
                        <label>L</label>
                        <input
                            type="number"
                            className="border-2"
                            value={sizes.L}
                            onChange={(e) => setSizes({ ...sizes, L: e.target.value })}
                        />
                        <label>XL</label>
                        <input
                            type="number"
                            className="border-2"
                            value={sizes.XL}
                            onChange={(e) => setSizes({ ...sizes, XL: e.target.value })}
                        />
                        <label>XXL</label>
                        <input
                            type="number"
                            className="border-2"
                            value={sizes.XXL}
                            onChange={(e) => setSizes({ ...sizes, XXL: e.target.value })}
                        />
                    </div>

                </div>

                <div>
                    <textarea value={description}
                        onChange={(e) => setDescription(e.target.value)} className='resize-none h-[35vh] w-[50vh] border-2 overflow-scroll'></textarea>
                </div>

                <div>

                    <select onChange={handlecategory} className='border-2'>
                        <option value=""></option>
                        <option value="Tshirt">Tshirt</option>
                        <option value="Hoodie">Hoodie</option>
                        <option value="Sweatshirt">Sweatshirt</option>
                        <option value="Diğer">Diğer</option>


                    </select>




                </div>





                <button
                    className="border-2 px-3 rounded-xl"
                    onClick={handleSubmit}
                >
                    Ekle
                </button>














            </div>



        </div>
    )
}

export default AddData


/*  <div className='flex gap-5 flex-col'>
                        Renkler
                        {[...Array(5)].map((_, index) => (
                            <input
                                key={index}
                                type='text'
                                className='border-2'
                                placeholder={`Renk ${index + 1}`}
                                value={colors[index] || ''}
                                onChange={(e) => handleColorChange(index, e.target.value)}
                            />
                        ))}
                    </div>
*/