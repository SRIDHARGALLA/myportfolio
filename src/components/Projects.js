import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Projects.css';
import projectimg1 from '../assets/project1.png';
import projectimg2 from '../assets/project2.png';
import projectimg3 from '../assets/project3.png';


const Projects = () => {
  return (
    <div><Zoom indicators={index => <div className="indicator">{}</div>} scale={1.4}>
    <div className="each-slide-effect">
        <div  className='con'>
        

                <img className='banner' src={projectimg1} alt=''/>
                <span className='pro-name'>
                    Todo App 
                </span>

               <a href='https://github.com/SRIDHARGALLA/TodoApp' target='_blank'> <input type='button' className='probtn' value='View Source Code'/></a>
        </div>
    </div>
    <div className="each-slide-effect">
        <div  className='con'>
        

        <img className='banner' src={projectimg2} alt=''/>
        <span className='pro-name'>
            Parking Lot Management System
        </span>
         <div>
         <a  className='pro-link' href=' https://sridhargalla.github.io/parking_lot_management_system/' target='_blank'> <input type='button' className='probtn' value='Go Live'/></a>
        <a className='pro-link' href='https://github.com/SRIDHARGALLA/parking_lot_management_system' target='_blank'> <input type='button' className='probtn' value='View Source Code'/></a>
        </div>
        </div>
    </div>
    <div className="each-slide-effect">
    <div  className='con'>
        

        <img className='banner' src={projectimg3} alt=''/>
        <span className='pro-name'>
            Simple Calculator
        </span>
        <div>
        <a className='pro-link' href=' https://sridhargalla.github.io/simplecalculator/' target='_blank'> <input type='button' className='probtn' value='Go Live'/></a>

        <a className='pro-link' href='https://github.com/SRIDHARGALLA/simplecalculator' target='_blank'> <input type='button' className='probtn' value='View Source Code'/></a>
        </div>
        </div>
    </div>
</Zoom>
</div>
  )
}

export default Projects