import React from 'react';
import logo from "../../img/logo.png"
import burguer from "../../img/burguer.png"
import classes from './styles.module.scss'

export default function Navbar() {



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
      <nav className={classes.burguer} onClick={console.log}>
        <button><img src={burguer} alt=""/></button>
        <ul className={classes.burguerDropdown}>
          <li><a href='/'>About Us</a></li>
          <li><a href='/'>Testimonials</a></li>
          <li><a href='/'>Blog</a></li>
          <li><a href='/'>Career</a></li>
          <li>
            <div className={classes.getInTouch}>
              <button>Get in Touch</button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    )
  }