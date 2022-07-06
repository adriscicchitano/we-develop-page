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
          <a href='/coding'>Services</a>
          <a href='/'>About Us</a>
          <a href='/'>Testimonials</a>
          <a href='/'>Blog</a>
          <a href='/'>Career</a>
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
          <a className={classes.navigationElement} href='/coding'>About Us</a>
          <hr className={classes.linkSeparator}/>
          <a className={classes.navigationElement} href='/'>Testimonials</a>
          <hr className={classes.linkSeparator}/>
          <a className={classes.navigationElement} href='/'>Blog</a>
          <hr className={classes.linkSeparator}/>
          <a className={classes.navigationElement} href='/'>Career</a>
          <hr className={classes.linkSeparator}/>
          <button className={classes.dropdownGetInTouch}>Get in Touch</button>
        </div>
      </div>
    </>
    )
  }