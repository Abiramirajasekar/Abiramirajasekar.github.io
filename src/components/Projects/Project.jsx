import React from "react";
import Project1 from "./Project-1/Project1";
import Project2 from "./Project-2/Project2";
import Project3 from "./Project-3/Project3";
import Project4 from "./Project-4/Project4";
import Project5 from "./Project-5/Project5";
import Project6 from "./Project-6/Project6";
import style from "./project.module.css";

function Project() {
  return (
    <>
      <h1
        className={style.h1}
        style={{ marginTop: "40px", fontFamily: "'Roboto', sans-serif" }}
      >
        Projects
      </h1>
      <div className={style.project}>
        <div className={style.projectcontent}>
          <Project1 />
          <Project2 />
          <Project4 />
          <Project3 />
          <Project5 />
          <Project6/>
        </div>
      </div>
    </>
  );
}

export default Project;
