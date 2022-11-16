import { useContext, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GitHub from './components/GitHub/Github';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skills';
import State from './components/Statistics/Statistics';

function App() {

  const[IsMobile,setIsMobile]=useState(false)

  return (
    <div className="App">
      <Navbar IsMobile={IsMobile} setIsMobile={setIsMobile}/>
      <div id="home"></div>
      <Profile IsMobile={IsMobile}/>
      <div id="about"></div>
      <About />
      <div id="project"></div>
      <div style={{height:"3vh"}}></div>
      <Project />
      <div id="skills"></div>
      <Skills />
      <State />
      <GitHub />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
