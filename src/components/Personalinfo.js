import React from 'react'
import scrollreveal from 'scrollreveal';
import {useEffect} from "react";
import './Personalinfo.css'
import Resume from '../assets/main/gsnvsc_resume.pdf'

const Personalinfo = () => {

    useEffect(() => {
        const sr = scrollreveal({
          origin: 'top',
          distance: '30px',
          duration: 2000,
          opacity: 0.8,
          reset: true
        });

        sr.reveal(`.resume-title,
          .resume-item
        `, {
          opacity: 0
        }

      );
        
      }, []);




  return (
    <div className='personalinfo'>
        <div className='education'>
        <h3 class="resume-title">Education</h3>
        <div class="resume-item">
            <h4>Bachelor of Computer Science &amp; Engineering</h4>
            <h5>2018 - 2022</h5>
            <p><em>Bharath Institute Of Heigher Education and Research, Chennai.</em></p>
            <h5>Objective</h5>
            <p>To obtain a position as a  software engineer  in a challenging  environment for  a dynamic company that create and develops well-designed products.</p>
           <a  href={Resume}  target='_blank'> <button className='resumebtn'>View Resume</button></a>
        </div>
        </div>
    </div>
  )
}

export default Personalinfo