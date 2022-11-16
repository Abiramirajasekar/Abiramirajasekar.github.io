import React from 'react';
import style from "./profile.module.css";
import Details from "./Details/Details"
import Photo from "./Photo/Photo"

function Profile({IsMobile}) {
    return (
      <div className={style.profilebody} >
     {IsMobile?<div style={{marginTop:"150px"}} >
          <Photo />
        </div>:
        <div >
          <Photo />
        </div>
}
        <div>
          <Details />
        </div>
      </div>
    );
}

export default Profile
