import React from 'react'
import './Contact.css'



const Contact = () => {

  return (
    <div className='contact'>
        <div className='chead'><h3>Contact</h3> </div>
        <form>
        
        <div className='contact-field'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <input className='cf'type='text' id='name' placeholder='Enter Name' required/>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg>
            
            <input className='cf'type='email' placeholder='Enter Email' required/>
            </div>
            <div>
              <textarea className='cft' rows='5'placeholder='Start Typing' required/>
            </div>
            <button  className ='cfb'>Send Message</button>
        </div> 
        </form>
    </div>
  )
}

export default Contact