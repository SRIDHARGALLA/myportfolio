import React from 'react'
import './Header.css'
import { useState } from "react";



const Header = () => {
  
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }



    const TheamChange = () => {
        const color = document.querySelector('input[name="theme"]:checked').value;
        
       
        if (document.getElementById("switch-1").checked){
            document.body.style.backgroundColor =color;
            document.querySelector(".App").style.backgroundImage=`radial-gradient(at top left, transparent 67%,${color} 67.1%),linear-gradient(135deg, #070707 0%, #1b1e24 100%)`;
            document.querySelector(".header").style.backgroundColor=color;
            document.querySelector(".brandname").style.backgroundColor="black";
            document.querySelector(".header .bi-twitter").style.color="black";
            document.querySelector(".header .bi-instagram").style.color="black";
            document.querySelector(".header .bi-github").style.color="black";
            document.querySelector(".header .bi-linkedin").style.color="black";
            document.querySelector(".header .bi-gear").style.color="black";
            document.querySelector(".connects").style.color=color;
            document.querySelector(".connects .bi-twitter").style.color=color;
            document.querySelector(".connects .bi-instagram").style.color=color;
            document.querySelector(".connects .bi-github").style.color=color;
            document.querySelector(".connects .bi-linkedin").style.color=color;
            document.querySelector(".brandname .s_up").style.color=color;
            document.querySelector(".brandname .g_down").style.color=color;

            document.querySelector(".copyright").style.color=color;






            


        }
        else{
            document.body.style.backgroundColor = "white";
            document.querySelector(".App").style.backgroundImage=`radial-gradient(at top left, transparent 67%,#fff 67.1%),linear-gradient(135deg, #070707 0%, #1b1e24 100%)`;
            document.querySelector(".header").style.backgroundColor="";
            document.querySelector(".brandname").style.backgroundColor="";
            document.querySelector(".header .bi-twitter").style.color="";
            document.querySelector(".header .bi-instagram").style.color="";
            document.querySelector(".header .bi-github").style.color="";
            document.querySelector(".header .bi-linkedin").style.color="";
            document.querySelector(".header .bi-gear").style.color="";
            document.querySelector(".connects").style.color="";
            document.querySelector(".connects .bi-twitter").style.color="";
            document.querySelector(".connects .bi-instagram").style.color="";
            document.querySelector(".connects .bi-github").style.color="";
            document.querySelector(".connects .bi-linkedin").style.color="";
            document.querySelector(".brandname .s_up").style.color="";
            document.querySelector(".brandname .g_down").style.color="";

            document.querySelector(".copyright").style.color="";






        }
    }



    function SelectBox(){
        const color = document.querySelector('input[name="theme"]:checked').value;



        if(color === "#5a8dee"){
        document.querySelector(".themebox").style.border="2px solid white";  
        document.querySelector(".themebox1").style.border="";
        document.querySelector(".themebox2").style.border="";
        document.querySelector(".themebox3").style.border="";
        }else if(color==="#46A094"){
            document.querySelector(".themebox1").style.border="2px solid white"; 
            document.querySelector(".themebox").style.border="";
            document.querySelector(".themebox2").style.border="";
            document.querySelector(".themebox3").style.border="";
        }else if(color==="#6BBD99"){
            document.querySelector(".themebox1").style.border=""; 
            document.querySelector(".themebox").style.border="";
            document.querySelector(".themebox2").style.border="2px solid white";
            document.querySelector(".themebox3").style.border="";
        }else if(color==="#C4E8C2"){
            document.querySelector(".themebox1").style.border=""; 
            document.querySelector(".themebox").style.border="";
            document.querySelector(".themebox2").style.border="";
            document.querySelector(".themebox3").style.border="2px solid white";
        }
    }
    
 
   



  return (
    <div className='header'>
        <div className='brand'>
            <div className='brandname'>
                <h2 className='s_up'>S</h2><h2 className='g_down'>G</h2>
            </div>

        </div>
        <div className='headerItems'>
            <div>
               <a href='https://instagram.com/isridhargalla?igshid=YmMyMTA2M2Y='  target='_blank'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                </a>
            </div>
            <div>
               <a href='https://github.com/SRIDHARGALLA'   target='_blank'>
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
               </a>
            </div>
            <div >
                <a href='https://twitter.com/isridhargalla?t=3Q4pSp0_MueYfdGhvfIMIA&s=09'  target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg></a>
               

            </div>
            <div >
                <a href='https://www.linkedin.com/in/sridhargalla'  target='_blank'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                </a>
               
            </div>
            <div   onClick={ToggleSidebar} >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
            </div>

        </div>
      
      

        <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Set theme</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                             </svg>
                            </div>
                        </div>
                        <div className="sd-body">
                            <ul>

                                <li>
                                    <p className='theamname'>Select Color </p>
                                    <div className="theam-list" >

                                    <div id="theme1"  className="themebox" onClick={SelectBox}>
                                     <input id='#5a8dee'type="radio" name="theme"  value="#5a8dee"/>
                                     </div>
                                    <div id="theme2" className="themebox1"  onClick={SelectBox}>
                                     <input  id='#46A094'type="radio" name="theme"  value="#46A094" /></div>
                                     <div id="theme3" className="themebox2"  onClick={SelectBox}><input id='#6BBD99' type="radio" name="theme"  value="#6BBD99" /></div>
                                     <div id="theme4"className="themebox3"  onClick={SelectBox}><input id='#C4E8C2' type="radio" name="theme"  value="#C4E8C2" /></div>
                                    </div>


                                </li>
                                <li>  
                              
                                    <div class="switch">
                                        <input id="switch-1" type="checkbox"  class="switch-input" />
                                        <label for="switch-1" class="switch-label">Switch</label>
                                    </div>
                                </li>
                                <li>
                                <div>
                                         <button className='theamebtn' onClick={TheamChange}>Apply</button>
                                </div>
                                </li>
                              
  
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}>

                    </div>
           </div>
    
    )
}

export default Header