import React, { useContext, useState } from "react";
import style from "./navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import Abirami_Resume from "../Resume/Abirami_Resume.pdf"

function Navbar({ IsMobile, setIsMobile }) {

  return (
    <div className={style.navbody}>
      <div className={style.hs}><a style={{ textDecoration: "none", color: "#286DAB" }} href="#home">AR</a></div>
      <button className={style.mobilemenuicon} onClick={() => setIsMobile(!IsMobile)} >
        {IsMobile ? <FiX /> : <FiMenu />}
      </button>

      {IsMobile ?
        < div className={style.navlinksmobile}>
          <a href="#home" className={style.a1}>
            Home
          </a>
          <a href="#about" className={style.a2}>
            About
          </a>
          <a href="#project" className={style.a3}>
            Project
          </a>
          <a href="#skills" className={style.a4}>
            Skills
          </a>
          <a href="#contact" className={style.a5}>
            Contact
          </a>
          <a download href={Abirami_Resume} target="_blank"
            className={style.a6} onClick={() => window.open("https://drive.google.com/file/d/1XPN5rShiRv-pCHP8kpBQZnur1mkLxrT3/view?usp=sharing")} >Resume
          </a>
        </div>
        : < div className={style.flexx}>
          <a href="#home" className={style.a1}>
            Home
          </a>
          <a href="#about" className={style.a2}>
            About
          </a>
          <a href="#project" className={style.a3}>
            Project
          </a>
          <a href="#skills" className={style.a4}>
            Skills
          </a>
          <a href="#contact" className={style.a5}>
            Contact
          </a>
          <a download href={Abirami_Resume} target="_blank">
            {" "}
            <button className={style.resume} onClick={() => window.open("https://drive.google.com/file/d/1XPN5rShiRv-pCHP8kpBQZnur1mkLxrT3/view?usp=sharing")} >Resume</button>
          </a>
        </div>}


    </div>
  );
}

export default Navbar;

