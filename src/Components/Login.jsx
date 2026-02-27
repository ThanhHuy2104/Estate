import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='text-gray-300 min-h-screen w-full bg-cover bg-center overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }}>
            <img src={assets.logo} className='px-4 pt-2' alt="" />
            <div className='bg-transparent backdrop-blur-md max-w-[350px] mt-[160px] md:max-w-[450px] md:mt-[120px] m-auto p-[60px] rounded'>
                <p className='text-center text-3xl font-bold mb-4'>Login</p>
                <form action="" className='flex flex-col'>
                    <input className='my-4 p-2 rounded border' type="email" placeholder='Email' required/>
                    <input className='mb-8 p-2 rounded border' type="password" placeholder='Password' required/>
                    <Link to='/' className='bg-blue-600 p-3 rounded text-xl font-bold text-center'>Login</Link>
                    <div className='flex justify-between mt-3'>
                        <div className='flex'>
                            <input type="checkbox" className='scale-150' />
                            <p className='ml-2'>Remember Me</p>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login