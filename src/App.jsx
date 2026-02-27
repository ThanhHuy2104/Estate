import React from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonails from './Components/Testimonials'
import Contact from './Components/Contact'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
    </div>
  )
}

export default App