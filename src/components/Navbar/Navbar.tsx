import React, { Component } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';




export class NavbarMain extends Component{

  render() {
    return (
      
  
      
  
<header id="header" className="header-inner-pages">
         <div className="container-fluid d-flex align-items-center justify-content-between pdt10">
         
         <h1 className="logo"><a href="/">
            <img src="assets/img/logo.png"/>
         </a></h1>
               <nav className="nav-menu d-none d-lg-block">
            <ul>
               <li className="active"><a href="/">Home</a></li>
               <li><a href="/#aboutus">About</a></li>
               <li><a href="/#why">Why</a></li>
            </ul>
         </nav>
        <a href="https://eraswap.life/" target="_blank" className="get-started-btn scrollto btn">Connect To Wallet</a>

         </div>
   

        {/* <svg class="al-wave" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1240 120" style="enable-background:new 0 0 1240 120;" xml:space="preserve">
        <path class="hk" d="M682.2,39.6C418.5-11.1,140.2,9.9,0,30v96h1440V30C1252.7,52.2,1011,96.4,675.6,38.7z" fill="#ffffff" />
    </svg> */}
   {/* <div id="header" className="fixed-top ">
      <div className="container-fluid d-flex align-items-center justify-content-between">
         <h1 className="logo"><a href="index.html">
            <img src="assets/img/poolindapp.png"/>
            </a>
         </h1>
         <nav className="nav-menu d-none d-lg-block">
            <ul>
               <li className="active"><a href="index.html">Home</a></li>
               <li><a href="#features">Features </a></li>
               <li><a href="#benefit">Benefit</a></li>
            </ul>
         </nav>
         <a href="https://eraswap.life/" target="_blank" className="get-started-btn scrollto">Connect To Wallet</a>
      </div>
   </div> */}
  
</header>
    );

  }
}
