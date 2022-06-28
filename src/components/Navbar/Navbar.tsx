import React from 'react';
import logo from "../../img/logo.png"
import classes from './styles.module.scss'

export default function Navbar() {
  console.log(classes)
  return(
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <button>
          <img src={logo} alt=""/>
        </button>
      </div>
      <div className={classes.menu}>
        <button onClick={() => {console.log("456")}}>Services</button>
        <button>About Us</button>
        <button>Testimonials</button>
        <button>Blog</button>
        <button>Career</button>
      </div>
      <div className={classes.getInTouch}>
        <button>Get in Touch</button>
      </div>
    </div>
    )
  }