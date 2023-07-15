import React from 'react'
export default function Home(){
    return(
        <>
        <div className='home-container'>
            <div className='text-container'>
                <h1 className='welcome'>Welcome to <span className='home-span'>Kikwetu</span> </h1> 
                <p>
                A trendy clothes store, where fashion meets footwear! Step into a world of 
                style and comfort as you explore our vast collection of sneakers and high heels. Our store 
                is a haven for shoe enthusiasts, offering a diverse range 
                of options to suit every taste and occasion. 
                </p>
            
            </div>

            <div className='img-container'>
                <img className='landing-image' src="https://images.pexels.com/photos/4355345/pexels-photo-4355345.jpeg?auto=compress&cs=tinysrgb" alt="" />
            </div>
        </div>
        </>
    )
}