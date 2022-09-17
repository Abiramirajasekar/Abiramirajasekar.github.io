import React from 'react';
import style from "./profile.module.css";
import Details from "./Details/Details"
import Photo from "./Photo/Photo"

function Profile() {
    return (
      <div className={style.profilebody} >
        
        <div>
          <Photo />
        </div>
        <div>
          <Details />
        </div>
      </div>
    );
}

export default Profile
