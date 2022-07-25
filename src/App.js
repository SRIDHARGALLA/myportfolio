import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import Skillset from './components/Skillset';
import Contact from  './components/Contact'
import Footer from './components/Footer';
import scrollreveal from 'scrollreveal';
import {useEffect} from "react";
import ScrollToTop from './components/ScrollToTop';
import Personalinfo from './components/Personalinfo';

function App() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: 'top',
      distance: '30px',
      duration: 2000,
      opacity: 0.8,
      reset: true
    });
    sr.reveal(`.title,
    .profile,
    .resumedow,
    .scDownBtn,
    .heading,
    .each-slide-effect,
    .skillsets,
    .contact,
    .connects,
    .resume-title,
    .resume-item,
    `, {
      opacity: 0
    }
  );
    
  }, []);
    
    



  
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Main />
      <Projects />
      <Skillset />
      <Personalinfo />
      <Contact />
      <Footer />
 
      
    </div>
  );
}

export default App;
