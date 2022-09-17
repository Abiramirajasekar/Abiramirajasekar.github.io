import React from 'react';
import style from "./photo.module.css"

function Photo() {
    return (
      <div className={style.photobody}>
        <div className={style.photodiv}>
          <img src="/Abi.jpg" />
        </div>
      </div>
    );
}

export default Photo
