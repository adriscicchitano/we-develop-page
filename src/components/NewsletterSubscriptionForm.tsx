import React from "react";

export default function NewsletterSubscriptionForm() {
    return(
        <div>
            <div>NEWSLETTER</div>
            <div>Subscribe to our newsletter</div>
            <div>{"->yellow line<-"}</div>
            <input type="text" placeholder="Email"/>
            <button>Subscribe</button>
        </div>
    )
}