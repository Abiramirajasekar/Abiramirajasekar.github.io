import React from "react";
import { useHistory } from "react-router";
import style from "./detail.module.css";
import Abirami_Resume from "../../Resume/Abirami_Resume.pdf"

function Details() {
  const history = useHistory();

  return (
    <div className={style.detailsbody}>
      <div className={style.contentbody}>
        <div className={style.smalldiv}>
          <p className={style.hi}>Hi, I am</p>
          <h1 className={style.name}>Abirami Rajasekar</h1>
          <p className={style.fullstack}>
            Full-stack Web Developer | Competitive programmer
          </p>
          <a

            download href={Abirami_Resume} target="_blank"
          // href="https://drive.google.com/file/d/1XPN5rShiRv-pCHP8kpBQZnur1mkLxrT3/view?usp=sharing"
          >
            {" "}
            <button className={style.resume} onClick={() => window.open("https://drive.google.com/file/d/1XPN5rShiRv-pCHP8kpBQZnur1mkLxrT3/view?usp=sharing")} >RESUME</button>
          </a>

          {/* <a download href={Abirami_Resume.pdf} target="_blank">
            <button className={style.resume} onClick={() => window.open("https://drive.google.com/file/d/1XPN5rShiRv-pCHP8kpBQZnur1mkLxrT3/view?usp=sharing")}>
              RESUME
            </button>
          </a> */}
          <div style={{ marginTop: "20px" }}>
            <a target="_blank" href="https://github.com/Abiramirajasekar">
              <img
                className={style.github}
                src="/github.svg"
                alt="github"
              ></img>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/abirami-rajasekar-1a2bb215b/">
              <img
                className={style.linkedin}
                src="/linkedin.svg"
                alt="linkedin"
              />
            </a>

            <a target="_blank" href="https://twitter.com/Magizhula">
              <img className={style.twitter} src="/twitter.gif" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Details;
