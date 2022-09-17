import React from "react";
import style from "./about.module.css";

function About() {
  return (
    <div className={style.aboutbody} >
      <h1 className={style.h1}>About</h1>
      <div className={style.content}>
        Ace in Front-end and Back-end Web development using MERN. Always
        motivated and eager to work in tech-based companies. Love to learn new
        skills and implement them.Building interactive, real-life projects and
        contributing to the tech community.Love to dance and participated in
        many western group dance competitions.{" "}
      </div>

      <div className={style.aboutflex} style={{ marginTop: "10px" }}>
        <div style={{ position: "relative" }}>
          <img src="/pin.gif" style={{width:"1.3em",height:"1.3em",position:"absolute",left:"-30px"} }/>
          <span>Paramakudi,TamilNadu</span>
        </div>

        <div className={style.mail}>
          <svg
            style={{ left: "-30px", position: "absolute" }}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="About_icon__1B8FN"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
            ></path>
          </svg>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            
            href="mailto:abiramirajasekar002@gmail.com"
          >
        
            <span>abiramirajasekar002@gmail.com</span>
          </a>
        </div>

        <div style={{ position: "relative" }}>
          <svg
            style={{ left: "-30px", position: "absolute" }}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            class="About_icon__1B8FN"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"></path>
          </svg>
          <span>+91 7708772319</span>
        </div>
      </div>
    </div>
  );
}

export default About;
