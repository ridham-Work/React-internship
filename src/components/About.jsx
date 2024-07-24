import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'

const About = () => {
    useEffect(() => {
   
        alert("welcome to the about page!")
      }, [])
      
  return (
    <div>
      about page
    </div>
  )
}

export default About
