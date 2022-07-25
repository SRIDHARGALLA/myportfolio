import React from 'react';
import './Main.css';
import profile from '../assets/main/profile.png';
import Resume from '../assets/main/gsnvsc_resume.pdf'


const Main = () => {
   

  function scrollDown() {
    // window.scrollBy(0,1000);
    window.scrollTo({
      top: 2800,
      behavior: 'smooth'
    });
    
  }

  return (
    <div className='main'>

      
        <div className='main-text'>
            <h2>Hi, I'm <span className='title'>Sridhar Galla</span></h2>
            <h3> <span className='title'>Frontend Developer.</span></h3>
        </div>
    
        <div className='main-image'>
            <img className='profile'src={profile} alt='sridhar galla' />
        </div>
        <div><a  href={Resume} download='isridhargalla_cv'> <input type='button' value='Resume' className='resumedow'/></a></div>
        <div className='scDownBtn'>  
              <div className='mouse'   onClick={scrollDown}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mouse" viewBox="0 0 16 16">
                  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"/>
                  </svg>
              </div>
              <h3 className='scd'> Scroll down </h3>  
             <div className='darrow'  onClick={scrollDown}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
              </svg>
              </div>
            </div>
    
            <div className='heading'>
              <h3>Projects</h3>
            </div>
    </div>
  )
}

export default Main