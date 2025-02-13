import React from 'react'

function Cart() {
    return (
        <div className='max-h-screen h-[50vh] w-[100%] flex gap-10'>
            {/*LeftSide*/}
            <div className='w-[70%] rounded-3xl h-[100%]border-2 bg-pink-400'>
                <div className='h-[8vh]  flex justify-center items-center'><span>Sepetiniz</span></div>
                <hr></hr>
                <div className='bg-amber-800 h-[80%]'>S</div>
            </div>
            {/*Rightside*/}
            <div className='w-[30vh]'>
                <div className='h-[8vh] bg-sky-300 flex justify-center items-center'><span>Sepetiniz</span></div>
                <hr></hr>


            </div>
        </div>
    )
}

export default Cart