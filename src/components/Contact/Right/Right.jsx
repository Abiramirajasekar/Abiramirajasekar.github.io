import React from 'react'
import style from "./right.module.css"

function Right() {
    return (
      <div className={style.rightbody}>
        <div className={style.wrapper}>
          <form>
            <div>Email</div>
            <div>
              <input type="text" />
            </div>
            <div>Subject</div>
            <div>
              <input type="text" />
            </div>
            <div>Message</div>
            <div>
              <textarea name="Text1" cols="40" rows="5"></textarea>
            </div>

            <button className={style.button}>Send</button>
          </form>
        </div>
      </div>
    );
}

export default Right
