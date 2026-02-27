import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending...')
        const formData = new FormData(event.target);
        formData.append("access_key", "f9dfb9b0-51c9-4906-a4cb-c6ab166ff7cf");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult('')
            toast.success('Form Submitted Successfully!')
        } else {
            console.error('Error')
            toast.error('Error')
            setResult('');
        }
    };

    return (
        <div className='container mx-auto py-4 pt-20 px-6 sm:px-20 lg:px-32
    w-full overflow-hidden'>
            <h1 className='text-center font-bold text-2xl sm:text-4xl mb-2'>Contact <span
                className='underline underline-offset-4 under decoration-1 font-light'>
                With Us</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let’s Build Your Future Together</p>
            <form onSubmit={onSubmit} action="" className='text-center max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        <label for='name'>Your Name</label>
                        <input className='w-full border border-gray-300 rounded py-3 
                        px-4 mt-2' name='name' id='name' type="text" placeholder='Your Name' required />
                    </div>

                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        <label for='email'>Your Email</label>
                        <input className='w-full border border-gray-300 rounded py-3 
                        px-4 mt-2' name='email' id='email' type="email" placeholder='Your Email' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    <label for='message'>Message</label>
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                        id='message' name='Message' type="text" placeholder='Message' required></textarea>
                </div>
                <button className='bg-blue-600 rounded text-white py-2 px-12 mb-10 cursor-pointer'>{result ? result : 'Send Message'}</button>
            </form>
        </div>
    )
}

export default Contact