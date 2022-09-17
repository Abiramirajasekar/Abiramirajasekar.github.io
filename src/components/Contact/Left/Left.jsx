import React from "react";
import style from "./left.module.css";

function Left() {
  return (
    <div className={style.leftbody}>
      <div className={style.wrapper}>
        <div
          style={{
            color: "#B37D4E",
            fontSize: "30px",
            fontFamily: "'Roboto', sans-serif",
            paddingLeft: "20px",
            fontWeight: "900",
          }}
        >
          Have an idea?
        </div>
        <div
          style={{
            color: "#286DAB",
            paddingLeft: "20px",
            fontSize: "20px",
            paddingTop: "10px",
            fontWeight: "700",
          }}
        >
          Let's Connect!!
        </div>
        <div className={style.maildiv}>
          <svg
            style={{ position: "absolute", marginLeft: "20px" }}
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

          <a href="mailto:abiramirajasekar002@gmail.com" style={{ textDecoration: "none" }}>

            <span style={{ paddingLeft: "55px", cursor: "pointer" }}>
              abiramirajasekar002@gmail.com
            </span>
          </a>
        </div>

        <div className={style.phonediv}>
          <svg
            style={{ position: "absolute", marginLeft: "20px" }}
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

          <span style={{ paddingLeft: "55px", color: "black" }}>
            +91 7708772319
          </span>
        </div>
        <div className={style.icondiv}>
          <a target="_blank" href="https://github.com/Abiramirajasekar">
            <img className={style.img} src="/github.svg" alt="github" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/abirami-rajasekar-1a2bb215b/">
            <img className={style.img} src="/linkedin.svg" alt="linkedin" />
          </a>
          <a target="_blank" href="https://twitter.com/Magizhula">
            <img src="/twitter.gif" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Left;
