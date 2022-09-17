import React from 'react'
import style from "./contact.module.css"
import Left from './Left/Left'
import Right from './Right/Right'

function Contact() {
    return (
        <div className={style.contactbody} id="contact">
            <Left />
            <Right/>
        </div>
    )
}

export default Contact
