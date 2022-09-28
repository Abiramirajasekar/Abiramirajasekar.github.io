import React, { useEffect, useState } from "react";
import youtube from "./youtube.svg";
import img1 from "./UB1.jpg";
import img2 from "./UB2.jpg";
import img3 from "./UB3.jpg";
import img4 from "./UB4.jpg";
import left from "./left.gif";
import right from "./right.gif";
import style from "./project4.module.css";

const Project4 = () => {
  const [current, setCurrent] = useState(0);
  const SliderData = [
    {
      id: 0,
      image: img1,
    },
    {
      id: 1,
      image: img2,
    },
    {
      id: 2,
      image: img3,
    },
    {
      id: 3,
      image: img4,
    },
  ];

  // useEffect(() => {
  //   setInterval(() => {
  //    setCurrent(prev=>prev+1)
  //   },1000)
  // },[])

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(SliderData) || SliderData.length <= 0) {
  //   return null;
  // }

  return (
    <div className={style.project1body}>
      <div className={style.slider}>
        <img src={left} className={style.left_arrow} onClick={prevSlide} />
        <img src={right} className={style.right_arrow} onClick={nextSlide} />
        {SliderData.map((slide) => {
          return (
            slide.id == current && (
              <div className={style.imageediv} key={slide.id}>
                <img className={style.proimg} src={slide.image} alt="img"></img>
              </div>
            )
          );
        })}
      </div>

      <div className={style.procontentdiv}>
        <h2
          style={{
            textAlign: "center",

            fontWeight: "bolder",
          }}
        >
          UNBOUNCE(Solo project)
        </h2>
        <p>
          Unbounce is an excellent platform to create landing pages with an
          easy drag and drop system. We can pick from numerous mobile responsive templates
          to design our pages along with pop-up windows which help us to reach our
          targeted customers easily and this strategy helps us to grow more customers and sales.
        </p>

        <h3 style={{ color: "#B37D4E" }}>Tech stack:</h3>
        <p>
          Next.js | JavaScript | React | Chakra-UI
        </p>

        <div className={style.btndivv}>
          <button className={style.btnpro} style={{ backgroundColor: "black" }}>
            <a
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              href="https://github.com/Abiramirajasekar/safe-dust-2674"
            >
              <span>
                <svg
                  style={{
                    color: "white",
                    marginTop: "5px",
                    position: "absolute",
                    left: "10",
                    bottom: "6",
                  }}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="1.1em"
                  width="1.1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </span>
              code
            </a>
          </button>
           <button
            className={style.btnpro}
            style={{ backgroundColor: "#286DAB" }}
          >
            <a
              className={style.anch}
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              href="https://unbounce.com/"
            >
              <span>
                <svg
                  style={{
                    color: "white",
                    marginTop: "5px",
                    position: "absolute",
                    left: "10",
                    bottom: "6",
                  }}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1.1em"
                  width="1.1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path>
                  <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path>
                </svg>
              </span>
              Live
            </a>
          </button> 
          {/* yt */}
          {/* <button className={style.btnpro} style={{ backgroundColor: "red" }}>
            <a
              className={style.anch}
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              href=""
            >
              <span>
                <img
                  src={youtube}
                  style={{
                    color: "white",
                    marginTop: "-2px",
                    position: "absolute",
                    left: "0",

                    width: "1.5em",
                    height: "1.5em",
                    marginLeft: "8px",
                  }}
                ></img>
              </span>
              Demo
            </a>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Project4;
