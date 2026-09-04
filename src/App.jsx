import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Program from './Components/Navbar/Program/Program'
import Title from './Components/Navbar/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
  <div>
    <Navbar></Navbar>
     <Hero></Hero>
     
     <div className="container">
      <Title subTitle='Our PROGRAM' title='What We offer'></Title>
      <Program></Program>
      <About></About>
      <Title subTitle='Gallery' title='Campus photos'></Title>
      <Campus></Campus>
                  <Title subTitle='TESTIMONIALS' title='What Student Says'></Title>
        <Testimonial></Testimonial>
              <Title subTitle='Contact Us' title='Get In Touch'></Title>
              <Contact></Contact>
              <Footer/>
     </div>
  </div>
  )
}

export default App
