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
                <span>About Us</span>
                <span>Our Team</span>
                <span>Blog</span>
                <span>Career</span>
              </div>      
            </div>
            <div className={classes.companyLinksContainer}>
              <span className={classes.linkContainerTitle}>SERVICES</span>
              <div className={classes.linkContainer}>
                <span>Web Development</span>
                <span>Staff Augmentation</span>
                <span>Tailor Made</span>
              </div>      
            </div>
            <div className={classes.companyLinksContainer}>
              <span className={classes.linkContainerTitle}>TECHNOLOGIES</span>
              <div className={classes.multiColumnInfo}>
                <div className={classes.linkContainer}>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>AWS</span>
                  <span>GraphQL</span>
                </div>
                <div className={classes.linkContainer}>
                  <span>Ruby on Rails</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                  <div className={classes.linkExtension}>
                    <span>See More </span>
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
                    <span> info@wedevelop.me</span>
                </div>
                <div className={classes.contactUs}>
                    <img src={location} alt=""/>
                    <span> WeDevelop LLC FL 33134, US</span>
                </div>
                <div className={classes.contactUs}>
                    <img src={phone} alt=""/>
                    <span>+1 (925) 448-6165</span>
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