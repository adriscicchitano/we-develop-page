import React from 'react';
import logo from "../../img/logo.png"
import burguer from "../../img/burguer.png"
import classes from './styles.module.scss'
import weDevelopLogo from '../../img/isologo.png'
import closeButton from '../../img/cross.png'
import { useState } from 'react';

export default function Navbar() {

  const [burguerOpen, setBurguerOpen] = useState(false)

  return(
    <>
      <div className={classes.navbar} style={{display: burguerOpen ? "none" : undefined}}>
        <div className={classes.logo}>
          <button>
            <img src={logo} alt=""/>
          </button>
        </div>
        <div className={classes.burguerLogo}>
          <button onClick={() => {setBurguerOpen(!burguerOpen)}}>
            <img src={burguer} alt=""/>
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
      <div className={classes.burguer} style={{display: !burguerOpen ? "none" : undefined}}>
        <div className={classes.navbarHeader}>
          <button><img src={weDevelopLogo} alt=""/></button>
          <button onClick={() => {setBurguerOpen(!burguerOpen)}}>
            <img src={closeButton} alt=""/>
          </button>
        </div>
        <div className={classes.burguerContainer}>
          <button className={classes.navigationElement}>About Us</button>
          <hr className={classes.linkSeparator}/>
          <button className={classes.navigationElement}>Testimonials</button>
          <hr className={classes.linkSeparator}/>
          <button className={classes.navigationElement}>Blog</button>
          <hr className={classes.linkSeparator}/>
          <button className={classes.navigationElement}>Career</button>
          <hr className={classes.linkSeparator}/>
          <button className={classes.dropdownGetInTouch}>Get in Touch</button>
        </div>
      </div>
    </>
    )
  }