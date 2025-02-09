import React from 'react'

function AddData() {
    return (
        <div className='bg-ten h-screen flex items-center justify-center'>

            <div className='container bg-white h-[80%] mx-auto w-[70%] rounded-2xl border-2 border-bordo flex flex-col flex-wrap justify-center items-center gap-5'>

                <input className='border-2' type='text' placeholder='Name'></input>
                <input className='border-2' type='number' placeholder='Price'></input>
                <input className='border-2' type="number" placeholder='İndirim Oranı'></input>
                <div className='flex flex-col'>
                    <label>Photo</label>
                    <input className='border-2' type="file" placeholder='Photo'></input>
                    <label>Photo2</label>
                    <input className='border-2' type="file" placeholder='Photo'></input>
                    <label>Photo3</label>
                    <input className='border-2' type="file" placeholder='Photo'></input>
                    <label>Photo4</label>
                    <input className='border-2' type="file" placeholder='Photo'></input>
                    <label>Photo5</label>
                    <input className='border-2' type="file" placeholder='Photo'></input>
                </div>


                <div className='flex  gap-30'>

                    <div className=' flex gap-5 flex-col'>
                        Renkler
                        <input type="text" className='border-2' placeholder='Mavi' />
                        <input type="text" className='border-2' placeholder='Kırmızı' />
                        <input type="text" className='border-2' />
                        <input type="text" className='border-2' />
                        <input type="text" className='border-2' />





                    </div>

                    <div className='flex flex-col'>
                        S
                        <input type='number' className='border-2' />
                        M
                        <input type='number' className='border-2' />
                        L
                        <input type='number' className='border-2' />
                        Xl
                        <input type='number' className='border-2' />
                        XXL
                        <input type='number' className='border-2' />





                    </div>

                </div>

                <div>
                    <textarea className='resize-none h-[35vh] w-[50vh] border-2 overflow-scroll'></textarea>
                </div>
                <button className='border-2 px-3 rounded-xl'>Ekle</button>














            </div>



        </div>
    )
}

export default AddData