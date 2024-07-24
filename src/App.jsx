import React from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import { ThemeProvider } from './context/ThemeContext'
import { useContext } from 'react'


const App = () => {
  return (
    <div>
   <ThemeProvider>
     
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/about' element={<About />} />
        </Routes>
   
    </ThemeProvider>
    </div>
  )
}

export default App
