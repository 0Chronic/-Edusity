import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Program from './Components/Navbar/Program/Program'
import Title from './Components/Navbar/Title/Title';

const App = () => {
  return (
  <div>
    <Navbar></Navbar>
     <Hero></Hero>
     
     <div className="container">
      <Title subTitle='Our PROGRAM' title='What We offer'></Title>
      <Program></Program>
     </div>
  </div>
  )
}

export default App
