import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import Home from './pages/Home/Home';
import reportWebVitals from './reportWebVitals';
import classes from './components/Navbar/styles.module.scss'
import burguer from './img/burguer.png'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <nav className={classes.burguer} onClick={console.log}>
        <button><img src={burguer} alt=""/></button>
        <ul className={classes.burguerDropdown}>
          <li><a className={classes.dropdownElement} href='/'>About Us</a></li>
          <li><a className={classes.dropdownElement} href='/'>Testimonials</a></li>
          <li><a className={classes.dropdownElement} href='/'>Blog</a></li>
          <li><a className={classes.dropdownElement} href='/'>Career</a></li>
          <li>
              <button className={classes.dropdowngetInTouch}>Get in Touch</button>
          </li>
        </ul>
      </nav>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
