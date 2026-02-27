import React from 'react'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Testimonails from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    return (
        <div>
            <ToastContainer />
            <Header />
            <About />
            <Projects />
            <Testimonails />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home