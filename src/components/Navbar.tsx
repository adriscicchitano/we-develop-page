import React from 'react';
import backgroungImage from "../img/logo.png"

export default function Navbar() {
    return(
        <div>
            <button id='logo' style={{
                backgroundImage: `url(${backgroungImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}></button>
            <button>Services</button>
            <button>About Us</button>
            <button>Testimonials</button>
            <button>Blog</button>
            <button>Career</button>
            <button>Get in Touch</button>
        </div>
    )
}