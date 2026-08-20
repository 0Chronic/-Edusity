import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Program from './Components/Navbar/Program/Program'


const App = () => {
  return (
  <div>
    <Navbar></Navbar>
     <Hero></Hero>
     <div className="container">
      <Program></Program>
     </div>
  </div>
  )
}

export default App
