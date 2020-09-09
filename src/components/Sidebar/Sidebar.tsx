import React, { Component } from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';




export class Sidebar extends Component{

  render() {
    return (
      
  
      <nav id="sidebar">
            <div id="dismiss">
               <i className="fa fa-arrow-left"></i>
            </div>
            <ul className="list-unstyled components">
               <p></p>
               <li>
                  <a href="/MyRides"><i className="fa fa-home"></i> My Rides</a>
               </li>
               <li>
                  <a href="/MyWallet"><i className='fa fa-money'></i> My Wallet</a>
               </li>
               <li>
                  <a href="#"><i className="fa fa-star" aria-hidden="true"></i> My Favourite</a>
               </li>
               <li>
               <a href="#"><i className="fa fa-bell" aria-hidden="true"></i>Notifications</a>
               </li>
               <li>
               <a href="#"><i className="fa fa-user-plus"></i> Invite Friends</a>
               </li>
               <li>
               <a href="#"> <i className="fa fa-comments"></i> Support </a>
               </li>
            </ul>

  </nav>
  
  
    );

  }
}
