import React, {ReactNode} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NewsletterSubscriptionForm from "../NewsletterSubscriptionForm/NewsletterSubscriptionForm";

interface AppProps {
  children: ReactNode
}

export default function Layout(props: AppProps){
  
  const {children} = props
  
  return(
    <>
      <Navbar/>
      {children}
      <NewsletterSubscriptionForm/>
      <Footer/>
    </> 
  )
}