import React from 'react'
import './Skillset.css'

const Skillset = () => {
  return (
    <div className='skillsets'>

        <h3>Skills</h3>
        <div className='skillset'>
        

        <p  className='skillname'>React JS</p>
        <div className='skillcontainer'>
            <div className='skills rjs'></div>
        </div>

        <p  className='skillname'>Java SE</p>
        <div className='skillcontainer'>
            <div className='skills jse'></div>
        </div>

        <p  className='skillname'>Spring boot</p>
        <div className='skillcontainer'>
            <div className='skills sb'></div>
        </div>
        <p  className='skillname'>MERN stack</p>
        <div className='skillcontainer'>
            <div className='skills ms'></div>
        </div>
        <p  className='skillname'>JavaScript</p>
        <div className='skillcontainer'>
            <div className='skills js'></div>
        </div>
        <p  className='skillname'>Python</p>
        <div className='skillcontainer'>
            <div className='skills py'></div>
        </div>
        </div>
    </div>
  )
}

export default Skillset