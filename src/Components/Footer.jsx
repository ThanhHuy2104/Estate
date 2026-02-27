import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-gray-900 w-full pt-10 overflow-hidden px-4 md:px-20 lg:px-32 mt-14' id='Footer'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-white text-left container mx-auto'>
                <div>
                    <img src={assets.logo_dark} alt="" />
                    <p className='my-4 text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
                <div className='md:mx-18'>
                    <p className='text-xl font-bold'>Company</p>
                    <ul className='flex flex-col my-4 text-gray-400'>
                        <a className='py-1' href="#Header">Home</a>
                        <a className='py-1' href="#About">About us</a>
                        <a className='py-1' href="#Contact">Contact us</a>
                        <a className='py-1' href="#Header">Privacy policy</a>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-bold'>Subscribe to our newsletter</p>
                    <p className='my-4 text-gray-400'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className='my-2' action="">
                        <input type="text" placeholder='Enter your email' name='email' className=' 
                        p-2 pl-[8px] rounded mr-2 bg-gray-800'/>
                        <button className='bg-blue-600 p-2 px-4 rounded cursor-pointer'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='border-t-[1px] border-gray-400 my-4'>
                <p className='text-gray-400 text-center pt-4'>Copyright 2024 © GreatStack. All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer