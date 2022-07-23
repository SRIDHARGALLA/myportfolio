import React from 'react'
import './Skillset.css'

const Skillset = () => {
  return (
    <div className='skillsets'>

        <h3>Skills</h3>
        <div className='skillset'>
        

        <p  className='skillname'>HTML</p>
        <div className='skillcontainer'>
            <div className='skills html'></div>
        </div>

        <p  className='skillname'>CSS</p>
        <div className='skillcontainer'>
            <div className='skills css'></div>
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