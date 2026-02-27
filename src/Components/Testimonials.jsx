import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonails = () => {
    return (
        <div className='container mx-auto py-10 lg:px-32
    w-full overflow-hidden' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                Customer <span className='underline underline-offset-4 
            under decoration-1 font-light'>Testimonials</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
                Real Stories from Those Who Found Home with Us
            </p>

            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonails, index) => {
                    return (
                        <div key={index} className='max-w-[340px] border border-gray-100 shadow-lg rounded px-8 py-12 text-center'>
                            <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonails.image} alt={testimonails.alt} />
                            <h2 className='font-bold text-xl'>{testimonails.name}</h2>
                            <p className='text-gray-500'>{testimonails.title}</p>
                            <div className='flex justify-center my-4'>
                                {Array.from({length: testimonails.rating}, (item, index) => {
                                    return (
                                        <img key={index} src={assets.star_icon}/>
                                    )
                                })}
                            </div>
                            <p className='text-gray-600'>{testimonails.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonails