import React from "react";
import classes from './styles.module.scss'
import footer0 from "../../img/footer0.png"
import footer1 from "../../img/footer1.png"
import footer2 from "../../img/footer2.png"
import footer3 from "../../img/footer3.png"
import weDevelopLogo from "../../img/logo.png"
import clutchLogo from "../../img/clutch.png"
import starImage from "../../img/starImage.png"
import arrow from "../../img/Vector.png"
import message from "../../img/message.png"
import location from "../../img/location.png"
import phone from "../../img/phone.png"
import linkedin from "../../img/linkedin.png"
import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"
import lodash from "lodash"
export default function Footer() {
  
  const exampleURL = "https://www.google.com.ar/"

  return(
    <div className={classes.footerContent}>
      <div className={classes.footerImagesContainer}>
        <img src={footer0} alt="" />
        <img src={footer1} alt="" />
        <img src={footer2} alt="" />
        <img src={footer3} alt="" />
      </div>
      <div className={classes.footerContent}>
        <div className={classes.footerContainer}>
            <div className={classes.clutchReviewsSection}>
              <div>
                <img src={weDevelopLogo} alt="" />
              </div>
              <div className={classes.footerClutch}>
                <span className={classes.reviewedOn}>REVIEWED ON</span>
                <div className={classes.pointsContainer}>
                  <span className={classes.fivePointsBold}>5.0</span>
                  <span className={classes.fivePointsDivider}>/</span>
                  <span className={classes.fivePoints}>5.0</span>
                </div>
                <div className={classes.starsContainer}>
                  <div>
                    {lodash.times(5).map(() => {
                      return <img src={starImage} alt=""/>
                    })}
                  </div>
                  <span className={classes.reviewsAmount}>4 reviews</span>
                </div>
                <img className={classes.clutchLogo} src={clutchLogo} alt="" />
              </div>
            </div>
            <div className={classes.companyLinksContainer}>
              <span className={classes.linkContainerTitle}>COMPANY</span>
              <div className={classes.linkContainer}>
                <a href={exampleURL}>About Us</a>
                <a href={exampleURL}>Our Team</a>
                <a href={exampleURL}>Blog</a>
                <a href={exampleURL}>Career</a>
              </div>      
            </div>
            <div className={classes.companyLinksContainer}>
              <span className={classes.linkContainerTitle}>SERVICES</span>
              <div className={classes.linkContainer}>
                <a href={exampleURL}>Web Development</a>
                <a href={exampleURL}>Staff Augmentation</a>
                <a href={exampleURL}>Tailor Made</a>
              </div>      
            </div>
            <div className={classes.companyLinksContainer}>
              <span className={classes.linkContainerTitle}>TECHNOLOGIES</span>
              <div className={classes.multiColumnInfo}>
                <div className={classes.linkContainer}>
                  <a href={exampleURL}>React</a>
                  <a href={exampleURL}>Node.js</a>
                  <a href={exampleURL}>Python</a>
                  <a href={exampleURL}>AWS</a>
                  <a href={exampleURL}>GraphQL</a>
                </div>
                <div className={classes.linkContainer}>
                  <a href={exampleURL}>Ruby on Rails</a>
                  <a href={exampleURL}>PostgreSQL</a>
                  <a href={exampleURL}>MongoDB</a>
                  <div className={classes.linkExtension}>
                    <a href={exampleURL}>See More </a>
                    <img src={arrow} alt=""/>
                  </div>  
                </div>
              </div>    
            </div>
            <div className={classes.companyLinksContainer}>
              <span className={classes.linkContainerTitle}>CONTACT US</span>
              <div className={classes.linkContainer}>
                <div className={classes.contactUs}>
                    <img src={message} alt=""/>
                    <a href={exampleURL}> info@wedevelop.me</a>
                </div>
                <div className={classes.contactUs}>
                    <img src={location} alt=""/>
                    <a href={exampleURL}> WeDevelop LLC FL 33134, US</a>
                </div>
                <div className={classes.contactUs}>
                    <img src={phone} alt=""/>
                    <a href={exampleURL}>+1 (925) 448-6165</a>
                </div>
              </div>      
            </div>
        </div>
        <div className={classes.companyInfo}>
          <div className={classes.companyLegals}>
            <span>Privacy Policy</span>
            <span>|</span>
            <span>© 2021 WeDevelop LLC. All rights reserved</span>
          </div>
          <div className={classes.companyLegals}>
            <img src={linkedin} alt="linkedin logo"/>
            <img src={facebook} alt="facebook logo"/>
            <img src={instagram} alt="instagram logo"/>
          </div>
        </div>
      </div>
    </div>
    )
  }